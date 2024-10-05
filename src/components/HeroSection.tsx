/* eslint-disable @next/next/no-img-element */
import ScheduleButton from "./core/ScheduleButton";

const HeroSection = () => {
  return (
    <section className="w-full top-spacing bottom-spacing flex flex-col lg:flex-row items-center justify-center">
      <div className="lg:w-1/2 w-full flex flex-col gap-7 items-center lg:items-start">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center lg:text-left">
          Distribute and manage <br />
          insurance business in <br />
          <span className="text-red-500">one platform</span>
        </h1>
        <p className="text-sm text-center lg:text-left">
          Manage your insurance business seamlessly using Webomindapps assurance
          platform. Increase revenue, expand product offerings.
        </p>
        <ScheduleButton />
      </div>
      <div className="lg:w-1/2 w-full">
        <img
          src="hero_img.png"
          alt="Insurance platform"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
