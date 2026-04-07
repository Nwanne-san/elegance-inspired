"use client";

import {
  useState,
  useEffect,
  createContext,
  useContext,
  type ReactNode,
} from "react";
import RequestCallbackModal from "@/components/request-callback-modal";
import { WebinarFlyerModal } from "@/components/webinar-flyer-modal";

/** Minimum time between automatic webinar flyer prompts after a dismiss. */
const WEBINAR_FLYER_COOLDOWN_MS = 15 * 60 * 1000;
/** Minimum time between automatic callback prompts after a dismiss. */
const CALLBACK_MODAL_COOLDOWN_MS = 15 * 60 * 1000;
/** Initial delay before the callback modal auto-opens (5 minutes). */
const CALLBACK_MODAL_INITIAL_DELAY_MS = 5 * 60 * 1000;

const LS_WEBINAR_DISMISSED = "ei_webinar_flyer_dismissed_at";
const LS_CALLBACK_DISMISSED = "ei_callback_modal_dismissed_at";

type AppContextType = {
  openCallbackModal: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}

function canAutoPromptAgain(lastDismissedAt: string | null, cooldownMs: number) {
  if (!lastDismissedAt) return true;
  const then = Number(lastDismissedAt);
  if (Number.isNaN(then)) return true;
  return Date.now() - then >= cooldownMs;
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);
  const [isFlyerModalOpen, setIsFlyerModalOpen] = useState(false);

  const openCallbackModal = () => setIsCallbackModalOpen(true);
  const closeCallbackModal = () => setIsCallbackModalOpen(false);

  // Webinar flyer: auto-open once per session when cooldown allows (~2s delay)
  useEffect(() => {
    const dismissedAt = localStorage.getItem(LS_WEBINAR_DISMISSED);
    if (!canAutoPromptAgain(dismissedAt, WEBINAR_FLYER_COOLDOWN_MS)) return;

    const initialTimer = setTimeout(() => {
      setIsFlyerModalOpen(true);
    }, 2000);

    return () => clearTimeout(initialTimer);
  }, []);

  // Callback: auto-open ~3s only if flyer is not scheduled first (flyer on cooldown)
  useEffect(() => {
    const formSubmitted = localStorage.getItem("formSubmitted");
    if (formSubmitted) return;

    const callbackDismissed = localStorage.getItem(LS_CALLBACK_DISMISSED);
    if (!canAutoPromptAgain(callbackDismissed, CALLBACK_MODAL_COOLDOWN_MS)) return;

    const flyerDismissed = localStorage.getItem(LS_WEBINAR_DISMISSED);
    if (canAutoPromptAgain(flyerDismissed, WEBINAR_FLYER_COOLDOWN_MS)) {
      return;
    }

    const initialTimer = setTimeout(() => {
      setIsCallbackModalOpen(true);
    }, CALLBACK_MODAL_INITIAL_DELAY_MS);

    return () => clearTimeout(initialTimer);
  }, []);

  const handleFlyerClose = () => {
    localStorage.setItem(LS_WEBINAR_DISMISSED, String(Date.now()));
    setIsFlyerModalOpen(false);

    const formSubmitted = localStorage.getItem("formSubmitted");
    if (formSubmitted) return;

    const callbackDismissed = localStorage.getItem(LS_CALLBACK_DISMISSED);
    if (!canAutoPromptAgain(callbackDismissed, CALLBACK_MODAL_COOLDOWN_MS)) return;

    setTimeout(() => {
      setIsCallbackModalOpen(true);
    }, CALLBACK_MODAL_INITIAL_DELAY_MS);
  };

  const handleCallbackClose = () => {
    localStorage.setItem(LS_CALLBACK_DISMISSED, String(Date.now()));
    closeCallbackModal();
  };

  return (
    <AppContext.Provider value={{ openCallbackModal }}>
      {children}
      <WebinarFlyerModal
        open={isFlyerModalOpen}
        onOpenChange={(val) => {
          if (!val) handleFlyerClose();
          else setIsFlyerModalOpen(val);
        }}
      />
      <RequestCallbackModal
        open={isCallbackModalOpen}
        onOpenChange={(val) => {
          if (!val) handleCallbackClose();
          else setIsCallbackModalOpen(val);
        }}
      />
    </AppContext.Provider>
  );
}
