import { useRef } from "react";
import { useInView, type UseInViewOptions } from "framer-motion";

interface UseScrollAnimationOptions {
  once?: boolean;
  margin?: string;
  amount?: "some" | "all" | number;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: options.once ?? true,
    margin: options.margin ?? "-80px",
    amount: options.amount ?? "some",
  } as UseInViewOptions);

  return { ref, isInView };
}
