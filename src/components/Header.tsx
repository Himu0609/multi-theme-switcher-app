import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { theme, setTheme } = useTheme(); // using theme context for current state and updating same 

  return (
    <header className="fixed top-0 w-full bg-gray-800 text-white px-6 py-3 shadow-md flex justify-between items-center z-10">
      <h1 className="text-xl font-bold">Multi Theme App</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link> 
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <select
          title="title"
          value={theme}
          onChange={(e) => setTheme(e.target.value as any)}  //Here I am updateig setTheme to selected theme so that it change svalue accross the application
          className="text-black px-2 py-1 rounded"
        >
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>
      </nav>
    </header>
  );
}
