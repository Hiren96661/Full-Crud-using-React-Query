
import './App.css'
import {Route,Routes} from 'react-router-dom'
import PostList from './Pages/PostList'
import Post from './Pages/Post'
import EditPost from './Pages/EditPost'
function App() {

  return (
    <>
      <h1>React Query </h1>
      <Routes>
          <Route path='/' element={<PostList/>}/>
          <Route path='post/:id' element={<Post/>}/>
          <Route path='post/:id/edit' element={<EditPost/>}/>
      </Routes>
    </>
  )
}

export default App
