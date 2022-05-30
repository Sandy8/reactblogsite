import React from 'react';

import "./singlepost.css";
import { useLocation } from 'react-router-dom';

export default function Singlepost() {
    const location = useLocation();
    console.log(location)
  return (
    <div className="singlepost">
       <div className="singlepostWrap">
           <img src='images/p259756.jpg' alt="" className="singlepostImg" />
            <h1 className="singlepostTitle">
            Lorem ipsum dolor sit amet
            <div className="singlepostEdit">
            <i className="singlepostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlepostIcon fa-solid fa-trash-can"></i>
            </div>
            </h1>
            <div className="singlepostInfo">
                <span className="singlepostAuthor">
                    Author: <b>Sandhya Paghdar</b>
                </span>
                <span className="singlepostDate">
                    1 hour ago
                </span>
            </div>
            <p className="singlepostDesc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci in vitae qui nihil placeat culpa quisquam quidem consectetur eaque nulla rerum quos dignissimos, sunt error numquam amet ipsa. Amet, deserunt!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquam veritatis harum blanditiis ratione praesentium fugit qui velit omnis, ipsum, quaerat temporibus consequatur dignissimos, nesciunt eligendi dolorem similique magni at.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis error accusamus excepturi eveniet voluptate voluptatum, ab suscipit sed totam vero minima nulla, quo commodi. Ducimus, rerum. Consequuntur, ratione. Inventore, porro?
            </p>
       </div>
    </div>
  )
}
