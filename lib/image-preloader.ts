/**
 * Preloads images to improve perceived performance
 * @param imagePaths Array of image paths to preload
 * @param onProgress Optional callback for progress updates
 * @returns Promise that resolves when all images are loaded
 */
export function preloadImages(
  imagePaths: string[],
  onProgress?: (loaded: number, total: number) => void
): Promise<void> {
  return new Promise((resolve) => {
    let loaded = 0;
    const total = imagePaths.length;

    // If no images to preload, resolve immediately
    if (total === 0) {
      resolve();
      return;
    }

    // Load each image
    imagePaths.forEach((path) => {
      const img = new Image();

      img.onload = img.onerror = () => {
        loaded++;

        if (onProgress) {
          onProgress(loaded, total);
        }

        if (loaded === total) {
          resolve();
        }
      };

      img.src = path;
    });
  });
}

/**
 * Preloads critical images on page load
 * @param imagePaths Array of critical image paths to preload
 */
export function preloadCriticalImages(imagePaths: string[]): void {
  if (typeof window === "undefined") return;

  // Use requestIdleCallback for non-critical preloading
  if ("requestIdleCallback" in window) {
    (window as any).requestIdleCallback(() => {
      preloadImages(imagePaths);
    });
  } else {
    // Fallback for browsers that don't support requestIdleCallback
    setTimeout(() => {
      preloadImages(imagePaths);
    }, 200);
  }
}
