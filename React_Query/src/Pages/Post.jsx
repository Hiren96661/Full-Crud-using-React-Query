import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPost } from "../API/posts";

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    isLoading,
    error,
    isError,
    data: post,
  } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => fetchPost(id),
  });
  if (isLoading) return "Loading...";
  if (error) return `An error has occurred:${error.message}`;

  return (
    <div>
      <button
        style={{
          backgroundColor: "#5f629be6",
          border: "solid black",
          margin: "15px",
          color: "white",
        }}
        onClick={() => navigate("/")}
      >
        {" "}
       {"<<<---"} back to list posts ---- {" "}
      </button>
      <div
        style={{
          backgroundColor: "#5f629be6",
          color: "white",
          border: "solid black",
          borderRadius: "15px",
          margin: "15px",
        }}
      >
        {post.title}
      </div>
      <div
        style={{
          backgroundColor: "#5f629be6",
          color: "white",
          border: "solid black",
          borderRadius: "15px",
          margin: "15px",
        }}
      >
        {post.body}{" "}
      </div>
    </div>
  );
};

export default Post;
