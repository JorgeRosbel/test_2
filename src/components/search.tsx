import { useFetchMovie } from "@hooks/useFetchMovie.hook";
import { useForm } from "@hooks/useForm.hook";
import { Card } from "./card";
import { Form } from "./from";

export const Search:React.FC = () => {
    const {value,handleInput}  = useForm();
    const {data,status,error} = useFetchMovie(value);

    return(
        <>
            <header className="w-full bg-[#000000] top-0 left-0 fixed h-[50px] flex items-center justify-center">
                <Form handleInput={handleInput} value={value} />
            </header>

            <section className="w-full mt-[50px]  flex flex-col items-center  justify-start min-h-screen bg-[#313131] p-4">
                <div className="grid p-5 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] grid-rows-[repeat(auto-fill,minmax(350px,1fr))] w-full max-w-[1200px] gap-3 ">
                    {
                        status === "pending" ? <span className="text-white animate-pulse text-[20px] font-bold">Loading...</span> :
                        status === "error" ? <div>{error.message}</div> :
                        data.length > 0 ? data.map((item, id) => <Card key={id} Title={item.Title} Year={item.Year} Poster={item.Poster} />) :
                        <span className="text-white font-bold animate-pulse text-[20px] text-center">No movies found T_T</span>
                    }
                </div>
            </section>
        </>
        
    )
}