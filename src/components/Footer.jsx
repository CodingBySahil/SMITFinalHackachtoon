import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-4  w-full">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} My Company. All rights reserved.</p>
        <div className="text-sm">
          <a href="/terms" className="text-white hover:underline">Terms of Service</a> | 
          <a href="/privacy" className="text-white hover:underline"> Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
