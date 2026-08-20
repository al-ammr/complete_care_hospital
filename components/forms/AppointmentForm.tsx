"use client";

import React, { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { CalendarDays, Clock, Send } from "lucide-react";
import { FormField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { submitAppointmentForm, type FormState } from "@/lib/actions";
import { services } from "@/lib/data";
import { fadeInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

const initialState: FormState = { success: false };

export function AppointmentForm({ defaultService = "" }: { defaultService?: string }) {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(
    submitAppointmentForm,
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
      className="rounded-2xl sm:rounded-3xl border border-secondary/10 bg-white p-5 sm:p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(37,99,235,0.2)] hover:border-blue-300 space-y-5 sm:space-y-6"
    >
      {/* Honeypot for spam protection */}
      <input type="text" name="_honey" className="sr-only" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      {/* Row 1: Name & Email */}
      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
        <FormField
          label="Full Name"
          name="name"
          type="text"
          placeholder="Amina Yusuf"
          required
          error={state.errors?.name?.[0]}
        />
        <FormField
          label="Email Address"
          name="email"
          type="email"
          placeholder="amina@example.com"
          required
          error={state.errors?.email?.[0]}
        />
      </div>

      {/* Row 2: Phone & Service */}
      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
        <FormField
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="+234 800 000 0000"
          required
          error={state.errors?.phone?.[0]}
        />

        {/* Custom select for service — styled to match FormField */}
        <div className="flex w-full flex-col gap-2">
          <label
            htmlFor="service"
            className="text-sm font-medium text-text-primary"
          >
            Service <span className="text-accent-emergency">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue={defaultService}
            className={cn(
              "w-full rounded-lg border bg-white px-4 py-3 text-text-primary transition-all duration-200 focus:outline-none focus:ring-2",
              state.errors?.service
                ? "border-accent-emergency focus:border-accent-emergency focus:ring-accent-emergency/30"
                : "border-border focus:border-secondary focus:ring-secondary/30"
            )}
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
          {state.errors?.service && (
            <p className="text-sm text-accent-emergency">
              {state.errors.service[0]}
            </p>
          )}
        </div>
      </div>

      {/* Row 3: Date & Time */}
      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
        <div className="flex w-full flex-col gap-2">
          <label
            htmlFor="preferredDate"
            className="text-sm font-medium text-text-primary"
          >
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={14} className="text-secondary" />
              Preferred Date
            </span>{" "}
            <span className="text-accent-emergency">*</span>
          </label>
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            required
            min={new Date().toISOString().split("T")[0]}
            className={cn(
              "w-full rounded-lg border bg-white px-4 py-3 text-text-primary transition-all duration-200 focus:outline-none focus:ring-2",
              state.errors?.preferredDate
                ? "border-accent-emergency focus:border-accent-emergency focus:ring-accent-emergency/30"
                : "border-border focus:border-secondary focus:ring-secondary/30"
            )}
          />
          {state.errors?.preferredDate && (
            <p className="text-sm text-accent-emergency">
              {state.errors.preferredDate[0]}
            </p>
          )}
        </div>

        <div className="flex w-full flex-col gap-2">
          <label
            htmlFor="preferredTime"
            className="text-sm font-medium text-text-primary"
          >
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} className="text-secondary" />
              Preferred Time
            </span>{" "}
            <span className="text-accent-emergency">*</span>
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            required
            defaultValue=""
            className={cn(
              "w-full rounded-lg border bg-white px-4 py-3 text-text-primary transition-all duration-200 focus:outline-none focus:ring-2",
              state.errors?.preferredTime
                ? "border-accent-emergency focus:border-accent-emergency focus:ring-accent-emergency/30"
                : "border-border focus:border-secondary focus:ring-secondary/30"
            )}
          >
            <option value="" disabled>
              Select a time
            </option>
            <option value="08:00">8:00 AM</option>
            <option value="09:00">9:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="13:00">1:00 PM</option>
            <option value="14:00">2:00 PM</option>
            <option value="15:00">3:00 PM</option>
            <option value="16:00">4:00 PM</option>
          </select>
          {state.errors?.preferredTime && (
            <p className="text-sm text-accent-emergency">
              {state.errors.preferredTime[0]}
            </p>
          )}
        </div>
      </div>

      {/* Row 4: Message (optional) */}
      <FormField
        label="Additional Notes"
        name="message"
        placeholder="Tell us about your symptoms or any special requirements..."
        multiline
        error={state.errors?.message?.[0]}
      />

      {/* Submit */}
      <Button
        type="submit"
        variant="secondary"
        size="lg"
        isLoading={isPending}
        className="w-full sm:w-auto transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(37,99,235,0.4)]"
      >
        <Send size={18} />
        {isPending ? "Booking..." : "Book Appointment"}
      </Button>
    </motion.form>
  );
}
