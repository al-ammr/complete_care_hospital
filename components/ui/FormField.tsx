import { cn } from "@/lib/utils";
import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { AlertCircle } from "lucide-react";

export interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  multiline?: boolean;
}

export const FormField = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, FormFieldProps>(
  ({ className, label, error, multiline = false, ...props }, ref) => {
    const id = props.id || props.name;

    const inputClasses = cn(
      "w-full rounded-lg border bg-white px-4 py-3 text-text-primary transition-all duration-200 placeholder:text-text-muted focus:outline-none focus:ring-2",
      error
        ? "border-accent-emergency focus:border-accent-emergency focus:ring-accent-emergency/30"
        : "border-border focus:border-secondary focus:ring-secondary/30",
      className
    );

    return (
      <div className="flex w-full flex-col gap-2">
        <label htmlFor={id} className="text-sm font-medium text-text-primary">
          {label} {props.required && <span className="text-accent-emergency">*</span>}
        </label>

        {multiline ? (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            id={id}
            className={cn(inputClasses, "min-h-[120px] resize-y")}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            id={id}
            className={inputClasses}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              className="flex items-center gap-1.5 text-sm text-accent-emergency"
            >
              <AlertCircle size={14} />
              <span>{error}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);
FormField.displayName = "FormField";
