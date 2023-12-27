import AboutCarts from "./AboutCarts";
import MainButton from "../MainButton";
function About() {
  return (
    <>
      <div className="container">
        <section className="flex flex-col justify-between gap-2 about-section pb-[20rem]">
          <div className="container page-padding">
            <div className="flex gap-10 -mt-[8.5rem]">
              <AboutCarts />
            </div>

            <div className=" grid grid-cols-[50fr,50fr] gap-[3rem]">
              <div className="mt-[10.5rem] relative">
                <p className="text-white font-semibold text-[15px] relative uppercase z-10 pl-16 mb-12">
                  who we are
                </p>
                <img
                  src="../images/who-we-are/title-bg.svg"
                  alt="text_bg"
                  className="w-[31%] absolute -top-[6px]"
                />
                <h2 className="text-[35px] font-bold leading-tight mb-6 w-[60rem]">
                  Take Your Health And Body To Next Level
                </h2>
                <p className="text-[16px] text-[#646464] font-medium">
                  Gymat an unknown printer took a galley of type and scr arsry
                  it to make a type specimen book. It has survived notte only
                  five centuri but also the.
                </p>
                {/* about text icons */}
                <div className="flex mt-12 mb-[7rem] gap-[2px]">
                  <div className="flex flex-col  items-center text-center py-10 px-14 pl-7">
                    <img
                      src="../images/who-we-are/weightlifter.png"
                      alt="icon_img"
                      className={`w-[5.4rem] mb-6`}
                    />
                    <h3 className="uppercase font-bold text-[20px] leading-snug">
                      professional <br /> trainers
                    </h3>
                  </div>

                  <div className="flex flex-col items-center text-center border-solid border-l border-[rgb(0,0,0,0.2)] border-r py-10 px-14 ">
                    <img
                      src="../images/who-we-are/equpments.png"
                      alt="icon_img"
                      className={`w-[5.4rem] mb-6 `}
                    />
                    <h3 className="uppercase font-bold text-[20px] leading-snug">
                      modern <br /> equipments
                    </h3>
                  </div>

                  <div className="flex flex-col items-center text-center py-10 px-14 pr-2">
                    <img
                      src="../images/who-we-are/gym.png"
                      alt="icon_img"
                      className={`w-[5.4rem] mb-6`}
                    />
                    <h3 className="uppercase font-bold text-[20px] leading-snug">
                      fancy gym <br />
                      machines
                    </h3>
                  </div>
                </div>

                <MainButton
                  color={`text-white`}
                  bg={`bg-[#3f3f3f]`}
                  cN="about-cta"
                  arrowColor={`text-white`}
                  hover={`hover:bg-[#FF0336]`}
                />
              </div>

              <div className="relative">
                <img
                  src="../images/who-we-are/girl-run.png"
                  alt="girl_running"
                  className="girl-running"
                />
                <img
                  src="../images/who-we-are/girl-redbg.svg"
                  alt="bg-red"
                  className="girl-bg"
                />
                <img
                  src="../images/who-we-are/girl-side-text.png"
                  alt="bg-text"
                  className="girl-text"
                />
                <img
                  src="../images/who-we-are/wind.png"
                  alt="bg-wind"
                  className="girl-wind"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
