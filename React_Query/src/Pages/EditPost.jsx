import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { fetchPost, updatePost } from '../API/posts';
import PostForm from '../Component/PostForm'

const EditPost = () => {
    const queryClient = useQueryClient ();
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

    const updatePostMutation = useMutation({
        mutationFn : updatePost,
        onSuccess : () => {
            queryClient.invalidateQueries({ queryKey : ["posts"] })
            navigate("/")
        }
    })

    if (isLoading) return "Loading...";
    if (error) return `An error has occurred:${error.message}`;
    const handleSubmit = (updatedPost) => {
        updatePostMutation.mutate({id,...updatedPost})
    }
  return (
    <div>
        <PostForm onSubmit={handleSubmit} initialValue={post} />
    </div>
  )
}

export default EditPost