import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../Hooks/useAuthContext";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [blog, setBlog] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const { user } = useAuthContext();

  const navigate = useNavigate();

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");
    const writtenBlog = { blog, title, image };

    try {
      const res = await fetch("https://blog-api-kiprono.onrender.com/create", {
        method: "POST",
        body: JSON.stringify(writtenBlog),
        headers: {
          'Authorization':`Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();
      if (!res.ok) {
        setLoading(false);
        return setResult(result.error);
      }
      console.log(res);

      console.log(result);
      setLoading(false);
      setResult(result.message);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <div className="addblog">
      <h3>Add blog</h3>
      <form onSubmit={handleSubmit}>
        <label>Blog title</label>
        <input onChange={(e) => setTitle(e.target.value)} type="text" />
        <label>Blog</label>
        <textarea onChange={(e) => setBlog(e.target.value)}></textarea>
        <label>Image</label>
        <input type="text" onChange={(e) => setImage(e.target.value)} />
        {!loading ? (
          <button type="submit">Add blog</button>
        ) : (
          <button>Adding blog...</button>
        )}
        {result && <div className="error">{result}</div>}
      </form>
    </div>
  );
};

export default AddBlog;
