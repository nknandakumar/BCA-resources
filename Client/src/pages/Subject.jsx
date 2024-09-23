import { Link } from "react-router-dom";
import {NotebookPen ,ScrollText } from "lucide-react"

const subjects = [
  { name: "Subject 1" },
  { name: "Subject 2" },
  { name: "Subject 3" },
  { name: "Subject 4" },
  { name: "Subject 5" },
  { name: "Subject 6" },
  { name: "Subject 7" }
];

const Subject = () => {
  return (
    <section className="min-h-screen flex justify-center bg-gray-100 py-10">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="flex flex-col justify-start p-6 space-y-4 bg-white border-2 border-r-4 border-b-4 border-orange-400 rounded-3xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-sans font-semibold text-gray-800">{subject.name}</h2>
              <div className="flex gap-4">
               <Link to={'/papers'}>
               <div className="border-r-4 border-b-4 border-black rounded-2xl">
               <button className="px-4 py-2  flex  items-center gap-1 rounded-xl border border-stone-900 bg-gray-200 hover:bg-gray-300 transition-colors">
               <ScrollText className=" h-4  w-4" />   Papers
               </button>
              </div>
               </Link>
              <Link to={'/notes'}>
              
              <div className="border-r-4 border-b-4 border-black rounded-2xl">
               <button className="px-4  flex items-center gap-1 py-2 rounded-xl border border-stone-900 bg-gray-200 hover:bg-gray-300 transition-colors">
               <NotebookPen className=" h-4  w-4" />  Notes
               </button>
              </div>

              
              </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subject;
