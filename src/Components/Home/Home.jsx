import React from 'react'
import './home.css'

const Home = () => {
  return (
    <section className='home'>
      <div className="secContainer container">

        <div className="homeText">
          
          <h1 className="title">
            Plan Your Trip With Travel Dot
          </h1>

          <p className="subTitle">
            Travel to your favourite city with respectful of the environment!
          </p>
          <button className='btn'>
            <a href="#">Explore Now</a>
          </button>
                    
        </div>

        <div className="homeCard grid">

            <div className="locationDiv">
              <label htmlFor="location">Location <br /></label>
              <input type="text" placeholder='Dream Destination'/>
            </div>

            <div className="distDiv">
              <label htmlFor="distance">Location <br /></label>
              <input type="text" placeholder='10/Meters'/>
            </div>

            <div className="priceDiv">
              <label htmlFor="price">Location <br /></label>
              <input type="text" placeholder='$250-$2500'/>
            </div>

            <button className='btn'>Search</button>

        </div>

      </div>
    </section>
  )
}

export default Home
