import React from 'react';
import './blog.css';

import {BsArrowRightShort} from "react-icons/bs";

import img1 from "../../Assets/image (1).jpg";
import img2 from "../../Assets/image (2).jpg";
import img3 from "../../Assets/image (3).jpg";
import img4 from "../../Assets/image (4).jpg";

const Posts = [
  {
    id: 1,
    postImage: img1,
    title: 'A Romantic Getaway to Paris',
    desc: 'Explore the charming streets of Paris, indulge in delectable pastries, and take a romantic boat ride along the Seine River. Discover the magic of the City of Love.'
  },
  {
    id: 2,
    postImage: img2,
    title: 'Sunset Views in Santorini',
    desc: 'Experience the breathtaking sunsets of Santorini from the iconic blue-domed churches. Immerse yourself in the beauty of the Aegean Sea and savor traditional Greek cuisine.'
  },
  {
    id: 3,
    postImage: img3,
    title: 'Tranquility in Kyoto',
    desc: 'Wander through historic temples, participate in traditional tea ceremonies, and embrace the serene beauty of Kyoto. A journey to discover the essence of Japanese culture.'
  },
  {
    id: 4,
    postImage: img4,
    title: 'Adventure in Patagonia',
    desc: 'Embark on a thrilling adventure in the wild landscapes of Patagonia. Hike through dramatic mountains, witness stunning glaciers, and connect with nature in its purest form.'
  },
];

const Blog = () => {
  return (
    <section className='blog container section'>
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">
            Our Best Blog?
          </h2>
          <p>
            An insight into the incredible experience in the world.
          </p>

          <div className="mainContainer grid">
            {Posts.map(({ id, postImage, title, desc }) => {
              return (
                <div className="singlePost grid" key={id}>
                  <div className="imgDiv">
                    <img src={postImage} alt={title} />
                  </div>

                  <div className="postDetails">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>

                  <a href="#" className='flex'>
                    <BsArrowRightShort className="icon" />
                    Read more
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
