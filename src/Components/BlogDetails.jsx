import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const BlogDetails = () => {
  const { id } = useParams();

  const { data: blog, error } = useFetch(
    `https://blog-api-kiprono.onrender.com/blogs/${id}`
  );

  return (
    <div className="max-w-7xl m-auto  p-6">
      {error}
      {blog.map((b) => {
        return (
          <div key={b.id}>
            <p className="text-sm"><i>{formatDistanceToNow(new Date(b.datecreated), {addSuffix:true})}</i></p>
            <img className="w-96" src={b.image} alt="" />
            <h1 className="text-2xl font-bold">{b.title}</h1>
            <p className="text-sm">{b.blog}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogDetails;
