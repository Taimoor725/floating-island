import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <header className="flex justify-between w-screen h-16 _bg-[gray] items-center p-5" >
        <NavLink to={"/"} className={"w-10 h-10 bg-slate-300 font-bold rounded-xl shadow-md items-center justify-center flex text-blue-500"}>
            <div>AH</div>
        </NavLink>

            <div className="w-1/2 flex justify-end _bg-[red] items-center gap-4 ">
            <NavLink to={"/about"} className={({isActive})=> isActive ? " text-blue-500":"text-black"}>
                About
            </NavLink>
            <NavLink to={"/projects"} className={({isActive})=> isActive ? " text-blue-500":"text-black"}>
                Projects
            </NavLink>
            </div>
    </header>
  )
}

export default Navbar