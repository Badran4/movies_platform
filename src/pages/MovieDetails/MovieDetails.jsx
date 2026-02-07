import { useParams } from "react-router"
import Navbar from "../../components/Navbar/Navbar"
import { useEffect, useState } from "react"
import Loading from "../../components/Loading/Loading"
import axios from "axios"





export default function MovieDetails(){

    const [moveDetails , setTrendingMvies] = useState(null)

    let {id} = useParams()


async function  grtMovieDetails(){

    const options = {
        method: "GET",
        url:`https://api.themoviedb.org/3/movie/${id}?api_key=cc6f380a70cd640201f572fde019a9cb`
   
    };
    const {data}= await axios.request(options);
    setTrendingMvies(data)
    

    }
    useEffect(()=>{
        grtMovieDetails()
    },[])




return <>
     {moveDetails === null ? (<Loading/>)
     : (
        <><Navbar/>
        <div className="container py-10 grid lg:grid-cols-12 lg:gap-8">
            <div className="movie-poster lg:col-span-4">
                <img src={`https://image.tmdb.org/t/p/w500/${moveDetails.poster_path }`} alt="" />
            </div>
            <div className="movie-content lg:col-span-8">
                <h2 className="text-2xl font-semibold mb-3">{moveDetails.title}</h2>
            <p className="line-clamp-3">{moveDetails.overview}</p>
            </div>

        </div>
        </>
     )}
    </>
}