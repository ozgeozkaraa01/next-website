import React from "react";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <img src="/assets/bg-footer.png" className="animate-spin-slow" />
        {/* <Link
          href="mailto:ozgenurozkara@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid order-dark w-20 h-20 rounded-full font-semibold"
        >
          Hire Me
        </Link> */}
      </div>
    </div>
  );
};

export default HireMe;
