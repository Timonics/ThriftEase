import React from "react";

const Account: React.FC = () => {
  const accountOptions = [
    {
      option_icon: "",
      option_name: "Your Profile",
      option_desc: "",
    },
    {
      option_icon: "",
      option_name: "Account Settings",
      option_desc: "",
    },
    {
      option_icon: "",
      option_name: "Random Shii",
      option_desc: "",
    },
  ];

  const accountOptionsElements = accountOptions.map((option, index) => (
    <div className={`${index == 1 && "mt-16"} w-1/3 flex flex-col items-center justify-center`}>
      <div className="bg-appdarkblue h-[300px] rounded-lg flex flex-col items-center justify-center w-2/3 transition ease-in-out duration-500 hover:scale-110 shadow-2xl">
        <h2 className="text-xl font-bold text-appgreen">
          {option.option_name}
        </h2>
        <p>{option.option_desc}</p>
      </div>
    </div>
  ));
  return (
    <div className="flex flex-col gap-10 h-screen home-background">
      <div className="h-[150px] bg-[#3ae983] shadow-xl relative">
        <div className="w-[150px] h-[150px] rounded-full bg-gray-800 absolute inset-x-1/2 transform -translate-x-1/2 -bottom-1/2 shadow-xl"></div>
      </div>
      <div className="flex justify-between w-full gap-5 p-4">
        {accountOptionsElements}
      </div>
    </div>
  );
};

export default Account;
