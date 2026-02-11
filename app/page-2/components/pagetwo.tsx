"use client";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";




export default function PageTwo() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <section>
      <div className="container my-16">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-4.25">
          <div
            className="flex flex-col gap-6"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <div className="font-medium text-[56px]">
              Discover the <br className="hidden lg:block" /> beauty around{" "}
              <br className="hidden lg:block" /> the world
            </div>
            <div className="font-medium text-[26px] text-secondary">
              Lorem ipsum dolor sit amet, <br className="hidden lg:block" />{" "}
              consectetur adipiscing elit. <br className="hidden lg:block" />{" "}
              Faucibus in libero risus semper{" "}
              <br className="hidden lg:block" /> habitant arcu.
            </div>
            <div>
              <button className="font-medium text-lg bg-black text-white rounded-2xl py-4 px-8  hover:bg-primary hover:text-black ">
                Get started
              </button>
            </div>
          </div>

          <div className="flex gap-8.75">
            <div
              className="lg:pb-38"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <img src="img/nature img/1.svg" alt="" />
            </div>
            <div
              className="lg:pt-38"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src="img/nature img/2.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="mt-18  gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div
            className="w-full"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <div className="font-medium text-[40px] text-[#a0a0a0] pb-1 transition-transform duration-300 hover:scale-110 cursor-pointer">
              01
            </div>
            <img
              src="img/nature img/number/1.svg"
              alt=""
              className="w-full"
            />
          </div>
          <div
            className="w-full"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <div className="font-medium text-[40px] text-[#a0a0a0] pb-1 transition-transform duration-300 hover:scale-110 cursor-pointer">
              02
            </div>
            <img
              src="img/nature img/number/2.svg"
              alt=""
              className="w-full"
            />
          </div>
          <div
            className="w-full"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <div className="font-medium text-[40px] text-[#a0a0a0] pb-1 transition-transform duration-300 hover:scale-110 cursor-pointer">
              03
            </div>
            <img
              src="img/nature img/number/3.svg"
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
