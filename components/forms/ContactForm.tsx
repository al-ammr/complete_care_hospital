"use client";

import React, { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { Send } from "lucide-react";
import { FormField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { submitContactForm, type FormState } from "@/lib/actions";
import { fadeInUp } from "@/lib/motion";

const initialState: FormState = { success: false };

export function ContactForm() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  useEffect(() => {
    if (state.success) {
      router.push("/thank-you");
    }
  }, [state.success, router]);

  return (
    <motion.form
      action={formAction}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      className="rounded-2xl sm:rounded-3xl border border-secondary/10 bg-white p-5 sm:p-8 shadow-xl space-y-5 sm:space-y-6"
    >
      {/* Honeypot for spam protection */}
      <input type="text" name="_honey" className="sr-only" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      {/* Row 1: Name & Email */}
      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
        <FormField
          label="Full Name"
          name="name"
          type="text"
          placeholder="Chukwuma Obi"
          required
          error={state.errors?.name?.[0]}
        />
        <FormField
          label="Email Address"
          name="email"
          type="email"
          placeholder="chukwuma@example.com"
          required
          error={state.errors?.email?.[0]}
        />
      </div>

      {/* Row 2: Phone & Subject */}
      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
        <FormField
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="+234 800 000 0000"
          required
          error={state.errors?.phone?.[0]}
        />
        <FormField
          label="Subject"
          name="subject"
          type="text"
          placeholder="e.g. General enquiry, feedback"
          required
          error={state.errors?.subject?.[0]}
        />
      </div>

      {/* Row 3: Message */}
      <FormField
        label="Message"
        name="message"
        placeholder="How can we help you today?"
        multiline
        required
        error={state.errors?.message?.[0]}
      />

      {/* Submit */}
      <Button
        type="submit"
        variant="secondary"
        size="lg"
        isLoading={isPending}
        className="w-full sm:w-auto"
      >
        <Send size={18} />
        {isPending ? "Sending..." : "Send Message"}
      </Button>
    </motion.form>
  );
}
