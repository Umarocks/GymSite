import React from "react";

function Featured() {
  return (
    <>
      <section className="page-padding py-[12.5rem] bg-white">
        <div className="container">
          <div className="flex flex-col text-center items-center relative">
            <p className="font-semibold text-white text-[15px] relative uppercase z-10">
              OUR FEATURED CLASS
            </p>
            <img
              src="../../../images/who-we-are/title-bg.svg"
              alt=""
              className="w-[20%] absolute top-[-10px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Featured;
