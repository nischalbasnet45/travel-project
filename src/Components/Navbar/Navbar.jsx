import React from 'react';
import './navbar.scss';
import {SiYourtraveldottv} from 'react-icons/si';
import {AiFillCloseCircle} from 'react-icons/ai';
import {TbGridDots} from 'react-icons/tb';

const navbar = () => {
  return (
    <section className='navBarSection'>
        <div className="header">
            <div className="logoDiv">
                <a href="#" className="logo">
                    <h1 className='flex'><SiYourtraveldottv className="icon"/>
                    Dot
                    </h1>
                </a>
            </div>

            <div className="navBar">
              <ul className="navLists flex">
                <li className="navItem">
                  <a href="#" className="navLink">Home</a>
                </li>
                <li className="navItem">
                  <a href="#" className="navLink">Products</a>
                </li>
                <li className="navItem">
                  <a href="#" className="navLink">Resources</a>
                </li>
                <li className="navItem">
                  <a href="#" className="navLink">Contacts</a>
                </li>
                <li className="navItem">
                  <a href="#" className="navLink">Blog</a>
                </li>

                <div className="headerBtns flex">
                  <button className='btn loginBtn'>
                    <a href="#">Login</a>
                  </button>
                  <button className='btn'>
                    <a href="#">Sign Up</a>
                  </button>
                </div>
              </ul>

              <div className="closeNavbar">
                <AiFillCloseCircle className="icon"/>
              </div>
            </div>

            <div className="toggleNavbar">
              <TbGridDots className="icon"/>
            </div>
          </div>
    </section>
  )
}

export default navbar
