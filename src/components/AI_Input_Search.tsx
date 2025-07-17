import { Globe, Paperclip, Send } from "lucide-react";
import { useState } from "react";
import { Textarea } from "./ui/textarea";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";
import { useAutoResizeTextarea } from "../hooks/use-auto-resize-textarea";

export default function AI_Input_Search() {
  const [value, setValue] = useState("");
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 52,
    maxHeight: 200,
  });
  const handleSubmit = () => {
    setValue("");
    adjustHeight(true);
  };

  return (
    <div className="w-full py-4">
      <div className="relative max-w-xl w-full mx-auto">
        <div
          role="textbox"
          aria-label="Search input container"
          className="outline-none flex items-end gap-2 bg-black/5 dark:bg-white/5 rounded-xl px-4 py-3"
        >
          <Textarea
            id="ai-input-04"
            value={value}
            placeholder="Search the web..."
            className="w-full outline-none bg-transparent border-none dark:text-white placeholder:text-black/70 dark:placeholder:text-white/70 resize-none leading-[1.2] min-h-[52px] max-h-[200px]"
            ref={textareaRef}
            onChange={(e) => {
              setValue(e.target.value);
              adjustHeight();
            }}
          />
          <button
            type="button"
            onClick={handleSubmit}
            className={cn(
              "rounded-lg p-2 transition-colors flex-shrink-0",
              value
                ? "bg-black/10 text-white "
                : "bg-black/10 dark:bg-white/10 text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white cursor-pointer outline-none"
            )}
            style={{ marginBottom: '2px' }}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
