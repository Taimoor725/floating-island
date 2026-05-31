"use client"

import React, { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"

import Loader from "@/components/Loader"
import Fox from "@/models/Fox"

function Contact() {
  const currentAnimation = useRef("idle")

  const handleFocus = () => {
    currentAnimation.current = "walk"
  }

  const handleBlur = () => {
    currentAnimation.current = "idle"
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    currentAnimation.current = "hit"

    setTimeout(() => {
      currentAnimation.current = "idle"
    }, 3000)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-24">
      <div className="relative w-full max-w-6xl overflow-hidden rounded-3xl border border-cyan-400/20 bg-black/60 backdrop-blur-xl shadow-[0_0_50px_rgba(34,211,238,0.10)]">
        <div className="flex flex-col lg:flex-row">
          {/* FOX SECTION */}
          <div className="order-1 lg:order-2 relative w-full lg:w-1/2 h-[280px] sm:h-[350px] lg:h-auto border-b border-cyan-400/15 lg:border-b-0 lg:border-l">
            <div className="absolute inset-0 bg-white" />

            <Canvas
              className="w-full h-full"
              camera={{
                position: [5, 2, 8],
                near: 0.1,
                far: 100,
                fov: 75
              }}
            >
              <Suspense fallback={<Loader />}>
                <ambientLight intensity={1} />

                <directionalLight
                  position={[0, 5, 5]}
                  intensity={2}
                />

                <Fox currentAnimation={currentAnimation} />
              </Suspense>
            </Canvas>
          </div>

          {/* FORM SECTION */}
          <form
            onSubmit={handleSubmit}
            className="order-2 lg:order-1 w-full lg:w-1/2 px-6 sm:px-10 py-8 flex flex-col gap-5"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/25 mb-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-300">
                  Contact
                </span>
              </div>

              <h1 className="text-white text-3xl font-bold leading-tight">
                Let's Connect
              </h1>

              <p className="mt-2 text-sm text-gray-400">
                Open for opportunities, freelance work, and collaboration.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {/* NAME */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Taimoor Tanveer"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="rounded-xl border border-cyan-400/25 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-gray-400 transition-all duration-300 focus:border-cyan-400/70 focus:bg-white/10 focus:outline-none"
                />
              </div>

              {/* EMAIL */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="taimoor725tanveer@gmail.com"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="rounded-xl border border-cyan-400/25 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-gray-400 transition-all duration-300 focus:border-cyan-400/70 focus:bg-white/10 focus:outline-none"
                />
              </div>

              {/* MESSAGE */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
                  Your Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Write your message here..."
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="resize-none rounded-xl border border-cyan-400/25 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-gray-400 transition-all duration-300 focus:border-cyan-400/70 focus:bg-white/10 focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 w-full sm:w-fit rounded-xl bg-cyan-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:bg-cyan-400 hover:shadow-cyan-500/40 active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact