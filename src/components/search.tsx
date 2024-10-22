import { useFetchMovie } from "@hooks/useFetchMovie.hook";
import { useState } from "react";
import { Card } from "./card";


export const Search:React.FC = () => {
    const [value,setValue] = useState<string>("");
    const {data,status,error} = useFetchMovie(value);
    

    const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setValue(value);
    }

  

    return(
        <section className="w-full  flex flex-col items-center  justify-start min-h-screen bg-[#313131] p-4">
            <input 
                type="text" 
                placeholder="Search a move..."
                className="bg-[#d8d8d8] h-min p-[2px] w-[200px] rounded-[10px] text-center outline-none"
                onChange={handleInput}  
                value={value}/>
            <div className="grid p-5 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] grid-rows-[repeat(auto-fill,minmax(350px,1fr))] w-full max-w-[1200px] gap-3 ">
                {
                    status === "pending" ? <div>Loading...</div>:
                    status === "error" ? <div>{error.message}</div>:
                    data.map((item,id) => <Card key={id} Title={item.Title} Year={item.Year} Poster={item.Poster} />)
                }
            </div>
        </section>
    )
}