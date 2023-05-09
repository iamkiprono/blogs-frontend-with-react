import { useState } from "react";
import useFetch from "../Hooks/useFetch";
import { useAuthContext } from "../Hooks/useAuthContext";

const Blogs = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const { user } = useAuthContext();

  const { data: blogs, error } = useFetch(
    "https://blog-api-kiprono.onrender.com/blogs"
  );
  console.log(blogs);

  const deletePost = async (id) => {
    setLoading(true);
    setResult("");
    try {
      const res = await fetch(
        `https://blog-api-kiprono.onrender.com/blogs/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const result = await res.json();
      console.log(result);
      setLoading(false);
      setResult(result.message);
    } catch (error) {
      setResult(error.message);
      console.log(error);
    }
  };

  return (
    <div className="blogs">
      <div className="blog-wrapper">
        <div>{result}</div>
        {error}
        <h2 className="text-4xl font-bold">Blogs</h2>
        {blogs.length === 0
          ? "Loading..."
          : blogs.map((blog) => {
              return (
                <div key={blog.id} className="blog">
                  <img src={blog.image} alt="" />
                  <h3 className="text-xl font-bold">{blog.title}</h3>
                  <p>{blog.blog}</p>
                  {user && !loading ? (
                    <button
                      className="delete-btn"
                      onClick={() => deletePost(blog.id)}
                    >
                      Delete
                    </button>
                  ) : (user &&
                    <button className="deleting-btn">Deleting...</button>
                  )}
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Blogs;
