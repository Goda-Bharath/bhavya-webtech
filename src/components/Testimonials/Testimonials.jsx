import { useRef, useState } from "react";

const testimonials = [
  {
    text: `"Bhavya Web Technologies worked closely with us throughout the entire development process, ensuring every detail aligned perfectly with our brand identity. Their dedication and clarity made a real difference."`,
    name: "Anil Varre",
    role: "General Manager",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj05fh7PN1bhdMsSua5x_ZX6-gXzzJzKVy8rglTzkKAA&s=10",
  },
  {
    text: `"Their strong track record in web design and development speaks for itself. The team's professionalism, technical expertise, and attention to detail make them a dependable partner for any AI-driven project."`,
    name: "Dhyuti Foundation",
    role: "CEO",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbQPV3k_Od-SCov6kSoR0OgQXOkAsoQAo2WeApzFbI6Q&s=10",
  },
  {
    text: `"From concept to execution, the team delivered a visually stunning and high-performing website. Their designers and developers truly understand how to build impactful digital experiences."`,
    name: "Kiran Pundla",
    role: "CEO & Founder",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrVxtXXoYrBQK6B16HOsF-ZlEIgOaw9vg1p6SbXa6rKg&s=10",
  },
  {
    text: `"Clear communication, strong attention to detail, and on-time delivery made the entire collaboration effortless. A truly reliable development partner."`,
    name: "Pavan Kumar Tavva",
    role: "Managing Director",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWkl16OYrpKx1iV9tvKL74hC5Nd8YQfykAY-q7ZHdUIA&s=10",
  },
  {
    text: `"The team quickly understood our requirements and transformed them into a clean, functional, and visually appealing product. The experience was seamless from start to finish."`,
    name: "Haxs Tech",
    role: "Junior Manager",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvUss1RezCExk1vdVbCr5vIdKX3hWx1TC3F0q6EEQCVg&s=10",
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(2);

  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);

  const CARD_WIDTH = 340;
  const GAP = 24;

  // Go to previous card
  const previousSlide = () => {
    setActiveIndex((prev) => {
      if (prev === 0) {
        return testimonials.length - 1;
      }

      return prev - 1;
    });
  };

  // Go to next card
  const nextSlide = () => {
    setActiveIndex((prev) => {
      if (prev === testimonials.length - 1) {
        return 0;
      }

      return prev + 1;
    });
  };

  // Mouse starts
  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX;
  };

  // Mouse releases
  const handleMouseUp = (e) => {
    if (!isDragging) {
      return;
    }

    const distance = e.clientX - startX.current;

    setIsDragging(false);

    // Drag left
    if (distance < -70) {
      nextSlide();
    }

    // Drag right
    if (distance > 70) {
      previousSlide();
    }
  };

  // Mouse leaves
  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  /*
    Calculate the position of the carousel.

    Example:

    activeIndex = 2

    The third card moves into the center.
  */
  const carouselPosition =
    `calc(50vw - ${CARD_WIDTH / 2}px - ${
      activeIndex * (CARD_WIDTH + GAP)
    }px)`;

  return (
    <section className="overflow-hidden bg-[#090909] py-24 text-white">

      {/* ================= HEADING ================= */}

      <div className="mx-auto mb-16 max-w-4xl px-6 text-center">

        <p className="mb-5 text-xs font-semibold">
          // TESTIMONIAL
        </p>

        <h2 className="text-5xl font-semibold leading-[0.95] tracking-tight md:text-6xl">
          What BWT{""}
          <span className="font-serif italic font-normal">
            clients say
          </span>
          <br />
          about us
        </h2>

      </div>

      <div className="relative w-full overflow-hidden">

        {/* LEFT BUTTON */}

        <button
          type="button"
          onClick={previousSlide}
          className="
            absolute
            left-5
            top-1/2
            z-30
            hidden
            h-12
            w-12
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-black
            text-2xl
            transition
            hover:border-lime-400
            hover:bg-lime-400
            hover:text-black
            md:flex
          "
        >
          ←
        </button>


        {/* RIGHT BUTTON */}

        <button
          type="button"
          onClick={nextSlide}
          className="
            absolute
            right-5
            top-1/2
            z-30
            hidden
            h-12
            w-12
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-black
            text-2xl
            transition
            hover:border-lime-400
            hover:bg-lime-400
            hover:text-black
            md:flex
          "
        >
          →
        </button>

        <div
          className={`
            flex
            gap-6
            ${isDragging ? "cursor-grabbing" : "cursor-grab"}
          `}
          style={{
            transform: `translateX(${carouselPosition})`,
            transition: isDragging
              ? "none"
              : "transform 500ms ease",
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >

          {testimonials.map((testimonial, index) => {

            const active = index === activeIndex;

            return (
              <div
                key={testimonial.name}
                className={`
                  relative
                  flex
                  h-[430px]
                  w-[340px]
                  shrink-0
                  flex-col
                  items-center
                  rounded-[24px]
                  border
                  px-8
                  py-10
                  text-center
                  transition-all
                  duration-500

                  ${
                    active
                      ? "border-lime-400 bg-[#191919]"
                      : "border-white/10 bg-[#151515]"
                  }
                `}
              >

                {/* QUOTE */}

                <div
                  className="
                    absolute
                    left-8
                    top-8
                    text-6xl
                    leading-none
                    text-white/10
                  "
                >
                  ”
                </div>


                {/* TEXT */}

                <p className="mt-16 text-[15px] leading-6 text-white/90">
                  {testimonial.text}
                </p>


                {/* STARS */}

                <div className="mt-8 flex gap-1 text-lg text-lime-400">
                  ★ ★ ★ ★ ★
                </div>


                {/* IMAGE */}

                <div className="mt-5">

                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    draggable="false"
                    className="
                      h-12
                      w-12
                      rounded-full
                      border
                      border-white/20
                      object-cover
                    "
                  />

                </div>


                {/* NAME */}

                <div className="mt-3">

                  <h3 className="text-sm font-semibold">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-xs text-white/50">
                    {testimonial.role}
                  </p>

                </div>


                

              </div>
            );
          })}

        </div>

      </div>

      <div className="mt-10 flex justify-center gap-2">

        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.name}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`
              h-2
              rounded-full
              transition-all
              duration-300

              ${
                index === activeIndex
                  ? "w-8 bg-lime-400"
                  : "w-2 bg-white/30"
              }
            `}
          />
        ))}

      </div>

    </section>
  );
}

export default Testimonials;