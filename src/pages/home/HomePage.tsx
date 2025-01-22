import { useState } from "react";
import { useNavigate } from "react-router";

const HomePage = () => {
  const [username, setUsername] = useState<string>("");
  const navigate = useNavigate();

  const handleGetUser = async () => {
    navigate(`/${username}`);
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={async () => await handleGetUser()}>Search</button>
    </div>
  );
};

export default HomePage;
