import { useState } from "react";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [blog, setBlog] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const writtenBlog = { blog, title, image };
    const res = await fetch("http://localhost:5000/create", {
      method: "POST",
      body: JSON.stringify(writtenBlog),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();
    console.log(result);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Blog title</label>
        <input onChange={(e) => setTitle(e.target.value)} type="text" />
        <label>Blog</label>
        <textarea onChange={(e) => setBlog(e.target.value)}></textarea>
        <label>Image</label>
        <input type="text" onChange={(e) => setImage(e.target.value)} />
        <button type="submit">Add blog</button>
      </form>
    </div>
  );
};

export default AddBlog;
