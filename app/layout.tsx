import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";

export const metadata: Metadata = {
  title: "Datenium - where innovation meets intelligence.",
  description:
    "Datenium is your dedicated partner for comprehensive development solutions. With a focus on excellence and innovation, we bring together skilled development teams tailored to meet your unique needs. Whether you're embarking on a software project, building a digital presence, or enhancing your technological capabilities, NavyaNirmata.io delivers top-notch expertise. Our commitment to quality and efficiency ensures that your vision transforms into reality. Explore the limitless possibilities with NavyaNirmata.io – where development meets ingenuity for all your requirements.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth "
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="flex flex-col md:flex-row ">
        <main className="flex-grow ">
          <Navbar />
          <div>{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
