import React from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-visible"
    >
      {/* ===== Background Effects ===== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Shooting star */}
        <div className="shooting-star" />

        {/* Ripple circles (moved upward so bottom is NOT cut) */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="ripple ring-1" />
          <div className="ripple ring-2" />
          <div className="ripple ring-3" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* ===== Heading ===== */}
        <div className="text-center mb-16 animate-in slide-in-from-bottom duration-700">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
            <span className="bg-gradient-to-r from-white via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Have a question, feedback, or want to work together?
            Send us a message and we’ll reply shortly.
          </p>
        </div>

        {/* ===== Content ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left info */}
          <div className="space-y-6 animate-in slide-in-from-left duration-700">
            <div className="flex items-center gap-4 bg-slate-900/40 border border-slate-800 rounded-xl p-5 backdrop-blur">
              <Mail className="text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white font-medium">
                  support@elitecode.ai
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-900/40 border border-slate-800 rounded-xl p-5 backdrop-blur">
              <Phone className="text-cyan-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white font-medium">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-900/40 border border-slate-800 rounded-xl p-5 backdrop-blur">
              <MapPin className="text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white font-medium">
                  India
                </p>
              </div>
            </div>
          </div>

          {/* ===== Contact Form ===== */}
          <form className="form-card animate-in slide-in-from-right duration-700">
            <input
              type="text"
              placeholder="Your name"
              className="input-glow"
            />

            <input
              type="email"
              placeholder="Email address"
              className="input-glow"
            />

            <textarea
              rows="4"
              placeholder="Your message"
              className="input-glow resize-none"
            />

            <button
              type="submit"
              className="send-btn flex items-center justify-center gap-2 text-white font-semibold animate-breath hover:scale-[1.02] transition"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Noise layer */}
      <div className="noise-layer" />
    </section>
  )
}

export default Contact
