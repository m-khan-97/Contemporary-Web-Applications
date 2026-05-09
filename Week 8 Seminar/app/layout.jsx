import "./style.css";

export const metadata = {
  title: "HitTastic",
  description: "Music search app built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
