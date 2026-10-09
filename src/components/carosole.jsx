function TechCarousel() {
  const technologies = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Angular",
    "Next.js",
    "Node.js",
    "Express.js",
    "PHP",
    "Python",
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "Supabase",
    "WordPress",
    "Joomla",
    "Drupal",
    "Shopify",
    "Magento",
    "WooCommerce",
    "Wix",
  ];

  return (
    <section className="overflow-hidden bg-white py-10">
      <div
        className="overflow-hidden"
        onMouseEnter={(e) => {
          e.currentTarget
            .querySelector(".tech-track")
            .style.animationPlayState = "paused";
        }}
        onMouseLeave={(e) => {
          e.currentTarget
            .querySelector(".tech-track")
            .style.animationPlayState = "running";
        }}
      >
        <div className="tech-track flex w-max gap-4">

          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex h-14 shrink-0 items-center rounded-full border border-black/10 bg-[#f8f8f8] px-7 text-sm font-semibold text-black"
            >
              {tech}
            </div>
          ))}

          {/* Duplicate for continuous loop */}
          {technologies.map((tech, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex h-14 shrink-0 items-center rounded-full border border-black/10 bg-[#f8f8f8] px-7 text-sm font-semibold text-black"
            >
              {tech}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default TechCarousel;