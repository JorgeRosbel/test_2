import { type Data } from "@hooks/useFetchMovie.hook";
import { useState } from "react";

export const Card:React.FC<Data> = ({Title,Year,Poster}) => {

    const [isLoading,setLoading] = useState<boolean>(true);

    const handleLoading = () => setLoading(false);

    return(
        <article className="bg-[#212020] p-2 rounded-xl">
            <div className="w-full h-auto">
                {isLoading && <div className="w-full h-full min-w-[250px] min-h-[350px] bg-slate-400 animate-pulse"></div>}
                <img 
                    onLoad={handleLoading}
                    src={Poster} 
                    alt={`image-${Title}`} 
                    width="100%" 
                    height="100%" 
                    className={`w-full rounded-xl ${isLoading ? "hidden" : "block"}`} />
            </div>
            <div className="flex text-white p-1 gap-3">
                <span className="font-semibold">{Title}</span>
                <span className="font-semibold text-white text-opacity-45">{Year}</span>
            </div>
        </article>
    )
}