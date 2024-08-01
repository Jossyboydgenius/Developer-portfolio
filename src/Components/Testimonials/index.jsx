import React, {useRef} from 'react'
import "./Testimonials.css"
import Slider from 'react-slick'
import { clients } from '../../sources'
import { FaStar } from 'react-icons/fa6'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'

const Testimonials = () => {
  const ref = useRef(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    pauseOnHover: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <section id='testimonials'>
      <div className="wrapper">
        <div className="section-header">
          <h1 className="heading-1">
            <span className="gradient-text">Testimonials</span>
          </h1>
          <h4 className="sub-title">What my clients are saying</h4>
        </div>
        <Slider {...settings} className='testimonials-container' ref={ref}>
          {
            clients.map((list, index) => (
              <React.Fragment key = {index}>
              <div className="flex">
                <div className="profile">
                  <img src={list.image} alt={list.name} />
                </div>
                <div className="details">
                  <h3 className="name">{list.name}</h3>
                  <small className="muted">CEO of First Bank</small>
                </div>
              </div>
              <p className="p muted content">{list.review}</p>
                <div className="stars-container">
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>
              </React.Fragment>
            ))
          }
        </Slider>
        <div className="flex-center buttons-container">
          <button 
          className="flex-center btn"
          onClick={() => ref.current.slickPrev()}
          >
            <FaLongArrowAltLeft/>
          </button>
          <button 
          className="flex-center btn"
          onClick={() => ref.current.slickNext()}
          >
            <FaLongArrowAltRight/>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
