import React from "react";

const Footer = () => {
  return (
    <footer className="mx-auto mt-auto w-full py-8 font-[family-name:var(--font-open-sans)]">
      <div className="container mx-auto px-4">
        <div className="text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Retaini. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
