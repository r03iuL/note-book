import React, { useEffect, useState } from "react";
import NotesCard from "./NotesCard"; //

const AllNotes = () => {
  const [notes, setNotes] = useState([]);

 
  useEffect(() => {
    fetch("http://localhost:5000/notes")
      .then((res) => {
        if (!res.ok) throw new Error("Fetch failed");
        return res.json();
      })
      .then((data) => {
        console.log("Notes loaded:", data); // DEBUG
        setNotes(data);
      })
      .catch((err) => console.error(" Error loading notes:", err));
  }, []);
  console.log(notes);

  return (
    <div className="max-h-[65vh] overflow-y-auto py-6 px-2 bg-base-300/80 backdrop-blur-sm rounded-lg">
      {notes.length === 0 ? (
        <p className="text-gray-500">No notes found.</p>
      ) : (
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 pl-9">
          {notes.map((note) => (
            <NotesCard key={note._id} note={note} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllNotes;
