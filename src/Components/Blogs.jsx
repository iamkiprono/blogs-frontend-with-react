import { useState } from "react";
import useFetch from "../Hooks/useFetch";
import { useAuthContext } from "../Hooks/useAuthContext";
import { Link } from "react-router-dom";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

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
      <h2 className="text-4xl font-bold text-center">Blogs</h2>

      <div className="flex flex-wrap justify-center w-100">
        <div>{result}</div>
        {error}
        {blogs.length === 0
          ? "Loading..."
          : blogs.map((blog) => {
              return (
                <div key={blog.id} className="blog">
                  <img src={blog.image} alt="" />
                  <h3 className="text-xl font-bold">{blog.title}</h3>
                  <p className="text-sm my-4">
                    <i>
                      {formatDistanceToNow(new Date(blog.datecreated), {
                        addSuffix: true,
                      })}
                    </i>
                  </p>
                  <Link className="text-sm" to={`/${blog.id}`}></Link>

                  <div key={blog._id} className="blog">
                    <img src={blog.image} alt="" />
                    <h3 className="text-xl font-bold">{blog.title}</h3>
                    <p className="text-sm my-4">
                      <i>
                        {formatDistanceToNow(
                          new Date(blog.createdAt || blog.datecreated),
                          { addSuffix: true }
                        )}
                      </i>
                    </p>
                    <Link className="text-sm" to={`/${blog._id}`}>
                      <button className="border p-2 mt-4 ">Read more</button>
                    </Link>
                    {user && !loading ? (
                      <button
                        className="delete-btn"
                        onClick={() => deletePost(blog._id)}
                      >
                        Delete
                      </button>
                    ) : (
                      user && (
                        <button className="deleting-btn">Deleting...</button>
                      )
                    )}
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Blogs;
