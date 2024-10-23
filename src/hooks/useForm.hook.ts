import { useState, useCallback } from "react";

export const useForm = () => {
    const [value,setValue] = useState<string>("");
    
    const handleInput = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setValue(value);
    },[])

    return { value,handleInput }
}