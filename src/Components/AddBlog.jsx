import { useState } from "react";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [blog, setBlog] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState("")

  const handleSubmit = async (e) => {
    setLoading(true)
    setResult("")
    e.preventDefault();
    const writtenBlog = { blog, title, image };
    const res = await fetch("https://blog-api-kiprono.onrender.com/create", {
      method: "POST",
      body: JSON.stringify(writtenBlog),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    setLoading(false)
    setResult(result.message)

    console.log(result);
  };
  return (
    <div>
      <h3>Add blog</h3>
      <form onSubmit={handleSubmit}>
        <label>Blog title</label>
        <input onChange={(e) => setTitle(e.target.value)} type="text" />
        <label>Blog</label>
        <textarea onChange={(e) => setBlog(e.target.value)}></textarea>
        <label>Image</label>
        <input type="text" onChange={(e) => setImage(e.target.value)} />
        {!loading ? 
        <button type="submit">Add blog</button> : <button>Adding blog...</button> }
        <div>{result}</div>
      </form>
    </div>
  );
};

export default AddBlog;
