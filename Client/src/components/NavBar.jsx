import {DatabaseZap } from "lucide-react"
const NavBar = () => {
  return (
    <nav className="flex justify-center items-center gap-1 py-4 text-2xl font-mono font-bold bg-orange-400">
      <h1 className="text-white">BCA-Resources</h1> <DatabaseZap />
    </nav>
  );
};

export default NavBar;
