
interface FormData{
    handleInput:(e:React.ChangeEvent<HTMLInputElement>) => void;
    value:string;
}

export const Form: React.FC<FormData> = ({handleInput,value}) => {

    return (
        <form>
            <input
                type="text"
                placeholder="Search a move..."
                className="bg-[#d8d8d8] h-min p-[2px] w-[200px] rounded-[10px] text-center outline-none"
                onChange={handleInput}
                value={value} />
        </form>
    )
}