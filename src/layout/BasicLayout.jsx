/* eslint-disable react/prop-types */
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function BasicLayout({ children }) {
  return (
    <main className="h-screen w-full">
      <Toaster position="bottom-right" reverseOrder={false} />
      <Navbar />
      <div className="min-h-[calc(100vh-10.5rem)] w-full">{children}</div>
      <Footer />
    </main>
  );
}

export default BasicLayout;
