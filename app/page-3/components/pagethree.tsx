"use client";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";




export default function PageThree() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
       <section>
          <div className="container mt-30 mb-14">
              <div className="flex flex-col xl:flex-row gap-29">
              <div
                  className="text-[88px] font-bold leading-none shrink-0"
                  data-aos="fade-right"
                  data-aos-duration="1000"
              >
                  Just that simple
              </div>
              <div
                  className="flex flex-col gap-4 w-full"
                  data-aos="fade-left"
                  data-aos-duration="1000"
              >
                  <div className="text-[26px] font-normal text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus in libero risus semper habitant arcu eget.
                  </div>
                  <div className="w-full lg:block">
                  <button className="font-medium text-lg bg-black text-white rounded-2xl  lg  py-4 px-8 hover:bg-primary hover:text-black ">
                      Get started
                  </button>
                  </div>
              </div>
              </div>
              <div
              className="w-full mt-15 lg:mt-30"
              data-aos="flip-left"
              data-aos-duration="1000"
              >
              <img src="img/banner/1.svg" alt="" className="w-full" />
              </div>
          </div>
      </section>
    </>
  );
}
