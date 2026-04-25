"use client";

import {
  useState,
  useEffect,
  createContext,
  useContext,
  type ReactNode,
} from "react";
import RequestCallbackModal from "@/components/request-callback-modal";
/** Minimum time between automatic callback prompts after a dismiss. */
const CALLBACK_MODAL_COOLDOWN_MS = 15 * 60 * 1000;
/** Initial delay before the callback modal auto-opens (15 seconds). */
const CALLBACK_MODAL_INITIAL_DELAY_MS = 1 * 15 * 1000;

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

function canAutoPromptAgain(
  lastDismissedAt: string | null,
  cooldownMs: number,
) {
  if (!lastDismissedAt) return true;
  const then = Number(lastDismissedAt);
  if (Number.isNaN(then)) return true;
  return Date.now() - then >= cooldownMs;
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);

  const openCallbackModal = () => setIsCallbackModalOpen(true);
  const closeCallbackModal = () => setIsCallbackModalOpen(false);

  // Callback: auto-open after delay when cooldown allows.
  useEffect(() => {
    const formSubmitted = localStorage.getItem("formSubmitted");
    if (formSubmitted) return;

    const callbackDismissed = localStorage.getItem(LS_CALLBACK_DISMISSED);
    if (!canAutoPromptAgain(callbackDismissed, CALLBACK_MODAL_COOLDOWN_MS))
      return;

    const initialTimer = setTimeout(() => {
      setIsCallbackModalOpen(true);
    }, CALLBACK_MODAL_INITIAL_DELAY_MS);

    return () => clearTimeout(initialTimer);
  }, []);

  const handleCallbackClose = () => {
    localStorage.setItem(LS_CALLBACK_DISMISSED, String(Date.now()));
    closeCallbackModal();
  };

  return (
    <AppContext.Provider value={{ openCallbackModal }}>
      {children}
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
