"use client"

import { useEffect, useState } from "react"

// Custom hook to determine if animations should be immediate (for mobile)
export function useImmediateAnimation() {
  const [shouldAnimate, setShouldAnimate] = useState(true)

  useEffect(() => {
    // Check if we're on mobile
    const isMobile = window.innerWidth < 768
    setShouldAnimate(!isMobile)

    // Update on resize
    const handleResize = () => {
      setShouldAnimate(window.innerWidth >= 768)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return shouldAnimate
}

// Usage example:
// const shouldAnimate = useImmediateAnimation()
// <motion.div
//   initial={shouldAnimate ? { opacity: 0 } : { opacity: 1 }}
//   animate={{ opacity: 1 }}
// >
