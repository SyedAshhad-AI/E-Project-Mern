const cardData = [
  {
    title: (
      <>
        We don't just design,{' '}
        <span className="text-blue-500">unleash creative</span> firestorms.
      </>
    ),
    description:
      "Tired of bland marketing and cookie-cutter websites? We infuse your brand with bold ideas and strategic brilliance, igniting campaigns that capture hearts and drive tangible results. Forget sparklers, we're here to light the fire.",
  },
  {
    title: (
      <>
        We <span className="text-blue-500">fuel creativity</span> with data,
        guide passion with precision.
      </>
    ),
    description:
      "We're not just artistic dreamers, we're strategic alchemists. We blend data-driven insights with unbridled passion, ensuring your campaigns reach the right audience, hit the right chords, and deliver measurable results. Because passion without direction is a beautiful mess.",
  },
  {
    title: (
      <>
        We craft{' '}
        <span className="text-blue-500">emotional connections</span>, not just
        visuals and copy.
      </>
    ),
    description:
      "We delve deeper than pixels and prose. We understand the human heart, the language of emotions. We weave stories that resonate, visuals that linger in minds, and content that sparks conversations. Because true connection is the foundation of brand loyalty.",
  },
  {
    title: (
      <>
        We don't just work with you, we become your{' '}
        <span className="text-blue-500">creative champions</span>.
      </>
    ),
    description:
      "We don't see clients, we see collaborators. We believe in building partnerships, in understanding your vision, and becoming an extension of your team. Your goals are our canvas, your success our masterpiece. We paint your dreams into reality, together.",
  },
];


const WhatMakesUsBest = () => {
  return (
    <section className="text-white py-12 mt-10">
      {/* Section Title */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-600 via-transparent to-transparent opacity-30 pointer-events-none"></div>
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-6xl font-bold mb-4">What Makes Us Best</h2>
        <p className="text-2xl text-gray-400">
          We are a passionate team of designers and developers who believe in
          the power of creativity. We help creative professionals create a
          strong online presence that showcases their work and tells their
          story.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 max-w-6xl mx-auto">
        {cardData.map((card, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold mb-4">
              {card.title}
            </h4>
            <p className="text-gray-400">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatMakesUsBest;
