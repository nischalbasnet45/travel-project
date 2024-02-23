import React from "react";
import "/Users/nischalbasnet/Documents/travel-project/src/Components/Offers/offers.scss";
import { MdKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { MdAirportShuttle } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

import img from "../../Assets/singapore.jpg";

const offers = () => {
  return (
    <section className="offers container section">
      <div className="secContainer">
        <div className="secIntro"> 
          <h2 className="secTitle">Special Offers</h2>
          <p>
            From historical cities to natural spectaculars, come see the best of
            the world!
          </p>
        </div>

        <div className="mainContent grid">
          <div className="singleOffers">
            <div className="destImage">
              <img src={img} alt="Offer" />
              <span className="discount">30% Off</span>
            </div>
            <div className="offerBody">
              <div className="price flex">
                <h4>$1000</h4>
                <span className="status">For Rent</span>
              </div>

              <div className="amenities flex">
                <div className="singleAmenity flex">
                  <MdKingBed className="icon" />
                  <small>2 Beds</small>
                </div>

                <div className="singleAmenity flex">
                  <MdBathtub className="icon" />
                  <small>1 Bath tub</small>
                </div>

                <div className="singleAmenity flex">
                  <FaWifi className="icon" />
                  <small>Wi-Fi</small>
                </div>

                <div className="singleAmenity flex">
                  <MdAirportShuttle className="icon" />
                  <small>Shuttle</small>
                </div>
              </div>

              <div className="location flex">
                <MdLocationOn className="icon" />
                <small>450 Vine #310, London</small>
              </div>

              <button className="btn flex">
                View Details
                <BsArrowRightShort className="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default offers;
