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
  const fill = Boolean(props.fill);
  const [isLoading, setIsLoading] = useState(!priority);
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    if (!priority) setIsLoading(true);
    setImgSrc(src);
  }, [src, priority]);

  const showSpinner =
    showLoadingIndicator && !priority && isLoading;
  const imageVisible = priority || !isLoading;

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        fill
          ? "absolute inset-0 h-full w-full min-h-0"
          : cn("flex items-center", aspectRatio),
        containerClassName
      )}
    >
      {showSpinner && (
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
          imageVisible ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
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
