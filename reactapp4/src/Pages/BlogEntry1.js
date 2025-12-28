import axios from "axios";
import { useForm } from "react-hook-form";

function BlogEntry1() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data)
    blogPost(data);
  };
  const blogPost = (data) => {
    axios
      .post(
        "http://localhost/sanjida_ritu/ReactJs/reactapp4/api/blog/addBlog.php",
        data
      )
      .then(function (response) {
        alert(response.data);
      });
  };
  return (
    <div className="container">
      <h2>Blog Entry One</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("title")} defaultValue="" className="form-control" placeholder="Enter Title"/><br />
        <textarea {...register("description")} className="form-control"></textarea><br />
        <input type="submit" className="btn btn-primary" />
      </form>
     
    </div>
  );
}

export default BlogEntry1;
