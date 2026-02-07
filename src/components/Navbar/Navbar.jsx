import { NavLink } from "react-router";

export default function Navbar({toggleTheme,theme}) {
return<>
<nav className="bg-gray-50 shadow dark:bg-gray-900 dark:text-white">
    <div className="container py-4 flex items-center justify-between ">
        <h1>
            <a href="#" className="text-2xl font-semibold ">FreshCart</a>
        </h1>
        <ul className="flex gap-8  group:">
                    <li>
                        <NavLink to="/" className="  before:bg-violet-700 hover:before:w-full before:transition-[width] before:duration-300 before:h-0.5 before:absolute relative  before:left-0 before:-bottom-1 b hover:text-violet-700  transition-colors duration-300">
                        Home


                        </NavLink>
                    </li>
                   
                    <li>
                        <NavLink to="/trending"
                        className="before:w-0 before:bg-violet-700 hover:before:w-full before:transition-[width] before:duration-300 before:h-0.5 before:absolute relative before:left-0 before:-bottom-1   hover:text-violet-700 transition-colors duration-300">
                            Trending

                        </NavLink>
                    </li>
                     <li>
                        <NavLink to="/movie" className="before:w-0 before:bg-violet-700 hover:before:w-full before:transition-[width] before:duration-300 before:h-0.5 before:absolute relative  before:left-0 before:-bottom-1   hover:text-violet-700 transition-colors duration-300">
                            About

                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/signup" className="before:w-0 before:bg-violet-700 hover:before:w-full before:transition-[width] before:duration-300 before:h-0.5 before:absolute relative before:left-0 before:-bottom-1   hover:text-violet-700 transition-colors duration-300">
                            Sign Up

                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" className="before:w-0 before:bg-violet-700 hover:before:w-full before:transition-[width] before:duration-300 before:h-0.5 before:absolute relative before:left-0 before:-bottom-1   hover:text-violet-700 transition-colors duration-300">
                            Login

                        </NavLink>
                    </li>
        </ul>


        <button className="btn" onClick={toggleTheme}>
           {theme==="light" ? <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" 
                stroke-width="1.5" stroke="currentColor"
                class="size-6">
                <path stroke-linecap="round" 
                stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
}
         </button>
    </div>

</nav>
</>
     
}


