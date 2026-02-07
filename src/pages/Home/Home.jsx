import Navbar from "../../components/Navbar/Navbar";
import Card1 from "../../components/Card/Card1";
import Signup from "../Signup/Signup";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import axios from "axios";

export default function Home({toggleTheme,theme}) {
    const [trendingMvies,setTrendingMvies] = useState(null)


    async function getTrendingMovies () {
      const options ={
        method:"GET",
        url:`https://api.themoviedb.org/3/trending/movie/day?api_key=cc6f380a70cd640201f572fde019a9cb`
   
      } 

      const {data} = await axios.request(options)
     
      setTrendingMvies(data.results)

    }
    useEffect(()=>{
        getTrendingMovies()
    },[])
 

return <>

    {trendingMvies == null ?(<Loading/>):(
        <div className="min-h-screen bg-gray-100 dark:bg-gray-800 dark:text-white">
                 <Navbar toggleTheme={toggleTheme} theme={theme}/>
            <div className="container grid grid-cols-4  my-5 gap-3">

               {trendingMvies.map((movie)=> <Card1 key={movie.id} moveDetails={movie}/> )}  

            </div>
         </div>
    )}
         

</>
     
}


