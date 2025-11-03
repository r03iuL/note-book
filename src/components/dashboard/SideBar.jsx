import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="w-55 flex flex-col justify-between bg-gradient-to-b from-purple-400 to-purple-600 text-white p-4 text-center font-manrope">
      <div>
        <div className="flex items-center justify-center h-20 border-b border-white/10">
          <Link to="/" className="text-4xl font-lobster text-white">NoteBook</Link>
        </div>
        
        <div className="flex flex-col items-center text-center mt-2 border-b-2 border-white/50 py-4">
          <div className="avatar">
            <div className="w-32 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
              <img src="https://cdn.vectorstock.com/i/preview-2x/67/11/smiling-student-avatar-in-flat-cartoon-design-vector-47246711.webp" alt="User Avatar" className=""/>
            </div>
          </div>
          <Link
            to="/dashboard"
            className="flex items-center p-3 rounded-lg hover:bg-purple-700 transition-colors mt-3 -ml-4 font-semibold text-xl"
          ><span>Jhon Doe</span>
            {/* <span className="w-6 h-6 mr-3 "><img src="/src/assets/DashIcons/pen.png" alt=""  /></span>  */}
            
          </Link>
        </div>

        <div className="flex flex-col space-y-2 py-4">
          <Link
            to="/dashboard"
            className="flex items-center p-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <span className="w-6 h-6 mr-3"><img src="/src/assets/DashIcons/notes.png" alt=""  /></span> {/* Placeholder for icon */}
            <span>My Notes</span>
          </Link>
          <Link
            to="/dashboard/archive"
            className="flex items-center p-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <span className="w-6 h-6 mr-3"><img src="/src/assets/DashIcons/archive.png" alt=""  /></span> {/* Placeholder for icon */}
            <span>Archive</span>
          </Link>
          <Link
            to="/dashboard/trash"
            className="flex items-center p-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <span className="w-6 h-6 mr-3"><img src="/src/assets/DashIcons/trash.png" alt=""  /></span> {/* Placeholder for icon */}
            <span>Trash</span>
          </Link>
        </div>
      </div>

      <div className="text-center border-t-2 border-white/10">
          <Link to="/logout" className="flex items-center p-3 rounded-lg hover:bg-purple-700 transition-colors">
              <span className="w-6 h-6 mr-3"><img className="w-8" src="/src/assets/DashIcons/logout.png" alt=""  /></span> {/* Placeholder for icon */}
              <span>Log Out</span>
          </Link>
      </div>
    </div>
  );
}

export default SideBar;