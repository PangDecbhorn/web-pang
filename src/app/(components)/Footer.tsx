"use client";

const Footer = () => {
  return (
    <footer className="relative bg-[#ffff] border-t border-gray-300 text-gray-600 z-50">
      <div className="max-w-5xl mx-auto px-4 py-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} D. Jittrabhorn. All rights reserved.
        </p>
        {/* <div className="mt-4 flex justify-center gap-4 text-sm">
          <a  
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="mailto:you@example.com"
            className="hover:underline"
          >
            Email
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
