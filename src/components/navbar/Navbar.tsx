import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { useNavigate } from "react-router";
import "./styles.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");

  return (
    <div className="h-12 flex fixed w-full z-10 items-center justify-between bg-gray-600">
      <div className="lg:mx-32 md:mx-1 sm:mx-1 xs:mx-1 lg:px-6 px-4 flex items-center justify-between w-full">
        <div className="flex items-center mr-2">
          <div className="mr-1">
            <BsGithub color="#FFFFFF" />
          </div>
          <h1 className="text-sm font-bold text-white navbar-title">
            GitHub Profile Viewer
          </h1>
        </div>
        <div className="navbar-input-container">
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            style={{ minWidth: "256px" }}
            className={`rounded border border-gray-200 py-1 px-2 bg-gray-600 text-sm text-white navbar-input`}
            placeholder="Enter GitHub username..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                navigate(`/${username}`);
                setUsername("");
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
