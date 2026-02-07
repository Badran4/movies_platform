import { NavLink, Outlet } from "react-router";
import Navbar from "../../components/Navbar/Navbar";

export default function Trending(){
    return <>
    <Navbar/>

    <main className="container grid grid-cols-12 ">
        <aside className="col-span-2  bg-gray-100 border-2 border-gray-400/50">
            <ul className="p-4  bg-gray-100 space-y-4  *:bg-gray-200">
                <li>
                    <NavLink to="movies" 
                    className={({isActive})=>{
                        return `${isActive ? "bg-violet-400 text-white" : ""} w-full p-2`; 
                        }}>Moves</NavLink>
                </li>
                <li>
                    <NavLink to="people"  className={({isActive})=>{return `${isActive ? "bg-violet-400 text-white" : ""} w-full p-2`; }}>People</NavLink>
                </li>
                <li>
                    <NavLink to="tv"  className={({isActive})=>{return `${isActive ? "bg-violet-400 text-white" : ""} w-full p-2`; }}>TV</NavLink>
                </li>
            </ul>
        </aside>
        <section className="col-span-10 p-4 bg-gray-100 border-2 border-gray-400/50">
              <Outlet/>
        </section>
    </main>

    
    
    </>
}