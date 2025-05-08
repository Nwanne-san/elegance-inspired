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
  const [hasShownModal, setHasShownModal] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Check if we should show the modal on first visit
  useEffect(() => {
    if (!isMounted) return;

    const hasVisitedToday = localStorage.getItem("elegance_visited_today");

    if (!hasVisitedToday && !hasShownModal) {
      // Set a timeout to show the modal after 45 seconds (instead of 5)
      const timer = setTimeout(() => {
        setIsCallbackModalOpen(true);
        setHasShownModal(true);

        // Set a flag in localStorage that expires at the end of the day
        const now = new Date();
        const expiryDate = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          23,
          59,
          59
        );
        localStorage.setItem("elegance_visited_today", expiryDate.toString());
      }, 45000);

      return () => clearTimeout(timer);
    }
  }, [hasShownModal, isMounted]);

  const openCallbackModal = () => {
    setIsCallbackModalOpen(true);
  };

  return (
    <AppContext.Provider value={{ openCallbackModal }}>
      {children}
      <RequestCallbackModal
        open={isCallbackModalOpen}
        onOpenChange={setIsCallbackModalOpen}
      />
    </AppContext.Provider>
  );
}
