import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Doctors | Complete Care Hospital",
  description:
    "Meet our team of experienced and compassionate doctors at Complete Care Hospital, Gwagwalada, Abuja. Find specialists in cardiology, orthopedics, pediatrics, and more.",
};

export default function DoctorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
