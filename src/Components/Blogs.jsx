import { useState } from "react";
import useFetch from "../Hooks/useFetch";


const Blogs = () => {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState("")

  const { data: blogs } = useFetch(
    "https://blog-api-kiprono.onrender.com/blogs"
  );
  console.log(blogs);

  const deletePost = async (id) => {
    setLoading(true)
    setResult("")
    try {
      const res = await fetch(
        `https://blog-api-kiprono.onrender.com/blogs/${id}`,
        {
          method: "DELETE",
        }
      );
      const result = await res.json();
      console.log(result);
      setLoading(false)
      setResult(result.message)
    } catch (error) {
      setResult(error.message)
      console.log(error);
    }
  };
  
  return (
    <div className="blogs">
      <div className="blog-wrapper">
 
        <div>{result}</div>
        <h2>Blogs</h2>
        {blogs.length === 0
          ? "Loading..."
          : blogs.map((blog) => {
              return (
                <div key={blog.id} className="blog">
                  <img src={blog.image} alt="" />
                  <h3>{blog.title}</h3>
                  <p>{blog.blog}</p>
                  {!loading ? <button className="delete-btn" onClick={() => deletePost(blog.id)}>Delete</button>: <button className="deleting-btn">Deleting...</button>}
                  
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Blogs;
