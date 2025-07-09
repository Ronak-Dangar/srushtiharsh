import "./globals.css";

export const metadata = {
  title: "A Special Surprise 💕",
  description: "A romantic surprise created with love",
  keywords: "love, romance, surprise, date",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#ec4899" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
