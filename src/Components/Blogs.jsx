import useFetch from "../Hooks/useFetch";
import AddBlog from "./AddBlog";

const Blogs = () => {
  const { data: blogs, error } = useFetch("https://blog-api-kiprono.onrender.com/blogs");
  console.log(blogs);

  const deletePost = async (id) => {
    try {
      const res = await fetch(`https://blog-api-kiprono.onrender.com/blogs/${id}`, {
        method: "DELETE",
      });
      const result = await res.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="blogs">
      <div className="blog-wrapper">
        <h2>Blogs</h2>
        {blogs.length === 0
          ? "No blogs to show"
          : blogs.map((blog) => {
              return (
                <div key={blog.id} className="blog">
                  <img src={blog.image} alt="" />
                  <h3>{blog.title}</h3>
                  <p>{blog.blog}</p>
                  <button onClick={() => deletePost(blog.id)}>Delete</button>
                </div>
              );
            })}
      </div>
      <AddBlog />
    </div>
  );
};

export default Blogs;
