"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Image, { type ImageProps } from "next/image";

interface ImageLoaderProps extends Omit<ImageProps, "onLoad" | "onError"> {
  fallback?: string;
  loadingComponent?: React.ReactNode;
}

export default function ImageLoader({
  src,
  alt,
  width,
  height,
  className,
  fallback = "/placeholder.svg",
  loadingComponent,
  ...props
}: ImageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState(src);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Reset states when src changes
    setIsLoading(true);
    setIsError(false);
    setImgSrc(src);
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setIsError(true);
    setImgSrc(fallback);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-800 animate-pulse">
          {loadingComponent || (
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          )}
        </div>
      )}
      <Image
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={`${className} ${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
}
