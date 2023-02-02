import { Nav, Comments, Gallery, Posts } from "./components";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { API_URL } from "./utils/constants";
import { useState } from "react";
import { Photos } from "./providers/Photos";

const App = () => {
  // NApravi povik kon /posts
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const callPost = async () => {
      const fetchData = await fetch(API_URL + "/posts");
      const data = await fetchData.json();
      await new Promise((r) => setTimeout(r, 5000));
      console.log("after promise");
      setPosts(data);
    };

    callPost();
  }, []);
  return (
    <>
      <div>
        <Nav />
        <Photos>
          <Routes>
            <Route path="/posts" element={<Posts posts={posts} />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </Photos>
      </div>
    </>
  );
};
export default App;
