import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

// Replace these with your actual images
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

function Blog() {
  const blogs = [
    {
      image: blog1,
      date: "02 OCT 2026",
      title: "Digital Marketing Company Hyderabad: A Practical 2026 Guide",
    },
    {
      image: blog2,
      date: "26 SEPT 2026",
      title:
        "Web Design Company Hyderabad: What Businesses Should Expect in 2026",
    },
    {
      image: blog3,
      date: "03 AUG 2026",
      title:
        "The Biggest Risk for a Growing Business Isn’t Low Sales. It’s Not Owning Your Customers.",
    },
  ];

  return (
    <section className="bg-white px-6 py-20 text-black sm:px-8 md:px-12 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[745px]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_230px]">
          {/* LEFT HEADING */}
          <div>
            <p className="mb-4 text-[8px] font-bold tracking-[0.02em] text-[#8ca600]">
              // LATEST INSIGHTS
            </p>

            <h2 className="text-4xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-5xl">
              <span className="block font-bold">Practical Thoughts on</span>

              <span className="block font-normal">
                Tech, Design &amp; Growth
              </span>
            </h2>
          </div>

          {/* RIGHT DESCRIPTION + ARROWS */}
          <div className="flex flex-col justify-between">
            <p className="max-w-[220px] text-[10px] leading-[1.5] text-gray-500">
              Deep dives, actionable guides, and industry analyses on web
              architecture, generative AI, and digital customer acquisition.
            </p>

            <div className="mt-6 flex items-center gap-2 md:justify-end">
              <button
                type="button"
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-200
                  text-gray-300
                  transition-all
                  duration-300
                  hover:border-black
                  hover:text-black
                "
              >
                <FiArrowLeft size={14} />
              </button>

              <button
                type="button"
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-300
                  text-gray-700
                  transition-all
                  duration-300
                  hover:bg-black
                  hover:text-white
                "
              >
                <FiArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
        <div
          className="
            mt-16
            grid
            grid-cols-1
            gap-8
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {blogs.map((blog) => (
            <article key={blog.title} className="group cursor-pointer">
              {/* IMAGE */}
              <div className="overflow-hidden rounded-[5px]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="
                    aspect-[1.72/1]
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* DATE */}
              <p
                className="
                  mt-4
                  text-[7px]
                  font-medium
                  uppercase
                  tracking-[0.05em]
                  text-gray-400
                "
              >
                {blog.date}
              </p>

              {/* TITLE */}
              <h3
                className="
                  mt-3
                  text-[15px]
                  font-semibold
                  leading-[1.18]
                  tracking-[-0.02em]
                  text-black
                "
              >
                {blog.title}
              </h3>

              {/* AUTHOR */}
              <p
                className="
                  mt-4
                  text-[6px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-gray-500
                "
              >
                BY BHAVYAWEBTECH
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
