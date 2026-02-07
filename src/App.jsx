import Home from "./pages/Home/Home"
import Signup from "./pages/Signup/Signup"
import Login from "./pages/login/login"
import Loading from "./components/Loading/Loading"
import { BrowserRouter ,Routes,Route, RouterProvider ,createBrowserRouter, Navigate} from "react-router"
import NotFund from "./pages/NotFound/NotFound"
import Trending from "./pages/Trending/Trending"
import MovieDetails from "./pages/MovieDetails/MovieDetails"
import { useState } from "react"

function App() {

    const [theme,setTheme] = useState(localStorage.getItem('theme') || 'light');
    function toggleTheme(){
        if(theme === "light"){
            setTheme('dark')
            localStorage.setItem('theme','dark')  
        }else{
            setTheme('light')
            localStorage.setItem('theme','light') 
        }
    }
    

    const x = createBrowserRouter([
         
        {
            index:true,
        element :<div className={theme==="light" ? "":"dark"}> <Home toggleTheme={toggleTheme} theme={theme} /></div>,
        },{
            path:"/login",
            element:<div className={theme==="light" ? "":"dark"}> <Login toggleTheme={toggleTheme} theme={theme} /></div>,

        },{
            path:"/signup" ,
            element :<div className={theme==="light" ? "":"dark"}> <Signup toggleTheme={toggleTheme} theme={theme} /></div>,
        },
        {
          path:"/movie/:id",
          element: <MovieDetails/>},
        {
            path:"/trending",
            element:<Trending/>,
            children:[
                {
                index:true,
                element: <Navigate to={`movies`} replace/>  , 
                },
                {
                path:"movies",
                element: <h2>movies</h2>  , 
                },
                 {
                path:"People",
                element: <h2>People</h2>  , 
                },
                 {
                path:"tv",
                element: <h2>TV</h2>  , 
                }
            ]

        },{
            path:"*" ,
            element :<NotFund />,
        }
    ])
return<div>
    <RouterProvider router={x}/>

    {/* <Signup  toggleTheme={toggleTheme} theme={theme}/> */}
    {/* // <BrowserRouter>
    //     <Routes>
    //         <Route path="/signup" element={<Signup />}/>
    //         <Route path="/trending" element={<Trending />}/>
    //         <Route index element={<Home />}/>
    //         <Route path="/login" element={<Login />}/>
    //         <Route path="*" element={<NotFund />}/>
    //     </Routes>
    
    // </BrowserRouter> */}
     
</div>
}

export default App

//    const [theme,setTheme]= useState('light')

//     function toggleTheme(){
//         if(theme === "light"){
//             setTheme('dark')
//         }else{
//             setTheme('light')
//         }
//     }


{/* <Home toggleTheme={toggleTheme} theme={theme} /> */}