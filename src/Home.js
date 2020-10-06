import React from 'react'
import "./Home.css"
import Banner from "./Banner";
import Card from "./Card";
function Home() {
    return (
      <div className="home">
        <Banner />
        <div className="home__cards">
          <Card
            image="https://a0.muscache.com/im/pictures/acd80ac8-d902-4d5f-848d-6e1f0d76f0b9.jpg?"
            title="Unique stays"
            description="Spaces that are mode than just a place to sleep"
          />
          <Card
            image="https://cdn.asiatatler.com/asiatatler/i/my/2020/06/30151806-marini-ramlan-2_cover_1500x1000.jpg"
            title="Online Experiences"
            description="A new way to travel from home"
          />
          <Card
            image="https://images.glaciermedia.ca/polopoly_fs/1.23929888.1567029228!/fileImage/httpImage/image.jpg_gen/derivatives/landscape_804/crescent-ext-front011204-jpg.jpg"
            title="Entire homes"
            description="Comfortable private places, with room for friends or family"
          />
        </div>
      </div>
    );
}

export default Home

// "https://a0.muscache.com/im/pictures/18084f37-67e0-400f-bfd8-55eea0e89508.jpg?im_w=1200 1x"

{/* <source srcset="https://a0.muscache.com/im/pictures/acd80ac8-d902-4d5f-848d-6e1f0d76f0b9.jpg?im_w=720 2x" media="(max-width: 743px)"> */}