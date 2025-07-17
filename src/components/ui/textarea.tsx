import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  (props, ref) => (
    <textarea
      ref={ref}
      style={{ outline: "none", ...props.style }}
      {...props}
    />
  )
);

Textarea.displayName = "Textarea";
