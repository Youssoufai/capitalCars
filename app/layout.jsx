
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Didi Automobiles",
  description: "Didi Autos LTD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="font-raleway"
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
