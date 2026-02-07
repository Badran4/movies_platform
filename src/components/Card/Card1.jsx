import { Link } from "react-router"
export default function Card1({moveDetails}){
    const {title,overview,poster_path,media_type,vote_average,id}= moveDetails
    return<>
    
    <Link to={`/movie/${id}`} className="card1 shadow-2xl group bg-white dark:bg-black dark:text-white p-2 rounded-xl ">
        <div className="card_cover relative">
            <img 
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt=""
            className="rounded-xl peer"
             />

             <div className="date size-12 group-hover:opacity-40 hover:scale-110 transition-transform duration-300 peer-hover:rotate-10 bg-white absolute top-6 left-6 flex flex-col justify-center items-center rounded-md">
                <span className="text-2xl font-black ">{vote_average.toFixed(1)}</span>
               
             </div>
        </div>
        <div className="card_content space-y-4">
            <span className="px-2 py-1 bg-cyan-200 text-cyan-600 font-semibold rounded-md ">{media_type}</span>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="line-clamp-3">{overview}</p>
           

            

        </div>
    </Link>
    </>
}