import React from 'react'

function Contact() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center px-4 pt-28 pb-10">

      {/* ── CARD WRAPPER ── */}
      <div className="
        relative
        w-full max-w-6xl
        flex flex-col lg:flex-row
        rounded-2xl
        border border-cyan-400/25
        bg-black/65
        backdrop-blur-xl
        shadow-[0_0_50px_rgba(34,211,238,0.10)]
        overflow-hidden
      ">

        {/* ── LEFT — FORM ── */}
        <div className="w-full lg:w-1/2 px-7 sm:px-10 py-8 flex flex-col gap-5">

          {/* Heading */}
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/25 mb-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse flex-shrink-0" />
              <span className="text-[9px] uppercase tracking-widest text-cyan-300">
                Contact
              </span>
            </div>
            <h1 className="text-white text-2xl sm:text-3xl font-bold leading-tight">
              Let's Connect
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Open for opportunities & collaboration
            </p>
          </div>

          {/* Fields */}
          <div className="flex flex-col gap-3.5">

            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-cyan-300 text-[11px] font-semibold uppercase tracking-wider">
                Name
              </label>
              <input
                type="text"
                placeholder="Taimoor Tanveer"
                className="
                  bg-white/[0.06]
                  border border-cyan-400/25
                  rounded-xl
                  px-4 py-2.5
                  text-white text-sm
                  placeholder-gray-400
                  focus:outline-none focus:border-cyan-400/70 focus:bg-white/10
                  transition duration-200
                "
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-cyan-300 text-[11px] font-semibold uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                placeholder="taimoor725tanveer@gmail.com"
                className="
                  bg-white/[0.06]
                  border border-cyan-400/25
                  rounded-xl
                  px-4 py-2.5
                  text-white text-sm
                  placeholder-gray-400
                  focus:outline-none focus:border-cyan-400/70 focus:bg-white/10
                  transition duration-200
                "
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-cyan-300 text-[11px] font-semibold uppercase tracking-wider">
                Your Message
              </label>
              <textarea
                rows={4}
                placeholder="Write your message here..."
                className="
                  bg-white/[0.06]
                  border border-cyan-400/25
                  rounded-xl
                  px-4 py-2.5
                  text-white text-sm
                  placeholder-gray-400
                  focus:outline-none focus:border-cyan-400/70 focus:bg-white/10
                  transition duration-200
                  resize-none
                "
              />
            </div>

          </div>

          {/* Submit */}
          <button className="
            w-full sm:w-auto
            px-8 py-2.5
            bg-cyan-500
            hover:bg-cyan-400
            active:bg-cyan-600
            text-white
            text-lg font-semibold
            rounded-xl
            transition-colors duration-200
            shadow-lg shadow-cyan-500/20
          ">
            Send Message
          </button>

        </div>

        {/* ── DIVIDER — desktop only ── */}
        <div className="hidden lg:flex w-px self-stretch">
          <div className="w-full bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent" />
        </div>

        {/* ── RIGHT — 3D MODEL ── */}
        <div className="
          w-full lg:w-1/2
          min-h-[240px] lg:min-h-0
          flex items-center justify-center
          border-t border-cyan-400/15 lg:border-t-0
        ">
          {/* drop your 3D canvas here */}
          <p className="text-gray-600 text-sm tracking-wide">3D model</p>
        </div>

      </div>
    </section>
  )
}

export default Contact