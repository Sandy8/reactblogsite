import React from 'react';
import {Link} from 'react-router-dom';
import "./post.css";

export default function Post({ post }) {
  return (
    <div className="post">
      {post.photo && (
        <img src={post.photo} alt="" className="postImage" />
      )}

      <div className="postInfo">
        <div className="postCats">
          {
          post.categories.map(c=> (
          <span className="postcat">
            {c.name}
          </span>
          ))}
          <span className="postcat">
            Life
          </span>
        </div>
        <Link to={`/post/${post._id}`} className='link' > 
        <span className="postTitle">
          {post.title}
        </span>
        </Link>
        
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
        <p className="postDesc">
          {post.desc}
        </p>
      </div>
    </div>
  )
}
