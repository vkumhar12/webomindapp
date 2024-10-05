import { gsap } from "gsap";
import Image from "next/image";
import { useEffect } from "react";

export default function OverlappingImages() {
  useEffect(() => {
    gsap.from(".card", {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative w-[500px] h-[400px]">
        {/* Card 1 */}
        <div className="absolute top-0 left-0 transform rotate-[5deg] z-10 card">
          <Image
            src="/images/image1.jpg"
            alt="Image 1"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* Card 2 */}
        <div className="absolute top-6 left-6 transform rotate-[10deg] z-20 card">
          <Image
            src="/images/image2.jpg"
            alt="Image 2"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* Card 3 */}
        <div className="absolute top-12 left-12 transform rotate-[15deg] z-30 card">
          <Image
            src="/images/image3.jpg"
            alt="Image 3"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* Card 4 */}
        <div className="absolute top-16 left-16 transform rotate-[20deg] z-40 card">
          <Image
            src="/images/image4.jpg"
            alt="Image 4"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* Card 5 */}
        <div className="absolute top-20 left-20 transform rotate-[25deg] z-50 card">
          <Image
            src="/images/image5.jpg"
            alt="Image 5"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
