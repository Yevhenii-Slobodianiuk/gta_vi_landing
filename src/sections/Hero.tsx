import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import { useMaskSettings } from "../../constants";
import CommingSoon from "./CommingSoon";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const { initialMaskPos, initialMaskSize, maskSize } = useMaskSettings();

  useGSAP(() => {
    gsap.set(".mask-wrapper", {
      maskPosition: initialMaskPos,
      maskSize: initialMaskSize,
    });

    gsap.set(".mask-logo", {
      margin: "-100vh",
      opacity: 0,
    });

    gsap.set(".entrance-message", {
      marginTop: "0vh",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        scrub: 2.5,
        end: "+=200%",
        pin: true,
      },
    });

    tl.to(".fade-out", { opacity: 0, ease: "power1.inOut" })
      .to(".scale-out", { scale: 1, ease: "power1.inOut" })
      .to(".mask-wrapper", { maskSize: maskSize, ease: "power1.inOut" }, "<")
      .to(".mask-wrapper", { opacity: 0 })
      .to(".overlay-logo", { opacity: 1, ease: "power1.inOut" }, "<")
      .to(
        ".entrance-message",
        {
          duration: 1,
          ease: "power1.inOut",
          maskImage:
            "radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)",
        },
        "<"
      )
      .to(".overlay-logo", { opacity: 0, ease: "power1.inOut" }, "<");
  });

  return (
    <section className="hero-section">
      <div className="size-full mask-wrapper">
        <img
          src="/images/hero-bg.webp"
          alt="background"
          className="scale-out"
        />
        <img
          src="/images/hero-text.webp"
          alt="hero-logo"
          className="title-logo fade-out"
        />
        <img
          src="/images/watch-trailer.png"
          alt="trailer"
          className="trailer-logo fade-out"
        />
        <div className="play-img fade-out">
          <img src="/images/play.png" alt="play" className="ml-1 w-7" />
        </div>
      </div>

      <div>
        <img
          src="/images/big-hero-text.svg"
          alt="logo"
          className="size-full object-cover mask-logo"
        />
      </div>

      <div className="fake-logo-wrapper">
        <img src="/images/big-hero-text.svg" alt="" className="overlay-logo" />
      </div>
      <CommingSoon />
    </section>
  );
};

export default Hero;
