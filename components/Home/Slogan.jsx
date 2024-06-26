import React from "react";

const Slogan = () => {
  return (
    <div className="w-[100vw] h-[120vh] bg-[#97D4E3] flex gap-[8rem] px-[8rem] pt-[12rem] justify-center">
      <div className="flex flex-col gap-[1rem]">
        <h1 className="text-[70px] font-extrabold leading-[5rem]">
          DRINK <br />
          THE <br /> CHANGE
        </h1>
        <p className="text-[22px] text-[#1B3C87]">
          You say you love the planet. <br /> And if you truly do, <br /> you
          must&apos;ve felt that guilt while grabbing a plastic <br /> water
          bottle in your hands... <br /> We know the feeling... <br />
          And that&apos;s why, we, at PAPEL believe that our <br />
          hydration shouldn&apos;t hurt our home. <br /> Grab your eco-friendly
          hydration products to give a <br /> loving hug to nature.
        </p>
        <p className="text-[25px] text-[#1B3C87]">
          With <strong className="text-[32px] italic">PAPEL</strong>,
          here&apos;s your chance to
        </p>
        <h1 className="text-[35px] text-[#1B3C87] font-bold italic">
          Drink The Change
        </h1>
      </div>
      <div className="w-[35vw] h-[95vh] rounded-[3rem] shadow-lg bg-[#fff]"></div>
    </div>
  );
};

export default Slogan;
