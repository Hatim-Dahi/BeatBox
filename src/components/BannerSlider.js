import React from 'react'
import { BannerImages } from './BannerImages'
import '../styles/bannerSlider.css'
import Slider from 'react-slick';
export default function BannerSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'Banner-Slider-x',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }
    ]
  };

  return (
    <div className='bannerslider-container'>
      <Slider {...settings}>
        {
          BannerImages && BannerImages.map((img, index) => {
            return (
              <img src={img.src} alt=""  className='slider-img'/>
            )
          })
        }
      </Slider>
    </div>
  )
}
