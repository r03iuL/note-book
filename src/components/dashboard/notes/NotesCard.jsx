import React from "react";

const NotesCard = ({ note }) => {
  const getDotColorClass = (color) => {
    const colorMap = {
      purple: "bg-purple-500/70",
      blue: "bg-blue-500/70",
      green: "bg-green-500/70",
      red: "bg-red-500/70",
      orange: "bg-orange-500/70",
      gray: "bg-gray-500/70",
      black: "bg-base-content",
      yellow: "bg-yellow-500/70",
      pink: "bg-pink-500/70",
      cyan: "bg-cyan-500/70 "
    };
    return colorMap[color] || "bg-gray-500/50";
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div
      className={`card shadow-md hover:shadow-lg transition-shadow cursor-pointer w-60 h-50 ${getDotColorClass(note.color)}`}
    >
      <div className="card-body p-8 font-mono relative">
        <div className="flex items-center gap-3">
          <h2 className="card-title text-white text-xl ">{note.title}</h2>
        </div>
        <p className="text-sm text-white/80 mb-6">{note.content}</p>
        <p className="text-md font-semibold text-white/80 mt-2 absolute bottom-5 right-10">
          {formatDate(note.createdAt)}
        </p>
      </div>
    </div>
  );
};

export default NotesCard;
