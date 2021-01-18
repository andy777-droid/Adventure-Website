import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check Out These Epic Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ui className="cards__items">
            <CardItem
              src="/images/img-1.jpg"
              text="Experience Some Of The Most Amazing Sunsets"
              label="Views"
              path="/services"
            />

            <CardItem
              src="/images/img-2.jpg"
              text="Visit The Beautiful Beaches Of Bali"
              label="Beaches"
              path="/services"
            />
          </ui>

          <ui className="cards__items">
            <CardItem
              src="/images/img-3.jpg"
              text="Take A Cruise In The Deep Oceans Of Bali"
              label="Mystery"
              path="/services"
            />

            <CardItem
              src="/images/img-4.jpg"
              text="Visit Some Of Our Activity Islands"
              label="Activities"
              path="/services"
            />

            <CardItem
              src="/images/img-7.jpg"
              text="Walk The Amazing Trials Of Bali Island"
              label="Hiking"
              path="/services"
            />
          </ui>
        </div>
      </div>

      <h1>Looking For Something More Fun?</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ui className="cards__items">
            <CardItem
              src="/images/img-8.jpg"
              text="Go For A Trail Run Thru The Moantains"
              label="Exercise"
              path="/services"
            />
            <CardItem
              src="/images/img-9.jpg"
              text="Play Some Volleybal On The Beaches Of Bali"
              label="Sports"
              path="/services"
            />

            <CardItem
              src="/images/img-11.jpeg"
              text="We Offer Both Fly Fishing And Deep Sea Fishing At Bali"
              label="Sports"
              path="/services"
            />
          </ui>

          <ui className="cards__items">
            <CardItem
              src="/images/img-10.jpg"
              text="Go For A Quad Bike Spin In The Dunes Of Bali"
              label="Driving"
              path="/services"
            />

            <CardItem
              src="/images/img-6.jpeg"
              text="Go For A Surfing Session On The Waves Of Bali"
              label="Sports"
              path="/services"
            />

            <CardItem
              src="/images/img-5.jpg"
              text="Take Your Moantain Bike And Ride The Tracks Of Bali"
              label="Sports"
              path="/services"
            />
          </ui>
        </div>
      </div>
    </div>
  );
}

export default Cards;
