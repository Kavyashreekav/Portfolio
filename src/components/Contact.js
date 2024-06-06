import React from "react";

const Contact = () => {
  const config = {
    email: "kavyashree20014@gmail.com",
    phone: "7760473648",
  };

  return (
    <section className="flex flex-col bg-primary px-5 py-28" id="contact">
      <div className=" flex flex-col items-center text-white">
        <h1 className="text-4xl  border-b-4  border-[#2b2d77] mb-5 w-[135px] font-bold">
          Contact
        </h1>
        <p className="pb-5 text-white">
          If you wanted to discuss more in detail, please contact me
        </p>
        <p className="py-2 ">
          <span className="font-bold">Email: </span>
          {config.email}
        </p>
        <p className="py-2 ">
          <span className="font-bold">Phone: </span>
          {config.phone}
        </p>
      </div>
    </section>
  );
};

export default Contact;
