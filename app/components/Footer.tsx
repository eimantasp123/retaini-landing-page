import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 border-t mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-bold text-xl text-primary">ClientLoop</div>
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ClientLoop. Visos teisės saugomos.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
