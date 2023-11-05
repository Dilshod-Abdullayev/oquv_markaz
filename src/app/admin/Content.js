import React from 'react'
import Create_course from './course/Create_course'
import CreatePost from './Post/CreatePost'
// import PostEdit from './Post/PostEdit'

export default function Content() {
  return (
    <div className='w-full'>
      <CreatePost />
      {/* <PostEdit/> */}
      {/* <Create_course/> */}
    </div>
  )
}
