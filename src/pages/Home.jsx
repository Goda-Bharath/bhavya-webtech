import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import image2 from "../assets/image2.png";
import art from "../assets/image5.png";

function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const counterRef = useRef(null);

  /* Start counter when it becomes visible */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      {
        threshold: 0.5,
      },
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [started]);

  /* Counter animation */
  useEffect(() => {
    if (!started) return;

    let start = 0;

    const duration = 2000;
    const incrementTime = 20;
    const increment = end / (duration / incrementTime);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <span ref={counterRef}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function Home() {
  /*
     HERO ROTATING TEXT
 */

  const texts = [
    "Hi, WE ARE BHAVYA WEB TECHNOLOGIES",
    "EXPERT WEB & APP DEVELOPMENT",
    "PREMIUM UI/UX & PRODUCT DESIGN",
    "ADVANCED AI & AGENTIC SOLUTIONS",
    "DATA-DRIVEN SEO & MARKETING",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2900);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    // 🟨 RESPONSIVE CHANGE
    // Main page now controls the background and prevents overflow.
    <main className="relative min-h-screen overflow-hidden bg-[#13160b] text-white">
      {/* 
          BACKGROUND IMAGE
      */}

      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={image2}
          alt=""
          className="
            h-150
            w-full
            object-cover
            object-center
          "
        />

        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* 
          HERO SECTION
      */}

      <section
        className="
          relative
          z-10
          overflow-hidden
          px-4
          py-20
          sm:px-6
          md:px-8
          md:py-24
          lg:px-12
          lg:py-28
        "
      >
        {/* 
            HERO CONTAINER
         */}

        {/* 🟨 RESPONSIVE CHANGE */}
        <div
          className="
            mx-auto
            grid
            min-h-[calc(100vh-104px)]
            max-w-7xl
            items-center
            gap-12
            grid-cols-1
            md:grid-cols-2
            md:gap-8

            lg:grid-cols-2
            lg:gap-16
          "
        >
          {/* 
              LEFT HERO CONTENT
       */}

          {/* 🟨 RESPONSIVE CHANGE */}
          <div
            className="
              w-full
              text-center
              md:text-left
            "
          >
            {/* Rotating Small Heading */}

            {/* 🟨 RESPONSIVE CHANGE */}

            <h1
              key={currentIndex}
              className="
    absolute top-85
    left-1/5
    -translate-x-48

    text-sm
    font-bold
    text-white
    whitespace-nowrap

    sm:bottom-28F
    md:bottom-28

    lg:bottom-32

    xl:bottom-36

    animate-fade-out
  "
            >
              {texts[currentIndex]}
            </h1>

            {/* 
                MAIN HEADING
             */}

            {/* 🟨 RESPONSIVE CHANGE */}
            <h1
              className="
                mt-65
              
                font-bold
                leading-[0.95]
                text-white
                text-5xl

                sm:text-5xl

                md:text-5xl

                lg:text-7xl

                xl:text-5xl
              "
            >
              Transforming Ideas Into
              {/* Digital Solutions */}
              {/* 🟨 RESPONSIVE CHANGE */}
              <span
                className="
                  mt-3
                  flex
                  flex-col
                  items-center
                  gap-2

                  font-serif
                  italic
                  font-normal
                  tracking-tight

                  md:flex-row
                  md:items-center
                  md:gap-4

                  lg:text-9xl
                  xl:text-[5.5rem]
                "
              >
                {/* Flower + Digital */}

                {/* 🟨 RESPONSIVE CHANGE */}
                <span
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2

                    text-5xl

                    sm:text-6xl

                    md:text-6xl

                    lg:text-7xl
                  "
                >
                  <svg
                    width="130"
                    height="130"
                    viewBox="0 0 24 25"
                    fill="none"
                    className="
                      h-12
                      w-12
                      shrink-0
                      animate-[spin_20s_linear_infinite]
                      text-[#c9f31d]

                      sm:h-14
                      sm:w-14
                      md:h-16
                      md:w-16
                      lg:h-20
                      lg:w-20
                      xl:h-24
                      xl:w-24
                    "
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.1465 12.9802C26.5443 4.94733 20.0328 -1.56534 12 12.8337C3.96716 -1.56534 -2.5455 4.94733 11.8535 12.9802C-2.54427 21.013 3.96716 27.5256 12 13.1266C20.0328 27.5256 26.5455 21.013 12.1465 12.9802Z"
                      fill="currentColor"
                    />

                    <path
                      d="M12.1036 13.0838C27.9644 17.5845 27.9653 8.37506 12.1036 12.8766C16.6052 -2.98507 7.39485 -2.98507 11.8964 12.8766C-3.96441 8.37593 -3.96528 17.5854 11.8964 13.0838C7.39485 28.9455 16.605 28.9455 12.1036 13.0838Z"
                      fill="currentColor"
                    />

                    <path
                      d="M12 13.1264C12.0809 13.1264 12.1465 13.0609 12.1465 12.98C12.1465 12.8991 12.0809 12.8335 12 12.8335C11.9191 12.8335 11.8535 12.8991 11.8535 12.98C11.8535 13.0609 11.9191 13.1264 12 13.1264Z"
                      fill="currentColor"
                    />
                  </svg>

                  <span>Digital</span>
                </span>

                <span className="font-bold">Solutions</span>
              </span>
            </h1>

            {/* 
                BUTTONS
             */}

            {/* 🟨 RESPONSIVE CHANGE */}
            <div
              className="
                mt-8
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:justify-center
                md:justify-start
              "
            >
              <Link
                to="/contact"
                className="
                  rounded-full
                  bg-[#c9f31d]
                  px-6
                  py-3
                  text-center
                  font-semibold
                  text-black

                  transition-all
                  duration-300

                  hover:scale-105
                  hover:bg-white

                  md:px-8
                  md:py-4
                "
              >
                Start a Project
              </Link>

              <Link
                to="/projects"
                className="
                  rounded-full
                  border
                  border-[#3b402c]
                  px-6
                  py-3
                  text-center
                  font-semibold
                  text-white

                  transition-all
                  duration-300

                  hover:border-[#c9f31d]
                  hover:text-[#c9f31d]

                  md:px-8
                  md:py-4
                "
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* 
              RIGHT HERO CONTENT
           */}

          {/* 🟨 RESPONSIVE CHANGE */}
          <div
            className="
              relative
              hidden
              min-h-[400px]
              w-full
              md:block
              md:min-h-[450px]
              lg:min-h-[500px]
            "
          >
            {/* Glow */}

            {/* 🟨 RESPONSIVE CHANGE */}
            <div
              className="
                absolute
                right-0
                top-10

                h-48
                w-48

                rounded-full
                bg-[#c9f31d]
                opacity-10
                blur-3xl

                md:h-60
                md:w-60

                lg:h-72
                lg:w-72
              "
            />

            {/* Description */}

            {/* 🟨 RESPONSIVE CHANGE */}
            <div
              className="
                absolute
                right-0
                top-28
                w-full
                max-w-md
                -translate-y-1/2

                md:pr-4
                lg:pr-8
              "
            >
              <p
                className="
                  text-base
                  leading-7
                  text-gray-300

                  md:text-lg
                  md:leading-8
                "
              >
                BhavyaWebTech creates high-performing websites and digital
                products through strategic UI/UX, modern design, and scalable
                technology.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-6
                  text-gray-400

                  md:text-base
                  md:leading-7
                "
              >
                From business websites to digital platforms, we build fast,
                user-focused experiences designed to strengthen your brand,
                engagement, and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 
          FEATURE CARDS
      */}

      {/* 🟨 RESPONSIVE CHANGE */}
      <section
        className="
          relative
          z-10
          px-4
          pb-16
          sm:px-6
          md:px-8
          md:pb-20
          lg:px-12
          lg:pb-28
        "
      >
        {/* 🟨 RESPONSIVE CHANGE */}
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            grid-cols-1
            gap-0
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {/* 
              CARD 1
         */}

          <div
            className="
              group
              min-h-[240px]
              cursor-pointer
              border
              border-[#292929]
              bg-[#090909]
              p-6
              text-white

              transition-all
              duration-500

              hover:bg-[#c9ff00]
              hover:text-black

              md:p-7

              lg:min-h-[300px]
              lg:p-6
            "
          >
            <div className="mb-8">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 256 256"
                className="
                  h-12
                  w-12
                  text-white
                  transition-all
                  duration-700
                  ease-[cubic-bezier(0.23,1,0.32,1)]
                  group-hover:rotate-[360deg]
                  group-hover:text-black
                "
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M54,96v64a6,6,0,0,1-12,0V96a6,6,0,0,1,12,0ZM88,26a6,6,0,0,0-6,6V224a6,6,0,0,0,12,0V32A6,6,0,0,0,88,26Zm40,32a6,6,0,0,0-6,6V192a6,6,0,0,0,12,0V64A6,6,0,0,0,128,58Zm40,32a6,6,0,0,0-6,6v64a6,6,0,0,0,12,0V96A6,6,0,0,0,168,90Zm40-16a6,6,0,0,0-6,6v96a6,6,0,0,0,12,0V80A6,6,0,0,0,208,74Z" />
              </svg>
            </div>

            <h3 className="text-lg font-semibold">Modern Technology</h3>

            <p
              className="
                mt-3
                text-sm
                leading-6
                text-gray-400
                group-hover:text-black/70
              "
            >
              Leveraging modern stacks like Next.js, React, and scalable cloud
              architectures to build ultra-fast, future-proof platforms.
            </p>

            <button
              className="
                mt-6
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-gray-700

                group-hover:border-black
                group-hover:bg-black
                group-hover:text-white
              "
            >
              ↗
            </button>
          </div>

          {/* 
              CARD 2
          = */}

          <div
            className="
              group
              min-h-60
              cursor-pointer
              border
              border-[#292929]
              bg-[#090909]
              p-6
              text-white
              transition-all
              duration-500
              hover:bg-[#c9ff00]
              hover:text-black
              md:p-7
              lg:min-h-[300px]
              lg:p-6
            "
          >
            <div className="mb-8">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 256 256"
                className="
                  h-12
                  w-12
                  text-white
                  transition-all
                  duration-700
                  ease-[cubic-bezier(0.23,1,0.32,1)]
                  group-hover:rotate-[360deg]
                  group-hover:text-black
                "
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M200.12,55.88A102,102,0,0,0,55.87,200.12,102,102,0,1,0,200.12,55.88Zm-102,66.67,19.65-23.14,29.86,5.46,10.21,28.58-19.65,23.14-29.86-5.46ZM209.93,90.69a90.24,90.24,0,0,1-2,78.63l-56.14-10.24Zm-6.16-11.28-36.94,43.48L136.66,38.42a89.31,89.31,0,0,1,55,25.94A91.33,91.33,0,0,1,203.77,79.41Zm-139.41-15A89.37,89.37,0,0,1,123.81,38.1L143,91.82,54.75,75.71A91.2,91.2,0,0,1,64.36,64.36ZM48,86.68l56.14,10.24L46.07,165.31a90.24,90.24,0,0,1,2-78.63Zm4.21,89.91,36.94-43.48,30.17,84.47a89.31,89.31,0,0,1-55-25.94A91.33,91.33,0,0,1,52.23,176.59Zm139.41,15a89.32,89.32,0,0,1-59.45,26.26L113,164.18l88.24,16.11A91.2,91.2,0,0,1,191.64,191.64Z" />
              </svg>
            </div>

            <h3 className="text-lg font-semibold">Expert Manpower</h3>

            <p
              className="
                mt-3
                text-sm
                leading-6
                text-gray-400
                group-hover:text-black/70
              "
            >
              A multidisciplinary team of product designers, full-stack
              engineers, and digital marketing strategists dedicated to your
              growth.
            </p>

            <button
              className="
                mt-6
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-gray-700

                group-hover:border-black
                group-hover:bg-black
                group-hover:text-white
              "
            >
              ↗
            </button>
          </div>

          {/*
              CARD 3
           */}

          <div
            className="
              group
              min-h-[240px]
              cursor-pointer
              border
              border-[#292929]
              bg-[#090909]
              p-6
              text-white
              transition-all
              duration-500

              hover:bg-[#c9ff00]
              hover:text-black

              md:p-7

              lg:min-h-[300px]
              lg:p-6
            "
          >
            <div className="mb-8">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 256 256"
                className="
                  h-12
                  w-12
                  text-white
                  transition-all
                  duration-700
                  ease-[cubic-bezier(0.23,1,0.32,1)]
                  group-hover:rotate-[360deg]
                  group-hover:text-black
                "
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M193.83,128a195.73,195.73,0,0,0,19.9-33.65c10.74-23.88,11-42.66.8-52.88s-29-9.94-52.88.8A195.73,195.73,0,0,0,128,62.17a195.73,195.73,0,0,0-33.65-19.9c-23.88-10.74-42.66-11-52.88-.8s-9.94,29,.8,52.88A195.73,195.73,0,0,0,62.17,128a195.73,195.73,0,0,0-19.9,33.65c-10.74,23.88-11,42.66-.8,52.88h0c5,5,12,7.47,20.63,7.47,9.1,0,20-2.76,32.25-8.27A195.73,195.73,0,0,0,128,193.83a195.73,195.73,0,0,0,33.65,19.9C173.9,219.24,184.8,222,193.9,222c8.64,0,15.65-2.49,20.63-7.47h0c10.23-10.22,9.94-29-.8-52.88A195.73,195.73,0,0,0,193.83,128ZM206,50c9.28,9.28,2.36,36.29-19.8,68a306.2,306.2,0,0,0-22.78-25.45A306.2,306.2,0,0,0,138,69.76C169.75,47.61,196.77,40.68,206,50Zm-27.19,78A289.17,289.17,0,0,1,155,155a289.17,289.17,0,0,1-27,23.88A289.17,289.17,0,0,1,101,155a290.62,290.62,0,0,1-23.88-27A297.06,297.06,0,0,1,128,77.14,290.74,290.74,0,0,1,155,101,289.17,289.17,0,0,1,178.85,128ZM50,50c2.68-2.69,6.84-4,12.17-4,13.11,0,33.3,8,55.87,23.81A302.94,302.94,0,0,0,92.54,92.54,306.2,306.2,0,0,0,69.76,118C47.6,86.25,40.68,59.24,50,50ZM50,206h0c-9.28-9.28-2.35-36.29,19.8-68a306.2,306.2,0,0,0,22.78,25.45A306.2,306.2,0,0,0,118,186.24C86.25,208.4,59.24,215.32,50,206ZM206,206c-9.28,9.28-36.29,2.35-68-19.81a304.26,304.26,0,0,0,25.45-22.77A306.2,306.2,0,0,0,186.24,138C208.4,169.75,215.32,196.76,206,206Zm-68-78a10,10,0,1,1-10-10A10,10,0,0,1,138,128Z" />
              </svg>
            </div>

            <h3 className="text-lg font-semibold">Result Driven</h3>

            <p
              className="
                mt-3
                text-sm
                leading-6
                text-gray-400
                group-hover:text-black/70
              "
            >
              Every line of code and marketing campaign is engineered with
              conversion optimization, organic visibility, and measurable ROI in
              mind.
            </p>

            <button
              className="
                mt-6
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-gray-700

                group-hover:border-black
                group-hover:bg-black
                group-hover:text-white
              "
            >
              ↗
            </button>
          </div>

          {/* 
              CARD 4
       */}

          <div
            className="
              group
              min-h-[240px]
              cursor-pointer
              border
              border-[#292929]
              bg-[#090909]
              p-6
              text-white
              transition-all
              duration-500

              hover:bg-[#c9ff00]
              hover:text-black

              md:p-7

              lg:min-h-[300px]
              lg:p-6
            "
          >
            <div className="mb-8">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 256 256"
                className="
                  h-12
                  w-12
                  text-white
                  transition-all
                  duration-700
                  ease-[cubic-bezier(0.23,1,0.32,1)]
                  group-hover:rotate-[360deg]
                  group-hover:text-black
                "
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm81.57,64H169.19a132.58,132.58,0,0,0-25.73-50.67A90.29,90.29,0,0,1,209.57,90ZM218,128a89.7,89.7,0,0,1-3.83,26H171.81a155.43,155.43,0,0,0,0-52h42.36A89.7,89.7,0,0,1,218,128Zm-90,87.83a110,110,0,0,1-15.19-19.45A124.24,124.24,0,0,1,99.35,166h57.3a124.24,124.24,0,0,1-13.46,30.38A110,110,0,0,1,128,215.83ZM96.45,154a139.18,139.18,0,0,1,0-52h63.1a139.18,139.18,0,0,1,0,52ZM38,128a89.7,89.7,0,0,1,3.83-26H84.19a155.43,155.43,0,0,0,0,52H41.83A89.7,89.7,0,0,1,38,128Zm90-87.83a110,110,0,0,1,15.19,19.45A124.24,124.24,0,0,1,156.65,90H99.35a124.24,124.24,0,0,1,13.46-30.38A110,110,0,0,1,128,40.17Zm-15.46-.84A132.58,132.58,0,0,0,86.81,90H46.43A90.29,90.29,0,0,1,112.54,39.33ZM46.43,166H86.81a132.58,132.58,0,0,0,25.73,50.67A90.29,90.29,0,0,1,46.43,166Zm97,50.67A132.58,132.58,0,0,0,169.19,166h40.38A90.29,90.29,0,0,1,143.46,216.67Z" />
              </svg>
            </div>

            <h3 className="text-lg font-semibold">Global Exposure</h3>

            <p
              className="
                mt-3
                text-sm
                leading-6
                text-gray-400
                group-hover:text-black/70
              "
            >
              Delivering world-class web and software solutions tailored for
              local regional leaders and international global enterprises.
            </p>

            <button
              className="
                mt-6
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-gray-700

                group-hover:border-black
                group-hover:bg-black
                group-hover:text-white
              "
            >
              ↗
            </button>
          </div>
        </div>
      </section>

      {/* 
          ABOUT SECTION
       */}

      {/* 🟨 RESPONSIVE CHANGE */}
      <section
        className="
          relative
          z-10
          overflow-hidden
          bg-[#c9ff00]
          px-4
          py-16
          text-black

          sm:px-6

          md:px-8
          md:py-20

          lg:px-12
          lg:py-32
        "
      >
        {/* MAIN ABOUT CONTAINER */}

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
          "
        >
          {/* ABOUT CONTENT GRID */}

          {/* 🟨 RESPONSIVE CHANGE */}
          <div
            className="
              grid
              grid-cols-1
              gap-10

              md:grid-cols-2
              md:gap-12

              lg:grid-cols-12
              lg:gap-10
            "
          >
            {/* ABOUT LEFT */}

            {/* 🟨 RESPONSIVE CHANGE */}
            <div
              className="
                md:col-span-1
                lg:col-span-5
              "
            >
              <p
                className="
                  text-xs
                  font-semibold
                  tracking-wide
                "
              >
                // ABOUT US
              </p>

              <div
                className="
                  mt-8
                  text-6xl
                  font-light
                  leading-none
                  opacity-20

                  md:text-7xl

                  lg:mt-10
                  lg:text-[90px]
                "
              >
                ↗
              </div>
            </div>

            {/* ABOUT RIGHT */}

            {/* 🟨 RESPONSIVE CHANGE */}
            <div
              className="
                md:col-span-1
                lg:col-span-7
              "
            >
              <h2
                className="
                  max-w-3xl
                  text-4xl
                  font-semibold
                  leading-[1.05]
                  tracking-tight

                  md:text-5xl
                  lg:text-6xl
                "
              >
                Innovative Full-Service
                <br />
                <span className="font-normal">Creative Studio and</span>
                <br />
                <span className="font-normal">Technology Partner</span>
              </h2>

              {/* BUTTON + DESCRIPTION */}

              {/* 🟨 RESPONSIVE CHANGE */}
              <div
                className="
                  mt-10
                  grid
                  grid-cols-1
                  gap-8

                  md:grid-cols-2
                "
              >
                {/* BUTTON */}
                <div>
                  <Link
                    to="/about"
                    className="
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      border
                      border-black
                      px-6
                      py-3
                      text-sm
                      font-medium

                      transition-all
                      duration-300

                      hover:bg-black
                      hover:text-[#c9ff00]
                    "
                  >
                    Learn More
                    <span
                      className="
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-black
                        text-sm
                      "
                    >
                      ↗
                    </span>
                  </Link>
                </div>
                {/* DESCRIPTION */}
                <div
                  className="
                    max-w-md
                    text-sm
                    leading-6

                    md:text-base
                  "
                >
                  <p>
                    Bhavya Web Technologies is a full-cycle digital agency
                    committed to transforming business visions into high-impact
                    digital experiences.
                  </p>

                  <p className="mt-4">
                    We blend strategic design, clean engineering, and
                    performance marketing to help brands launch, compete, and
                    scale seamlessly in a dynamic digital ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 
              STATISTICS
           */}

          {/* 🟨 RESPONSIVE CHANGE */}
          <div
            className="
              mt-16
              grid
              grid-cols-2
              gap-y-10
              border-black/20
              pt-10

              md:grid-cols-4
              md:gap-y-0

              lg:mt-28
            "
          >
            {/* PROJECTS */}

            <div className="text-center">
              <div className="mb-4 text-2xl md:text-3xl">▣</div>

              <p
                className="
                  text-3xl
                  font-bold

                  sm:text-4xl

                  md:text-5xl

                  lg:text-7xl
                "
              >
                <Counter end={5365} suffix="+" />
              </p>

              <p className="mt-2 text-xs">Projects Delivered</p>
            </div>

            {/* CLIENTS */}

            <div className="text-center">
              <div className="mb-4 text-2xl md:text-3xl">◎</div>

              <p
                className="
                  text-3xl
                  font-bold

                  sm:text-4xl

                  md:text-5xl

                  lg:text-7xl
                "
              >
                <Counter end={2658} suffix="+" />
              </p>

              <p className="mt-2 text-xs">Trusted Global Clients</p>
            </div>

            {/* TEAM */}

            <div className="text-center">
              <div className="mb-4 text-2xl md:text-3xl">♧</div>

              <p
                className="
                  text-3xl
                  font-bold

                  sm:text-4xl

                  md:text-5xl

                  lg:text-7xl
                "
              >
                <Counter end={10} suffix="+" />
              </p>

              <p className="mt-2 text-xs">Expert Team Members</p>
            </div>

            {/* YEARS */}

            <div className="text-center">
              <div className="mb-4 text-2xl md:text-3xl">♙</div>

              <p
                className="
                  text-3xl
                  font-bold

                  sm:text-4xl

                  md:text-5xl

                  lg:text-7xl
                "
              >
                <Counter end={16} suffix="+" />
              </p>

              <p className="mt-2 text-xs">Years in Business</p>
            </div>
          </div>
        </div>

        {/* 
            DECORATIVE ART
        */}

        {/* 🟨 RESPONSIVE CHANGE */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            z-0
            w-full
            max-w-[690px]
            translate-x-[-19%]
            translate-y-[25%]
            opacity-30

            md:max-w-[550px]

            lg:max-w-[690px]
          "
        >
          <img
            src={art}
            alt="Decorative art"
            className="
              block
              w-full
              mix-blend-screen
            "
          />
        </div>
      </section>
    </main>
  );
}

export default Home;
