import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100 flex md:h-[100vh]   p-4">
      <div className="container mx-auto flex flex-wrap justify-center gap-6">
        <Link to={'subject'} className="flex flex-col items-center">
          <div className=" border-2 border-r-4 border-b-4 border-orange-400 text-black bg-white h-80 w-72 flex items-center justify-center p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold">First Semester</h2>
          </div>
        </Link>
        <Link to={'subject'} className="flex flex-col items-center">
          <div className="border-2  border-r-4 border-b-4 border-orange-400 text-black bg-white h-80 w-72 flex items-center justify-center p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold">Second Semester</h2>
          </div>
        </Link>

          <div className="border-2  flex-col  border-r-4 border-b-4 border-gray-400 text-black bg-white h-80 w-72 flex items-center justify-center p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl text-gray-400 font-bold">Third Semester</h2>
            <h1 className="text-xl md:text-xl text-gray-300 font-bold flex items-center">L<svg stroke="currentColor" fill="currentColor" 
        viewBox="0 0 24 24" className="animate-spin" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.6695 15.9999H10.3295L8.95053 17.8969L9.5044 19.6031C10.2897 19.8607 11.1286 20 12 20C12.8714 20 13.7103 19.8607 14.4956 19.6031L15.0485 17.8969L13.6695 15.9999ZM5.29354 10.8719L4.00222 11.8095L4 12C4 13.7297 4.54894 15.3312 5.4821 16.6397L7.39254 16.6399L8.71453 14.8199L7.68654 11.6499L5.29354 10.8719ZM18.7055 10.8719L16.3125 11.6499L15.2845 14.8199L16.6065 16.6399L18.5179 16.6397C19.4511 15.3312 20 13.7297 20 12L19.997 11.81L18.7055 10.8719ZM12 9.536L9.656 11.238L10.552 14H13.447L14.343 11.238L12 9.536ZM14.2914 4.33299L12.9995 5.27293V7.78993L15.6935 9.74693L17.9325 9.01993L18.4867 7.3168C17.467 5.90685 15.9988 4.84254 14.2914 4.33299ZM9.70757 4.33329C8.00021 4.84307 6.53216 5.90762 5.51261 7.31778L6.06653 9.01993L8.30554 9.74693L10.9995 7.78993V5.27293L9.70757 4.33329Z">
        </path>
      </svg> ading... </h1>
          </div>
        
      </div>
    </div>
  );
};

export default Home;
