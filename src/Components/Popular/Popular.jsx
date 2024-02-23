import React from 'react'
import './popular.css'
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'

import image1 from '../../Assets/travel1.jpg'
import image2 from '../../Assets/travel2.jpg'
import image3 from '../../Assets/travel3.jpg'
import image4 from '../../Assets/travel4.jpg'

const Data = [
  {
    id:1,
    travelSrc: image1,
    destTitle: 'Machu Pichu',
    location: 'Peru',
    grade: 'CULTURAL RELAX'
  },

  {
    id:2,
    travelSrc: image2,
    destTitle: 'Geneva',
    location: 'Switzerland',
    grade: 'CULTURAL RELAX'
  },

  {
    id:3,
    travelSrc: image3,
    destTitle: 'Venice',
    location: 'Italy',
    grade: 'CULTURAL RELAX'
  },

  {
    id:4,
    travelSrc: image4,
    destTitle: 'Seoul',
    location: 'Korea',
    grade: 'CULTURAL RELAX'
  }
]

const popular = () => {
  return (
    <section className='popular section container'>
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">
              Popular Destination
            </h2>
            <p>
              From historical cities to natural
              specteculars, come see the best of the
              world!
            </p>
          </div>
              
          <div className="iconsDiv flex">
                <BsArrowLeftShort className="icon"/>
                <BsArrowRightShort className="icon"/>
          </div>

        </div>

        <div className="mainContent grid">
          {
            Data.map((destination) => {
              const {id, travelSrc, destTitle, location, grade } = destination;
              return (
                <div className="singleDestination" key={id}>
                    <div className="destImage">
        
                      <img src={travelSrc} alt="travelling" />
        
                      <div className='overlayInfo'>
                        <h3>{destTitle}</h3>
                        <p>{location}</p>
        
                        <BsArrowRightShort className='icon'/>
        
                      </div>

                    </div>
      
                  <div className="destFooter">
                    <div className="number">
                      0{id}
                    </div>
      
                    <div className="destTest flex">
                      <h6>{location}</h6>
                      <span className='flex'>
                        <span className='dot'>
                          <BsDot className='icon'/>
                        </span>
                        Dot
                      </span>
                    </div>
      
                  </div>

                </div>
              )
            })
          }

        </div>

      </div>
    </section>
  )
}

export default popular
