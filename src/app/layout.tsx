import { CookiesProvider } from "next-client-cookies/server";
import "../styles/globals.css";
import ClientProviders from "./clientProvider";

export const metadata = {
  title: "Komas500",
  description: "A multi-vendor marketplace"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          <CookiesProvider>
            {children}
          </CookiesProvider>
        </ClientProviders>
      </body>
    </html>
  );
}
