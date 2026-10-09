import { useState } from "react";
import image1 from "../assets/image1.png";

function Services() {
  const [openService, setOpenService] = useState(null);

  // Open clicked service, or close it if it is already open
  const handleServiceClick = (serviceNumber) => {
    setOpenService(openService === serviceNumber ? null : serviceNumber);
  };

  return (
    <section className="relative">
      {/* =========================
                BACKGROUND IMAGE
            ========================== */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <img
          src={image1}
          alt="Services"
          className="h-full w-full object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* =========================
                SCROLLING CONTENT    
            ========================== */}
      <div className="relative z-10 mt-[100vh]">
        {/* =========================
                    SERVICES INTRO
                ========================== */}
        <div className="mx-auto max-w-7xl px-6 py-32 text-black">
          <p className="mb-8 text-sm font-semibold tracking-[4px] text-[#c9f31d]">
            // SERVICES
          </p>

          <h2 className="text-5xl font-bold text-[#c9f31d] md:text-7xl">
            Explore all of BWT
          </h2>

          <p className="mt-4 font-serif text-3xl italic text-[#c9f31d] md:text-5xl">
            Creative & Engineering Services
          </p>

          <p className="mt-10 max-w-4xl text-xl leading-relaxed text-white">
            End-to-end digital solutions crafted with precision—from user
            research and bespoke interface design to robust backend architecture
            and growth campaigns.
          </p>
        </div>

        {/* =========================
                    WHITE SERVICES PANEL
                ========================== */}
        <div className="bg-white text-black">
          <div className="mx-auto max-w-7xl px-6 py-24">
            {/* ==================================================
                            SERVICE 01
                        ================================================== */}
            <div className="pb-4">
              {/* SERVICE HEADER */}
              <button
                type="button"
                onClick={() => handleServiceClick(1)}
                className="mx-auto flex w-full max-w-3xl cursor-pointer border border-black/50  items-center justify-between rounded-full bg-white  px-8 py-5 text-lef text-black transition-all duration-300"
              >
                <div className="flex items-center gap-6 cursor-default">
                  <span className="text-xl font-bold text-[#000000]">01</span>

                  <span className="text-xl font-semibold md:text-2xl ">
                    UI/UX & Product Design
                  </span>
                </div>

                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#010100] text-white ition-transform duration-300 ${
                    openService === 1 ? "rotate-180" : ""
                  }`}
                >
                  📺
                </span>
              </button>

              {/* SERVICE CONTENT */}
              {openService === 1 && (
                <div className="mt-8">
                  {/* Description */}
                  <div className="mx-auto max-w-1xl text-center">
                    <p className="text-sm leading-6  text-black/60 md:text-base">
                      Intuitive, user-centered wireframes, design systems, and
                      prototypes built for engagement and conversion.
                    </p>
                  </div>

                  {/* Service links */}
                  <div className="mx-auto mt-8 grid max-w-2xl gap-3 md:grid-cols-2 cursor-default">
                    <ServiceLink title="Website Design " />

                    <ServiceLink title="Static HTML Website Design" />

                    <ServiceLink title="WordPress CMS Website Design" />

                    <ServiceLink title="Wix Website Design" />

                    <ServiceLink title="Website Redesign" />

                    <ServiceLink title="Responsive Website Design" />

                    <ServiceLink title="Quick/Urgent Website Design" />

                    <ServiceLink title="UI/UX Design (Web & Mobile)" />

                    <ServiceLink title="Product Design Systems" />

                    <ServiceLink title="Wireframing & Prototyping" />

                    <ServiceLink title="Interaction & Motion Design" />

                    <ServiceLink title="User Experience Optimization" />
                  </div>
                </div>
              )}
            </div>

            {/* ==================================================
                            SERVICE 02
                        ================================================== */}
            <div className="py-4">
              {/* SERVICE HEADER */}
              <button
                type="button"
                onClick={() => handleServiceClick(2)}
                className="mx-auto flex w-full max-w-3xl border cursor-pointer border-black/50  items-center justify-between rounded-full bg-white  px-8 py-5 text-lef text-black transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <span className="text-xl font-bold text-[#ffffff]">02</span>

                  <span className="text-xl font-semibold md:text-2xl">
                    Web & Application Development
                  </span>
                </div>

                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#111211] text-white transition-transform duration-300 ${
                    openService === 2 ? "rotate-180" : ""
                  }`}
                >
                  {"</>"}
                </span>
              </button>

              {/* SERVICE CONTENT */}
              {openService === 2 && (
                <div className="mt-8 ">
                  <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm leading-6  text-black/60 md:text-base">
                      Scalable websites and applications built with modern
                      technologies for performance, reliability, and growth.
                    </p>
                  </div>

                  <div className="mx-auto mt-8  grid max-w-2xl gap-3 md:grid-cols-2 cursor-default">
                    <ServiceLink title="Website Development" />

                    <ServiceLink title="Web Application Development" />

                    <ServiceLink title="React Development" />

                    <ServiceLink title="Next.js Development" />

                    <ServiceLink title="Python Development" />

                    <ServiceLink title="Django Development" />

                    <ServiceLink title="PHP Development" />

                    <ServiceLink title="API Development" />
                  </div>
                </div>
              )}
            </div>

            {/* ==================================================
                            SERVICE 03
                        ================================================== */}
            <div className=" py-4">
              {/* SERVICE HEADER */}
              <button
                type="button"
                onClick={() => handleServiceClick(3)}
                className="mx-auto flex w-full  cursor-pointer max-w-3xl border border-black/50  items-center justify-between rounded-full bg-white  px-8 py-5 text-lef text-black transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <span className="text-xl font-bold text-[#000000]">03</span>

                  <span className="text-xl font-semibold md:text-2xl">
                    eCommerce & Conversion Systems
                  </span>
                </div>

                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#161713] text-black transition-transform duration-300 ${
                    openService === 3 ? "rotate-180" : ""
                  }`}
                >
                  🛒
                </span>
              </button>

              {/* SERVICE CONTENT */}
              {openService === 3 && (
                <div className="mt-8">
                  <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm leading-6 text-black/60 md:text-base">
                      Conversion-focused eCommerce experiences designed to help
                      businesses sell and grow online.
                    </p>
                  </div>

                  <div className="mx-auto mt-8 grid max-w-2xl gap-3 md:grid-cols-2 cursor-default">
                    <ServiceLink title="Shopify Development" />

                    <ServiceLink title="WooCommerce Development" />

                    <ServiceLink title="Magento Development" />

                    <ServiceLink title="eCommerce Website Design" />

                    <ServiceLink title="Online Store Development" />

                    <ServiceLink title="Conversion Optimization" />
                  </div>
                </div>
              )}
            </div>

            {/* ==================================================
                            SERVICE 04
                        ================================================== */}
            <div className="py-4">
              {/* SERVICE HEADER */}
              <button
                type="button"
                onClick={() => handleServiceClick(4)}
                className="mx-auto flex w-full max-w-3xl cursor-pointer border border-black/50  items-center justify-between rounded-full bg-white  px-8 py-5 text-lef text-black transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <span className="text-xl font-bold text-[#000000]">04</span>

                  <span className="text-xl font-semibold md:text-2xl">
                    AI & Agentic Solutions
                  </span>
                </div>
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#000000] text-white transition-transform duration-300 ${
                    openService === 4 ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="4"
                      y="4"
                      width="16"
                      height="16"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect x="9" y="9" width="6" height="6"></rect>
                    <line x1="9" y1="1" x2="9" y2="4"></line>
                    <line x1="15" y1="1" x2="15" y2="4"></line>
                    <line x1="9" y1="20" x2="9" y2="23"></line>
                    <line x1="15" y1="20" x2="15" y2="23"></line>
                    <line x1="20" y1="9" x2="23" y2="9"></line>
                    <line x1="20" y1="14" x2="23" y2="14"></line>
                    <line x1="1" y1="9" x2="4" y2="9"></line>
                    <line x1="1" y1="14" x2="4" y2="14"></line>
                  </svg>
                </span>
              </button>

              {/* SERVICE CONTENT */}
              {openService === 4 && (
                <div className="mt-8">
                  <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm leading-6 text-black/60 md:text-base">
                      Intelligent AI-powered solutions designed to automate
                      workflows and improve business processes.
                    </p>
                  </div>

                  <div className="mx-auto mt-8 grid max-w-2xl gap-3 md:grid-cols-2">
                    <ServiceLink title="AI Solutions" />

                    <ServiceLink title="AI Automation" />

                    <ServiceLink title="AI Agents" />

                    <ServiceLink title="Chatbot Development" />

                    <ServiceLink title="Custom AI Applications" />

                    <ServiceLink title="AI Integration" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================================================
   SERVICE LINK COMPONENT
================================================== */

function ServiceLink({ title }) {
  return (
    <a
      href="#"
      className="group flex items-center  justify-between  rounded-full border border-black/10 bg-[#f8f8f8] px-4 py-3 text-black transition-all duration-300 hover:border-black hover:bg-[#090909] hover:text-white"
    >
      <div className="flex items-center gap-3 ">
        {/* Icon */}
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-sm transition-all duration-300 group-hover:bg-[#c9f31d]">
          🖥
        </span>

        <span className="text-[11px] font-bold uppercase tracking-wide">
          {title}
        </span>
      </div>

      {/* Arrow */}
      <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
        ↗
      </span>
    </a>
  );
}

export default Services;
