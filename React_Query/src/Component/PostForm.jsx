import React, { useState } from 'react'

const PostForm = ({onSubmit, initialValue}) => {
    const [post, setPost] = useState({
        title: initialValue.title || "",
        body: initialValue.body || ""
    })
    const handleChange = (e) => {
        setPost({
            ...post, [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(post)
        setPost({
            title: "",
            body: ""
        })
    }
    const renderField = (label) => (
        <div>
            <label> {label} </label>
            <input onChange={handleChange} type="text" name={label.toLowerCase()} value={post[label.toLowerCase()]} />

        </div>
    )

    return (
        <>
            <form onSubmit={handleSubmit}>
                {renderField("Title")}
                {renderField("Body")}
                <button type='submit'> Submit </button>
            </form>
        </>
    )
}

export default PostForm
