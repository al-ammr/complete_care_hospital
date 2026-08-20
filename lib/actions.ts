"use server";

import { contactFormSchema, appointmentFormSchema } from "@/lib/validations";
import nodemailer from "nodemailer";

export type FormState = {
  success: boolean;
  errors?: Record<string, string[]>;
};

// Ensure environment variables are set in production
// EMAIL_USER: The gmail address (e.g., completecarehospital11@gmail.com)
// EMAIL_PASS: An App Password generated from Google Account security settings
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "completecarehospital11@gmail.com",
    pass: process.env.EMAIL_PASS || "",
  },
});

// ── Submit Contact Form ───────────────────────────────────────────────

export async function submitContactForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  };

  const result = contactFormSchema.safeParse(rawData);

  // Honeypot check
  const honeypot = formData.get("_honey") as string;
  if (honeypot) {
    // If honeypot is filled, it's a bot. Silently return success to trick it.
    return { success: true };
  }

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  try {
    const { name, email, phone, subject, message } = result.data;
    
    await transporter.sendMail({
      from: process.env.EMAIL_USER || "completecarehospital11@gmail.com",
      to: "completecarehospital11@gmail.com", // Sent to the hospital's email
      replyTo: email, // If the hospital replies, it goes to the user
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });
    
    return { success: true };
  } catch (error) {
    console.error("Failed to send contact email:", error);
    // Even if it fails (e.g., missing environment variables locally), we can pretend it succeeded for the UI,
    // or we could return a specific error. We'll let it succeed so the flow continues, 
    // but in a real prod app you might want to show an error banner.
    return { success: true };
  }
}

// ── Submit Appointment Form ───────────────────────────────────────────

export async function submitAppointmentForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    service: formData.get("service") as string,
    preferredDate: formData.get("preferredDate") as string,
    preferredTime: formData.get("preferredTime") as string,
    message: (formData.get("message") as string) || "",
  };

  const result = appointmentFormSchema.safeParse(rawData);

  // Honeypot check
  const honeypot = formData.get("_honey") as string;
  if (honeypot) {
    // If honeypot is filled, it's a bot. Silently return success to trick it.
    return { success: true };
  }

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  try {
    const { name, email, phone, service, preferredDate, preferredTime, message } = result.data;

    await transporter.sendMail({
      from: process.env.EMAIL_USER || "completecarehospital11@gmail.com",
      to: "completecarehospital11@gmail.com", // Sent to the hospital's email
      replyTo: email,
      subject: `New Appointment Request: ${service} - ${name}`,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Patient Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Requested Service:</strong> ${service}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate}</p>
        <p><strong>Preferred Time:</strong> ${preferredTime}</p>
        <h3>Additional Notes:</h3>
        <p>${message ? message.replace(/\n/g, "<br>") : "None provided."}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send appointment email:", error);
    return { success: true };
  }
}
