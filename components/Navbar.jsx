import { NavLink } from "react-router-dom"

function Navbar() {

  const navLinkStyles = ({ isActive }) =>
    `relative text-sm font-medium transition-all duration-300
    ${isActive
      ? "text-cyan-400"
      : "text-gray-300 hover:text-cyan-300"
    }`

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-3 sm:px-4 py-3 sm:py-4">

      <div className="
        mx-auto
        w-full max-w-6xl
        flex items-center justify-between
        px-3 sm:px-5 py-2.5 sm:py-3
        rounded-2xl
        border border-cyan-400/20
        bg-black/60
        backdrop-blur-xl
        shadow-[0_0_25px_rgba(34,211,238,0.10)]
      ">

        {/* ── Logo ── */}
        <NavLink to="/" className="flex items-center gap-2.5 min-w-0">

          <div className="
            flex-shrink-0
            w-9 h-9 sm:w-10 sm:h-10
            rounded-xl
            bg-cyan-500
            flex items-center justify-center
            font-bold text-black text-sm
            shadow-lg shadow-cyan-500/30
          ">
            TT
          </div>

          <div className="hidden sm:block min-w-0">
            <h1 className="text-white font-bold text-sm leading-tight truncate">
              Taimoor Tanveer
            </h1>
            <p className="text-gray-400 text-xs leading-tight">
              Mechatronics Engineer
            </p>
          </div>

        </NavLink>

        {/* ── Nav Links ── */}
        <nav className="flex items-center gap-3 sm:gap-5 md:gap-6">
          <NavLink to="/" className={navLinkStyles}>Home</NavLink>
          {/* <NavLink to="/about"   className={navLinkStyles}>About</NavLink> */}
          {/* <NavLink to="/projects" className={navLinkStyles}>Projects</NavLink> */}
          <NavLink to="/contact" className={navLinkStyles}>Contact</NavLink>
        </nav>

      </div>

    </header>
  )
}

export default Navbar