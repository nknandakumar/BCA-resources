const papers = [
  { year: "2024" },
  { year: "2023" },
  { year: "2022" }
];

const Papers = () => {
  return (
    <section className="min-h-screen flex justify-center bg-gray-100 py-10">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {papers.map((paper, index) => (
            <div
              key={index}
              className="flex flex-col justify-start p-6 space-y-4 bg-white border-2 border-orange-400 rounded-md shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-sans font-semibold text-gray-800">{paper.year} Exam Papers</h2>
              <div className="flex gap-4">
                <button className="px-4 py-2 rounded-md border border-stone-900 bg-gray-200 hover:bg-gray-300 transition-colors">
                  View
                </button>
                <button className="px-4 py-2 rounded-md border border-stone-900 bg-gray-200 hover:bg-gray-300 transition-colors">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Papers;
