import { useEffect } from "react";
import ScheduleButton from "./core/ScheduleButton";

/* eslint-disable @next/next/no-img-element */
const DistributeAndManage = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("gsap").then(({ gsap }) => {
        import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
          gsap.registerPlugin(ScrollTrigger);

          gsap.to(".small-image", {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0,
            scrollTrigger: {
              trigger: ".distribute-section",
              start: "top 20%",

              toggleActions: "play none none none",
            },
          });

          gsap.to(".distribute-text", {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".distribute-section",
              start: "top 20%",
              toggleActions: "play none none none",
            },
          });
        });
      });
    }
  }, []);

  return (
    <section className="w-full flex flex-col lg:flex-row gap-10 items-center justify-center bottom-spacing distribute-section">
      <div className="lg:w-1/2 w-full relative">
        <img
          src="mange.jpeg"
          alt="Main Insurance Management"
          className="w-[427px] h-[487px] rounded-xl"
        />
        <img
          src="mask_group.png"
          alt="Decorative Mask Group"
          className="small-image w-[196.89px] h-[179.11px] absolute right-16 -bottom-16"
          style={{ opacity: 0, transform: "translateY(50px)" }}
        />
        <img
          src="mask_group.png"
          alt="Decorative Mask Group"
          className="small-image w-[196.89px] h-[179.11px] absolute top-1/3 -left-28"
          style={{ opacity: 0, transform: "translateY(50px)" }}
        />
      </div>

      <div className="lg:w-1/2 w-full flex flex-col gap-7 lg:items-end items-center">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center lg:text-right distribute-text"
          style={{ opacity: 0, transform: "translateY(50px)" }}
        >
          Distribute and manage <br /> insurance business in <br />
          <span className="text-red-500">one platform</span>
        </h1>
        <p
          className="text-sm text-center lg:text-right distribute-text"
          style={{ opacity: 0, transform: "translateY(50px)" }}
        >
          Manage your insurance business seamlessly using Webomindapps assurance
          platform. Increase revenue, expand product offerings.
        </p>
        <ScheduleButton />
      </div>
    </section>
  );
};

export default DistributeAndManage;
