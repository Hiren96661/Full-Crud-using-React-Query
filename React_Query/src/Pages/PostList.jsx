import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { deletePost, fetchPosts } from '../API/posts'
import AddPost from '../Component/AddPost'

const PostList = () => {
  const queryClient = useQueryClient ();
  const navigate = useNavigate();
  const { isLoading, error, isError, data : posts } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts
  })
  
  const deletePostMutation = useMutation({
    mutationFn : deletePost,
    onSuccess : () => {
      queryClient.invalidateQueries({ queryKey : ["posts"] })
    }
  })
  
  const handleDelete = (id) => {
    deletePostMutation.mutate(id)
  }
  if (isLoading) return 'Loading...'
  if (error) return (`An error has occurred:${error.message}`)

  return (
    <div>
      <AddPost />
      {posts?.map((post) => {
        return (
          <>
            <div key={post.id} style={{ cursor: "pointer", backgroundColor: "#5f629be6", color: "white", border: "solid black", borderRadius: "15px", margin : "15px" }}>
              <h4 onClick={()=>navigate(`post/${post.id}`)}> Title : {post.title} </h4>
            </div>

            <button 
            style={{
              backgroundColor: "#5f629be6",
              border: "solid black",
              margin: "15px",
              width: "100px",
              color: 'white'
            }} 
            onClick={()=>navigate(`post/${post.id}/edit`)}
            > Edit </button>

            <button onClick={()=> handleDelete(post.id)}
             style={{
              backgroundColor: "#5f629be6",
              border: "solid black",
              margin: "15px",
              width: "100px",
              color: 'white'
            }}> Delete </button>

          </>
        )
      })}
    </div>
  )
}

export default PostList