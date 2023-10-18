import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          I had a wonderful experience with rent a car services. From booking to vehicle return, it was a hassle-free process. They offer an impressive range of well-maintained cars, and their exceptional customer service truly sets them apart. The clean and well-conditioned car made my journey comfortable and worry-free. I highly recommend [Your Company Name] for reliable and top-quality car rentals, and I'll be returning for all my future needs.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Alice Smith</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          I'm extremely satisfied with rent a car services. The process, from booking a car to returning it, was smooth. Their fleet of well-maintained vehicles and their dedication to providing excellent service make every journey remarkable. Whether for business or leisure, they aim to make your trips unforgettable. Their reliability and personal touch added to my travel experience. With rent a car services, you can trust that every ride will be smooth, comfortable, and memorable. I confidently explore the roads, knowing that they are my premier car rental service.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Bob Johnson</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          My experience with rent a car services has been exceptional. The process, from booking to returning the vehicle, was seamless. They offer a diverse range of well-maintained cars, and their commitment to convenience and excellence truly sets them apart. Every journey with them is remarkable, whether for business or leisure. I'm proud of their reliability and the personal touch they add to the travel experience. With them, I trust that every ride will be smooth, comfortable, and memorable. I confidently explore the roads, knowing that rent a car services is my premier car rental choice.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Eva Williams</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Rent a car services has exceeded my expectations. From the booking process to vehicle return, it was a hassle-free experience. They offer a wide range of well-maintained cars, and their dedication to providing convenience and excellence ensures that every journey is exceptional. Whether for business or leisure, their mission is to make your trips unforgettable. I appreciate their reliability and the personal touch they add to the travel experience. With rent a car services, you can trust that every ride will be smooth, comfortable, and memorable. I confidently explore the roads, knowing that they are my premier car rental service.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">David Brown</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
