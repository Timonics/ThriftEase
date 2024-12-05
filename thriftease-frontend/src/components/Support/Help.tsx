import React from "react";

const Help: React.FC = () => {
  return (
    <div className="product-background h-screen flex items-center justify-center">
      <div className="w-full h-2/3 bg-appgreen p-4 flex flex-col gap-3 justify-center">
        <h1 className="text-4xl font-bold"><span className="text-appdarkblue text-5xl">ThriftEase.</span> Help and Support</h1>
        <p>
          We're here to ensure your buying and selling experience is smooth and
          hassle-free. Explore our resources below or get in touch with our
          support team for personalized assistance.
        </p>
        <div className="flex gap-5 items-center justify-center mt-5">
          <button className="p-2 bg-gray-950 text-appgreen font-semibold">Contact our Support Team</button>
          <button className="p-2 bg-gray-950 text-appgreen font-semibold">Send an Email</button>
        </div>
      </div>
    </div>
  );
};

export default Help;
