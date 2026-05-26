import React from 'react'
import { Link } from 'react-router-dom'

function HomeInfo({ currenStage }) {

  // 🔷 BASE CARD
  const Card = ({ badge, title, subtitle, text, buttonText, link }) => (
    <div className="relative w-full">

      {/* glow */}
      <div className="absolute inset-0 bg-cyan-500/10 blur-xl rounded-2xl pointer-events-none" />

      {/* card */}
      <div className="
        relative
        bg-black/70
        backdrop-blur-md
        border border-cyan-400/20
        rounded-2xl
        px-4 py-3
        text-white
        shadow-2xl
      ">

        {/* TOP ROW */}
        <div className="flex justify-between items-start gap-3">

          {/* LEFT */}
          <div className="min-w-0 flex-1">

            <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 mb-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse flex-shrink-0" />
              <span className="text-[9px] uppercase tracking-widest text-cyan-300 whitespace-nowrap">
                {badge}
              </span>
            </div>

            <h1 className="text-base sm:text-lg md:text-xl font-bold leading-tight truncate">
              {title}
            </h1>

            <p className="text-cyan-200 text-[11px] sm:text-xs md:text-sm mt-1 leading-snug">
              {subtitle}
            </p>

          </div>

          {/* BUTTON */}
          <Link
            to={link}
            className="
              flex-shrink-0
              px-3 py-2
              bg-cyan-500
              hover:bg-cyan-400
              active:bg-cyan-600
              text-black
              text-[11px] sm:text-xs md:text-sm
              font-semibold
              rounded-lg
              transition-colors
              whitespace-nowrap
            "
          >
            {buttonText}
          </Link>

        </div>

        {/* BODY TEXT */}
        <p className="
          mt-3
          text-[11px] sm:text-[12px] md:text-sm
          text-gray-300
          leading-5
          border-t border-white/10
          pt-3
        ">
          {text}
        </p>

      </div>
    </div>
  )

  // 🔶 CONTACT CARD
  const Contact = () => (
    <div className="relative w-full">

      <div className="absolute inset-0 bg-cyan-500/10 blur-xl rounded-2xl pointer-events-none" />

      <div className="
        relative
        bg-black/70
        backdrop-blur-md
        border border-cyan-400/20
        rounded-2xl
        px-4 py-3
        text-white
        shadow-2xl
      ">

        {/* TOP ROW */}
        <div className="flex justify-between items-center gap-3">

          <div className="min-w-0 flex-1">

            <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 mb-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse flex-shrink-0" />
              <span className="text-[9px] uppercase tracking-widest text-cyan-300 whitespace-nowrap">
                Contact
              </span>
            </div>

            <h1 className="text-base sm:text-lg md:text-xl font-bold">
              Let's Connect
            </h1>

            <p className="text-cyan-200 text-[11px] sm:text-xs mt-1">
              Open for opportunities & collaboration
            </p>

          </div>

          <Link
            to="/contact"
            className="
              flex-shrink-0
              px-3 py-2
              bg-cyan-500
              hover:bg-cyan-400
              active:bg-cyan-600
              text-black
              text-[11px] sm:text-xs
              font-semibold
              rounded-lg
              transition-colors
              whitespace-nowrap
            "
          >
            Contact
          </Link>

        </div>

        {/* SHORT TEXT */}
        <p className="
          mt-3
          text-[11px] sm:text-[12px] md:text-sm
          text-gray-300
          leading-5
          border-t border-white/10
          pt-3
        ">
          Reach out for projects, internships, or development work.
        </p>

      </div>
    </div>
  )

  const renderContent = {
    1: (
      <Card
        badge="Welcome"
        title="Taimoor Tanveer"
        subtitle="Mechatronics Engineer & Programmer"
        text="Building modern web apps, 3D experiences, and engineering-based digital solutions."
        buttonText="Projects"
        link="/projects"
      />
    ),
    2: (
      <Card
        badge="Skills"
        title="Technical Expertise"
        subtitle="Frontend • Robotics • Development"
        text="React, Three.js, Tailwind CSS, Python, C++, and modern UI engineering."
        buttonText="About"
        link="/about"
      />
    ),
    3: (
      <Card
        badge="Organization"
        title="HIGH-HOUSE"
        subtitle="Creative Development Studio"
        text="Focused on building interactive and high-performance digital experiences."
        buttonText="Contact"
        link="/contact"
      />
    ),
    4: <Contact />
  }

  return renderContent[currenStage] || null
}

export default HomeInfo