import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const BlogDetails = () => {
  const { id } = useParams();

  const { data: blog, error } = useFetch(
    `https://blog-api-kiprono.onrender.com/blogs/${id}`
  );

  return (
    <div className="max-w-7xl m-auto  p-6">
      {error}
      
      <div className="">
        <p className="text-sm">
          <i>
     
          </i>
        </p>
        <img className="w-96" src={blog.image} alt="" />
        <h1 className="text-2xl font-bold">{blog.title}</h1>
        <p className="text-sm">{blog.blog}</p>
      </div>
  
    </div>
  );
};

export default BlogDetails;
