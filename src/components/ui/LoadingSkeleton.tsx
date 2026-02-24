"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface LoadingSkeletonProps {
  variant?: "card" | "text" | "avatar" | "button";
  className?: string;
  count?: number;
}

export function LoadingSkeleton({
  variant = "card",
  className = "",
  count = 1,
}: LoadingSkeletonProps) {
  const skeletons = Array.from({ length: count }, (_, i) => (
    <SkeletonItem key={i} variant={variant} className={className} />
  ));

  return <>{skeletons}</>;
}

function SkeletonItem({
  variant = "card",
  className,
}: Omit<LoadingSkeletonProps, "count">) {
  const baseClasses = "bg-gray-200 dark:bg-gray-700 animate-pulse";

  const variants = {
    card: "w-full h-64 rounded-lg",
    text: "h-4 rounded",
    avatar: "w-16 h-16 rounded-full",
    button: "h-10 px-6 rounded-lg",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    />
  );
}

// Skeleton específico para ProjectCard
export function ProjectCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <LoadingSkeleton variant="card" className="h-48" />
      <div className="p-6 space-y-4">
        <LoadingSkeleton variant="text" className="w-3/4" />
        <div className="space-y-2">
          <LoadingSkeleton variant="text" className="w-full" />
          <LoadingSkeleton variant="text" className="w-2/3" />
        </div>
        <div className="flex gap-2">
          {Array.from({ length: 3 }, (_, i) => (
            <LoadingSkeleton
              key={i}
              variant="text"
              className="w-16 h-6 rounded-full"
            />
          ))}
        </div>
        <div className="flex gap-4">
          <LoadingSkeleton variant="button" className="w-24" />
          <LoadingSkeleton variant="button" className="w-20" />
        </div>
      </div>
    </div>
  );
}

// Hook para estados de loading
export function useLoading(initialState = false) {
  const [isLoading, setIsLoading] = useState(initialState);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return { isLoading, startLoading, stopLoading, setIsLoading };
}
