function CaseStudies() {
  const projects = [
    {
      title: "GenAI Healthcare",
      category: "Healthcare",
      link: "https://www.genaihealth.care/",
      image:
        "https://bhavyawebtech.com/_next/image?url=%2Fbwtprojects%2F1.jpg&w=1920&q=75",
    },
    {
      title: "Maurice Morneau",
      category: "Financial",
      link: "https://mauricemorneautax.com/",
      image:
        "https://bhavyawebtech.com/_next/image?url=%2Fbwtprojects%2F3.jpg&w=1920&q=75",
    },
    {
      title: "Financial Cube",
      category: "Financial",
      link: "https://www.fcaest.com/",
      image:
        "https://bhavyawebtech.com/_next/image?url=%2Fbwtprojects%2F5.jpg&w=1920&q=75",
    },
    {
      title: "Orange Roofing",
      category: "Construction",
      link: "https://orcrestoration.com/",
      image:
        "https://bhavyawebtech.com/_next/image?url=%2Fbwtprojects%2F2.jpg&w=1920&q=75",
    },
    {
      title: "Eye Ads",
      category: "Advertising",
      link: "https://www.eyeads.com/",
      image:
        "https://bhavyawebtech.com/_next/image?url=%2Fbwtprojects%2F4.jpg&w=1920&q=75",
    },
    {
      title: "Fabricast",
      category: "Distribution",
      link: "https://fabricast.net/",
      image:
        "https://bhavyawebtech.com/_next/image?url=%2Fbwtprojects%2F6.jpg&w=1920&q=75",
    },
  ];

  return (
    <section className="bg-[#13160b] px-6 py-24 text-white md:px-10 lg:px-16">

      <div className="mx-auto max-w-7xl">

        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/60">
          // CASE STUDIES
        </p>

        <h2 className="max-w-3xl text-5xl font-medium leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
          Featured Work &
          <br />
          <span className="text-white/70">
            Proven Results
          </span>
        </h2>

        <p className="mt-8 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
          Explore how our tailored design and technical solutions have solved
          critical problems and unlocked business growth for our partners.
        </p>

      </div>

      <div className="mx-auto mt-16 grid max-w-7xl gap-8 md:grid-cols-2">

        {projects.map((project) => (

          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >

            <div className="relative aspect-[15/10] overflow-hidden rounded-2xl bg-white/5">

              <img
                src={project.image}
                alt={project.title}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-black/10
                  transition-colors
                  duration-500
                  group-hover:bg-black/30
                "
              />
              <div
                className="
                  absolute
                  right-6
                  top-6
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-2xl
                  text-black
                  opacity-0
                  scale-75
                  transition-all
                  duration-300
                  group-hover:scale-100
                  group-hover:opacity-100
                "
              >
                ↗
              </div>

            </div>

            <div className="mt-5">

              <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                {project.category}
              </p>

              <h3
                className="
                  mt-2
                  text-2xl
                  font-medium
                  text-white
                  transition-opacity
                  duration-300
                  group-hover:opacity-70
                  md:text-3xl
                "
              >
                {project.title}
              </h3>

            </div>

          </a>

        ))}

      </div>

      <div className="mx-auto mt-14 max-w-7xl">

        <a
          href="/projects"
          className="
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-white/20
            px-6
            py-3
            text-sm
            font-medium
            transition-all
            duration-300
            hover:border-white
            hover:bg-white
            hover:text-black
          "
        >
          View All Projects

          <span>→</span>

        </a>

      </div>

    </section>
  );
}

export default CaseStudies;