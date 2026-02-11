"use client";
import OnlyPhotos from "@/app/components/home/1";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { Component, useEffect } from "react";




export default function FristPage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section>
        <div className="container mt-16 mb-14">
          <div className="text-center flex flex-col gap-2">
            <div className="font-medium text-4xl text-center text-[40px]" data-aos="fade-down" data-aos-duration="1000">
              Discover the beauty <br /> around the world
            </div>

            <div className="font-normal font-2xl" data-aos="fade-down" data-aos-duration="1000">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Faucibus in libero risus semper habitant arcu <br /> eget. Et integer facilisi eget diam.
            </div>
            <div>
              <button className="px-12 py-4.5 rounded-2xl bg-black text-white hover:bg-primary hover:text-black">
                  Explore
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-16">
              {[
                {photo: "/img/1/1.svg" },
                {photo: "/img/1/2.svg" },
                {photo: "/img/1/3.svg" },
                {photo: "/img/1/4.svg" },
                {photo: "/img/1/5.svg" },
                {photo: "/img/1/6.svg" },
                {photo: "/img/1/7.svg" },
                {photo: "/img/1/8.svg" },
              ].map((item) => (
                <OnlyPhotos
                  key={item.photo}                 
                  photo={item.photo}
                  
                />
              ))}
          </div>


        </div>
      </section>
    </>
  );
}
