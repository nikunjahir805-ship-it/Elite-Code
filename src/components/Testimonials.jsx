import React from "react"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Daniel Kim",
      role: "Operations Lead at Flowbyte",
      image: "/images/testimonials/santosh.jpg",
      content:
        "Truly impressive. The AI assistant is fast, accurate, and blends into our daily ops without friction."
    },
    {
      name: "Priya Mehra",
      role: "CTO at Brightstack Labs",
      image: "/images/testimonials/jay.jpg",
      content:
        "Game-changer. Automation flows run flawlessly. Our team now focuses only on what really matters."
    },
    {
      name: "Elena Rodriguez",
      role: "Product Manager",
      image: "/images/testimonials/rajan.jpg",
      content:
        "Smooth setup. Their system integrated perfectly with our tools. We saw improvements within a week."
    },
    {
      name: "Marcus Thompson",
      role: "Marketing Director",
      image: "/images/testimonials/pritesh.jpg",
      content:
        "Surprisingly simple. The AI adapts quickly. Our campaigns are now running twice as efficiently."
    },
    {
      name: "Sarah Wong",
      role: "Analytics Manager",
      image: "/images/testimonials/sarah.jpg",
      content:
        "Huge time-saver. Data is better organized and the insights are actionable and fast."
    },
    {
      name: "Ravi Shah",
      role: "COO at PixelNest",
      image: "/images/testimonials/ravi.jpg",
      content:
        "Very intuitive. No fluff, just solid execution. Our internal processes finally feel modern."
    }
  ]

  return (
    <section
      id="testimonials"
      className="relative py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 animate-in slide-in-from-bottom duration-700">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
            <span className="bg-gradient-to-r from-white via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Loved by teams worldwide
            </span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            See how professionals use EliteCode AI to move faster and work smarter.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-950/80 backdrop-blur-xl p-6 transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />

              {/* Header */}
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-11 w-11 rounded-full object-cover border border-slate-700"
                />
                <div>
                  <h4 className="text-white font-semibold text-sm">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-400">{item.role}</p>
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-300 text-sm leading-relaxed">
                “{item.content}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
