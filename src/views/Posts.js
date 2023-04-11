import React from 'react'

const Posts = () => {
  return (     
    <div className="posts">
        <div className="post">
            <h2 className="post-title">Title of the first post</h2>
            <p className="post-author">By John Smith</p>
            <p className="post-summary">A brief summary of the first post.</p>
            <a href="#" className="post-readmore">Read More</a>
        </div>
        
        <div className="post">
            <h2 className="post-title">Title of the second post</h2>
            <p className="post-author">By Jane Doe</p>
            <p className="post-summary">A brief summary of the second post.</p>
            <a href="#" className="post-readmore">Read More</a>
        </div>
        
        <div className="post">
            <h2 className="post-title">Title of the third post</h2>
            <p className="post-author">By Bob Johnson</p>
            <p className="post-summary">A brief summary of the third post.</p>
            <a href="#" className="post-readmore">Read More</a>
        </div>
        
        <div className="post">
            <h2 className="post-title">Title of the fourth post</h2>
            <p className="post-author">By Sara Lee</p>
            <p className="post-summary">A brief summary of the fourth post.</p>
            <a href="#" className="post-readmore">Read More</a>
        </div>
    </div>
  )
}

export default Posts