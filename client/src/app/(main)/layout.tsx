import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rent or share",
  description: "Make rides easy...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
