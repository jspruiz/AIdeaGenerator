import { useRef, useCallback } from "react";

export function useAutoResizeTextarea({ minHeight = 52, maxHeight = 200 } = {}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = useCallback((reset = false) => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = reset ? `${minHeight}px` : "auto";
    el.style.height = Math.min(el.scrollHeight, maxHeight) + "px";
  }, [minHeight, maxHeight]);

  return { textareaRef, adjustHeight };
}
