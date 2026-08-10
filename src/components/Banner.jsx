import React from 'react'
import Container from './Container'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BannerImg from "../assets/BannerImg.jpg"
import { MdKeyboardArrowRight } from "react-icons/md";


const SlickSlider = Slider?.default ?? Slider;

const Banner = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div>
        <ul className='absolute bottom-8 left-[50%] translate-x-[-50%]'> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className='size-3.5 rounded-full bg-[#828282] dots'>
      </div>
    ),
};


return (
  <>
    <Container>
      <div className='flex mb-38.5'>
        <div className='w-[20%] border-r'>
          <ul className='space-y-4 pt-10 pb-10 text-[16px] w-54.25'>
            <li className='flex justify-between items-center'>Woman’s Fashion <span className='text-2xl'><MdKeyboardArrowRight /></span></li>
            <li className='flex justify-between items-center'>Men’s Fashion <span className='text-2xl'><MdKeyboardArrowRight /></span></li>
            <li className='flex justify-between items-center'>Electronics <span className='text-2xl'><MdKeyboardArrowRight /></span></li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Health & Beauty</li>
            <li>Groceries </li>
          </ul>
        </div>
        <div className='w-[80%] mt-10 pl-12'>
          <div>
            <SlickSlider {...settings}>
              <div className='w-full'>
                <img src={BannerImg} alt="" />
              </div>
              <div className='w-full'>
                <img src={BannerImg} alt="" />
              </div>
              <div className='w-full'>
                <img src={BannerImg} alt="" />
              </div>


            </SlickSlider>
          </div>
        </div>

      </div>
    </Container>
  </>
)
}

export default Banner
