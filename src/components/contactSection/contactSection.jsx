import { useState } from "react";
import art from "../../assets/image5.png";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  return (
    <section className="w-full">
      <div className="bg-[#c9f900] px-5 py-16 md:px-10 lg:px-0 lg:py-0">
        <div className="mx-auto flex max-w-[1268px] flex-col lg:flex-row">
          <div
            className="
              flex
              min-h-[430px]
              w-full
              items-center
              px-8
              py-12
              md:px-16
              lg:w-[43%]
              lg:px-20
            "
          >
            <div>
              {/* Main heading */}

              <h2
                className="
                  max-w-[390px]
                  text-3xl
                  font-semibold
                  leading-[1.05]
                  tracking-tight
                  text-black
                  md:text-4xl
                "
              >
                Have a project in mind?
                <br />
                Let's build something
                <br />
                <span className="font-serif font-normal">
                  extraordinary together.
                </span>
              </h2>

              {/* Email */}

              <a
                href="mailto:info@bhavyawebtech.com"
                className="
                  mt-7
                  block
                  text-base
                  font-semibold
                  text-black
                  transition-opacity
                  hover:opacity-60
                "
              >
                info@bhavyawebtech.com
              </a>

              {/* Buttons */}

              <div className="mt-7 flex items-center gap-2">
                <a
                  href="#contact-form"
                  className="
                    rounded-full
                    border
                    border-black/40
                    px-5
                    py-2.5
                    text-[11px]
                    font-medium
                    text-black
                    transition
                    hover:bg-black
                    hover:text-white
                  "
                >
                  Contact BWT
                </a>

                <a
                  href="#contact-form"
                  aria-label="Go to contact form"
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-black/40
                    text-sm
                    text-black
                    transition
                    hover:bg-black
                    hover:text-white
                  "
                >
                  ↗
                </a>

                <div
                  className="
    relative
    flex
    min-h-[430px]
    w-full
    items-center
    overflow-hidden
    px-8
    py-12
    md:px-16
    lg:w-[43%]
    lg:px-20
  "
                >
                  {/* Decorative artwork */}

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
    "
                  >
                    <img
                      src={art}
                      alt="Decorative artwork"
                      className="block w-full"
                    />
                  </div>

                  {/* Left content */}

                  <div className="relative z-10">
                    {/* Main heading */}

                    <h2
                      className="
        max-w-[390px]
        text-3xl
        font-semibold
        leading-[1.05]
        tracking-tight
        text-black
        md:text-4xl
      "
                    ></h2>

                    {/* Email */}

                    <a
                      href="mailto:info@bhavyawebtech.com"
                      className="
        mt-7
        block
        text-base
        font-semibold
        text-black
        transition-opacity
        hover:opacity-60
      "
                    >
                      info@bhavyawebtech.com
                    </a>

                    {/* Buttons */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="contact-form"
            className="
              relative
              min-h-[430px]
              w-full
              overflow-hidden
              rounded-b-[20px]
              bg-white
              px-8
              py-8
              text-black
              md:px-10
              lg:w-[36%]
              lg:rounded-b-[20px]
              lg:rounded-t-none
            "
          >
            {/* Form content */}

            <div className="relative z-10 ">
              <h3
                className="
                  text-xl
                  font-semibold
                  tracking-tight
                  md:text-2xl
                "
              >
                Schedule free consultation
              </h3>

              <p
                className="
                  mt-4
                  max-w-[300px]
                  text-[9px]
                  leading-4
                  text-black/60
                "
              >
                Schedule a free consultation with our technical and digital
                specialists to discuss your project scope, roadmap, and growth
                strategy.
              </p>

              {/* FORM */}

              <form onSubmit={handleSubmit} className="mt-8">
                {/* Name */}

                <div className="border-b border-black/15">
                  <label
                    htmlFor="name"
                    className="
                      block
                      text-[9px]
                      font-medium
                      text-black
                    "
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="
                      mt-2
                      w-full
                      bg-transparent
                      pb-2
                      text-xs
                      outline-none
                    "
                  />
                </div>

                {/* Email */}

                <div className="mt-5 border-b border-black/15">
                  <label
                    htmlFor="email"
                    className="
                      block
                      text-[9px]
                      font-medium
                      text-black
                    "
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="
                      mt-2
                      w-full
                      bg-transparent
                      pb-2
                      text-xs
                      outline-none
                    "
                  />
                </div>

                {/* Subject */}

                <div className="mt-5 border-b border-black/15">
                  <label
                    htmlFor="subject"
                    className="
                      block
                      text-[9px]
                      font-medium
                      text-black
                    "
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className="
                      mt-2
                      w-full
                      bg-transparent
                      pb-2
                      text-xs
                      outline-none
                    "
                  />
                </div>

                {/* Message */}

                <div className="mt-5 border-b border-black/15">
                  <label
                    htmlFor="message"
                    className="
                      block
                      text-[9px]
                      font-medium
                      text-black
                    "
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="2"
                    value={formData.message}
                    onChange={handleChange}
                    className="
                      mt-2
                      w-full
                      resize-none
                      bg-transparent
                      pb-2
                      text-xs
                      outline-none
                    "
                  />
                </div>

                {/* Submit button */}

                <div className="mt-8 flex items-center gap-2">
                  <button
                    type="submit"
                    className="
                      rounded-full
                      bg-black
                      px-5
                      py-2.5
                      text-[10px]
                      font-semibold
                      text-white
                      transition
                      hover:bg-black/80 cursor-pointer
                    "
                  >
                    Send Message
                  </button>

                  <button
                    type="submit"
                    aria-label="Send message"
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-black
                      text-sm
                      text-white
                      transition
                      hover:bg-lime-400
                      hover:text-black cursor-pointer
                    "
                  >
                    ↗
                  </button>
                </div>
              </form>
            </div>

            {/* Decorative circle */}

            <div
              className="
                absolute
                -bottom-12
                -right-8
                h-32
                w-32
                rounded-full
                border-[12px]
                border-[#c9f900]/30
              "
            />

            <div
              className="
                absolute
                -bottom-6
                -right-16
                h-32
                w-32
                rounded-full
                border-[10px]
                border-[#c9f900]/25
              "
            />
          </div>
        </div>
      </div>

      <footer className="bg-[#1b1b1b] px-8 py-12 text-white md:px-16 lg:px-40">
        <div className="mx-auto grid max-w-[950px] gap-10 md:grid-cols-3">
          {/* Location */}

          <div>
            <p
              className="
                mb-4
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-white/50
              "
            >
              Location
            </p>

            <p className="max-w-[220px] text-xs leading-5 text-white/90">
              Rd Number 28, Vivekananda Nagar,
              <br />
              Kukatpally, Hyderabad,
              <br />
              Telangana 500072.
            </p>
          </div>

          {/* Contact */}

          <div>
            <p
              className="
                mb-4
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-white/50
              "
            >
              Call / WhatsApp
            </p>

            <a
              href="mailto:info@bhavyawebtech.com"
              className="
                block
                text-xs
                text-white/90
                hover:text-lime-400
              "
            >
              info@bhavyawebtech.com
            </a>

            <a
              href="tel:+918074010785"
              className="
                mt-2
                block
                text-xs
                text-white/90
                hover:text-lime-400
              "
            >
              +91-80740 10785
            </a>
          </div>

          {/* Social icons */}

          <div className="flex items-start gap-2 md:justify-end">
            <a
              href="#"
              aria-label="X"
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                text-[10px]
                text-white/60
                transition
                hover:border-lime-400
                hover:text-lime-400
              "
            >
              𝕏
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                text-[10px]
                text-white/60
                transition
                hover:border-lime-400
                hover:text-lime-400
              "
            >
              ◎
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                text-[10px]
                text-white/60
                transition
                hover:border-lime-400
                hover:text-lime-400
              "
            >
              f
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                text-[9px]
                text-white/60
                transition
                hover:border-lime-400
                hover:text-lime-400
              "
            >
              in
            </a>

            <a
              href="#"
              aria-label="YouTube"
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                text-[9px]
                text-white/60
                transition
                hover:border-lime-400
                hover:text-lime-400
              "
            >
              ▶
            </a>
          </div>
        </div>

        {/* Bottom border */}

        <div className="mx-[-2rem] mt-12 border-t border-white/10 md:mx-[-4rem] lg:mx-[-10rem]" />
      </footer>
    </section>
  );
}

export default ContactSection;
