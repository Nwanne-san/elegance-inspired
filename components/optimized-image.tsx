"use client";

import { useState, useEffect } from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<ImageProps, "onLoadingComplete"> {
  fallback?: string;
  showLoadingIndicator?: boolean;
  aspectRatio?: string;
  containerClassName?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  fallback = "/placeholder.svg",
  showLoadingIndicator = true,
  aspectRatio = "aspect-[16/9]",
  containerClassName,
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(!priority);
  const [imgSrc, setImgSrc] = useState(src);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Reset states when src changes
    if (!priority) setIsLoading(true);
    setIsError(false);
    setImgSrc(src);
  }, [src, priority]);

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        aspectRatio,
        containerClassName
      )}
    >
      {isLoading && showLoadingIndicator && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-800 animate-pulse z-10">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <Image
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "transition-opacity duration-300 object-cover",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setIsError(true);
          setImgSrc(fallback);
        }}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        sizes={
          props.sizes ||
          "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        }
        {...props}
      />
    </div>
  );
}
