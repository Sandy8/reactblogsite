import React from 'react';

import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img src="images/p2228503.jpg" alt="" className="postImage" />
      <div className="postInfo">
          <div className="postCats">
              <span className="postcat">
                  Music
              </span>
              <span className="postcat">
                  Life
              </span>
          </div>
          <span className="postTitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
          <hr />
          <span className="postDate">
              1 hour ago
          </span>
          <p className="postDesc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt suscipit neque a venenatis. In non molestie magna. Proin ut tellus tortor. Nunc dignissim euismod ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt suscipit neque a venenatis. In non molestie magna. Proin ut tellus tortor. Nunc dignissim euismod ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          
          </p>
      </div>
    </div>
  )
}
