import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useDebounce } from "./useDebounce.hook"; // Asegúrate de importar el custom hook

export interface Data {
  Title: string;
  Year: string;
  Poster: string;
}

interface Response{
    Search:Data[];
}

const API_KEY = import.meta.env.VITE_API_KEY;

export const useFetchMovie = (title: string) => {
  // Usar el valor debounced
  const debouncedTitle = useDebounce(title, 2000); // 2000 ms de retraso

  const queryFn = async (): Promise<Data[]> => {
    const endpoint = `http://omdbapi.com/?apikey=${API_KEY}&s=${encodeURI(debouncedTitle)}`;

    console.log("Fetching data...");

    try {
      const response = await axios.get<Response>(endpoint);
      console.log(response.data);
      return response.data.Search;
    } catch (error: unknown) {
      if (error instanceof Error || axios.isAxiosError(error)) {
        throw new Error("Failed to fetch a movie: " + error.message);
      } else {
        throw new Error("Failed to fetch a movie due to an unknown error.");
      }
    }
  };

  return useQuery({
    queryKey: ["movie", debouncedTitle], // Usar el valor debounced en la query
    queryFn: queryFn,
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
    enabled: !!debouncedTitle, // Habilitar la query solo si hay un valor
  });
};
