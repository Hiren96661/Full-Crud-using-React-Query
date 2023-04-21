import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import PostForm from './PostForm'
import {v4 as uuid4} from 'uuid'
import { createPost } from '../API/posts'

const AddPost = () => {
    const queryClient = useQueryClient ();
    // const navigate = useNavigate();
    const createPostMutation = useMutation({
        mutationFn : createPost,
        onSuccess : () => {
            queryClient.invalidateQueries({ queryKey : ["posts"] })
        }
    })

    const handleAddPost = (post) => {
        createPostMutation.mutate ({
            id : uuid4(),
            ...post
        })
    }
  return (
    <div>
        <h2> Add new Post</h2>
        <PostForm onSubmit = {handleAddPost} initialValue={{}} />
    </div>
  )
}

export default AddPost