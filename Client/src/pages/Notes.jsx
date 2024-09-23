const notes = [
  { title: "Note 1", subject: "Subject 1" },
  { title: "Note 2", subject: "Subject 1" },
  { title: "Note 3", subject: "Subject 1" },
  { title: "Note 4", subject: "Subject 1" },
  { title: "Note 5", subject: "Subject 1" },
  { title: "Note 6", subject: "Subject 1" }
];

const Notes = () => {
  return (
    <section className="min-h-screen flex justify-center bg-gray-100 py-10">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-sans font-semibold text-gray-800 mb-6">Notes for {notes[0].subject}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {notes.map((note, index) => (
            <div
              key={index}
              className="flex flex-col justify-start p-6 space-y-4 bg-white border-2 border-orange-400 rounded-md shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-700">{note.title}</h3>
              <button className="px-4 py-2 rounded-md border border-stone-900 bg-gray-200 hover:bg-gray-300 transition-colors">
                View Note
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notes;
