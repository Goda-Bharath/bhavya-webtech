
import { useRef } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

function Blog() {
  const blogContainerRef = useRef(null);

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

  const scrollBlogs = (direction) => {
    if (blogContainerRef.current) {
      blogContainerRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white px-6 py-20 text-black sm:px-8 md:px-12 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[745px]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_230px]">
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

          <div className="flex flex-col justify-between">
            <p className="max-w-[220px] text-[10px] leading-[1.5] text-gray-500">
              Deep dives, actionable guides, and industry analyses on web
              architecture, generative AI, and digital customer acquisition.
            </p>

            <div className="mt-6 flex items-center gap-2 md:justify-end">
              <button
                type="button"
                aria-label="Scroll blogs left"
                onClick={() => scrollBlogs("left")}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all duration-300 hover:border-black hover:text-black"
              >
                <FiArrowLeft size={14} />
              </button>

              <button
                type="button"
                aria-label="Scroll blogs right"
                onClick={() => scrollBlogs("right")}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition-all duration-300 hover:bg-black hover:text-white"
              >
                <FiArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={blogContainerRef}
          className="mt-16 flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth pb-4"
        >
          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="group w-[260px] min-w-[260px] snap-start cursor-pointer sm:w-[calc((100%-2rem)/2)] sm:min-w-[calc((100%-2rem)/2)] lg:w-[calc((100%-4rem)/3)] lg:min-w-[calc((100%-4rem)/3)]"
            >
              <div className="overflow-hidden rounded-[5px]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                  className="aspect-[1.72/1] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <p className="mt-4 text-[7px] font-medium uppercase tracking-[0.05em] text-gray-400">
                {blog.date}
              </p>

              <h3 className="mt-3 text-[15px] font-semibold leading-[1.18] tracking-[-0.02em] text-black">
                {blog.title}
              </h3>

              <p className="mt-4 text-[6px] font-bold uppercase tracking-[0.12em] text-gray-500">
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
