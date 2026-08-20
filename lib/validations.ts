import { z } from "zod";

/**
 * Phone validation regex for Nigerian numbers.
 * Accepts: +234XXXXXXXXXX, 234XXXXXXXXXX, 0XXXXXXXXXX
 */
const nigerianPhoneRegex = /^(\+?234|0)\d{10}$/;

// ── Contact Form Schema ───────────────────────────────────────────────

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(nigerianPhoneRegex, "Please enter a valid Nigerian phone number (e.g. +234XXXXXXXXXX)"),
  subject: z
    .string()
    .min(1, "Subject is required")
    .max(200, "Subject must be less than 200 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// ── Appointment Form Schema ───────────────────────────────────────────

export const appointmentFormSchema = z.object({
  name: z
    .string()
    .min(1, "Full name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(nigerianPhoneRegex, "Please enter a valid Nigerian phone number (e.g. +234XXXXXXXXXX)"),
  service: z
    .string()
    .min(1, "Please select a service"),
  preferredDate: z
    .string()
    .min(1, "Preferred date is required"),
  preferredTime: z
    .string()
    .min(1, "Preferred time is required"),
  message: z
    .string()
    .max(2000, "Message must be less than 2000 characters")
    .optional()
    .or(z.literal("")),
});

export type AppointmentFormData = z.infer<typeof appointmentFormSchema>;
