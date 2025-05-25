"use client";

import {
  useState,
  useEffect,
  createContext,
  useContext,
  type ReactNode,
} from "react";
import RequestCallbackModal from "@/components/request-callback-modal";

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

export function AppProvider({ children }: { children: ReactNode }) {
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);
  const [hasShownOnce, setHasShownOnce] = useState(false);

  const openCallbackModal = () => setIsCallbackModalOpen(true);
  const closeCallbackModal = () => setIsCallbackModalOpen(false);


  const is24HoursPassed = (timestamp: string | null) => {
    if (!timestamp) return true;
    const now = Date.now();
    const then = Number(timestamp);
    return now - then > 24 * 60 * 60 * 1000;
  };

  useEffect(() => {
    const formSubmitted = localStorage.getItem("formSubmitted");
    const modalDismissedAt = localStorage.getItem("modalDismissedAt");

    if (formSubmitted || !is24HoursPassed(modalDismissedAt)) return;


    const initialTimer = setTimeout(() => {
      setIsCallbackModalOpen(true);
      setHasShownOnce(true);
    }, 3000);

    return () => clearTimeout(initialTimer);
  }, []);

  // If user closes the modal manually the first time, show again in 45 seconds
  useEffect(() => {
    const modalClosedCount = Number(
      localStorage.getItem("modalClosedCount") || "0"
    );

    if (!hasShownOnce || modalClosedCount >= 2) return;

    const formSubmitted = localStorage.getItem("formSubmitted");
    const modalDismissedAt = localStorage.getItem("modalDismissedAt");

    if (formSubmitted || !is24HoursPassed(modalDismissedAt)) return;

    const reappearTimer = setTimeout(() => {
      setIsCallbackModalOpen(true);
    }, 45000); // 45 seconds

    return () => clearTimeout(reappearTimer);
  }, [hasShownOnce]);

  const handleClose = () => {
    // Increment close count
    const count = Number(localStorage.getItem("modalClosedCount") || "0");
    localStorage.setItem("modalClosedCount", String(count + 1));

    // If closed again, set 24-hour lock
    if (count + 1 >= 2) {
      localStorage.setItem("modalDismissedAt", Date.now().toString());
    }

    closeCallbackModal();
  };

  return (
    <AppContext.Provider value={{ openCallbackModal }}>
      {children}
      <RequestCallbackModal
        open={isCallbackModalOpen}
        onOpenChange={(val) => {
          if (!val) handleClose();
          else setIsCallbackModalOpen(val);
        }}
      />
    </AppContext.Provider>
  );
}
