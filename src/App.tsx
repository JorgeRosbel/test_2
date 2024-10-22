import "tailwindcss/tailwind.css";
import { Search } from "@components/search";


const App:React.FC  = () => {

  return(
    <main id="page" className="min-h-screen w-full">
      <Search />
    </main>
  )
}

export default App
