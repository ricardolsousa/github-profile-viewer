import { useState } from "react";
import { getUser } from "../../services/github-api/githubAPI";

const HomePage = () => {
  const [username, setUsername] = useState<string>("");
  const [user, setUser] = useState<any>(null);

  const handleGetUser = async () => {
    const newUser = await getUser(username);
    if (newUser) {
      setUser(newUser);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={async () => await handleGetUser()}>Search</button>
      {JSON.stringify(user, null, 2)}
    </div>
  );
};

export default HomePage;
