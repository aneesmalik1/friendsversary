import "./globals.css";

export const metadata = {
  title: "Friendsversary"
 
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
