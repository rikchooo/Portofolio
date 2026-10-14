export default function DesignProcess() {
  const steps = [
    {
      number: "01",
      title: "DISCOVER",
      description: "Deep dive into your business goals, users, and competitive landscape to uncover insights that drive strategy.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "DEFINE",
      description: "Synthesize research into clear problem statements, user personas, and journey maps to align on the right solution.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "DESIGN",
      description: "Iterative design process from wireframes to high-fidelity prototypes, validated through usability testing.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "DEVELOP",
      description: "Clean, performant code implementation with modern frameworks, ensuring pixel-perfect fidelity to design.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      number: "05",
      title: "DELIVER",
      description: "Smooth launch, documentation, and ongoing support to ensure the product evolves with your needs.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-24 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted mb-2 block">MY DESIGN PROCESS</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
            How I Work
          </h2>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting line - desktop only */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-border/30 -z-10"></div>

          <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-0">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative flex-1 flex flex-col md:items-center text-center md:px-4"
              >
                {/* Number */}
                <div className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-border/30 mb-2 md:mb-4 leading-none">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-card border border-border/50 flex items-center justify-center mx-auto mb-4 md:mb-5 text-muted relative z-10">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3 uppercase tracking-wider">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-muted leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}