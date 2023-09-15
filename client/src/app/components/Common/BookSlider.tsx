
"use client"
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./BookSlider.css"
import Link from 'next/link';
function BookSlider() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    const images = [

        {
            link: '/user/e-library',
            text: 'E - Library',
            url: 'https://img.freepik.com/free-photo/cafe-frankfurt-germany_1268-20912.jpg?w=1380&t=st=1694501709~exp=1694502309~hmac=7f83224f5111faabb7d50d42cd90840f9d3748d5e3d95842fd203262a9989412',
        },
        {
            link: '/user/my-courses',
            text: 'Courses',
            url: 'https://img.freepik.com/free-photo/front-view-stacked-books-ladders-education-day_23-2149241046.jpg?w=1380&t=st=1694501235~exp=1694501835~hmac=eb1a74cd1fc347203949b78fc11445712e417480f18eac8b994b6264029882ed',
        },
        {
            link: '/user/my-assignments',
            text: 'Assignments',
            url: 'https://img.freepik.com/free-photo/magic-fairytale-book-concept_23-2150171884.jpg?w=1380&t=st=1694501419~exp=1694502019~hmac=a39d3d7fc8f2f9880f2fed8ff8524c621fa34f27cf861776342aadece1dd303a',
        },
        {
            link: '#',
            text: 'Fun & Quizzes',
            url: 'https://img.freepik.com/free-photo/young-woman-jumping-alone_23-2148979469.jpg?w=1380&t=st=1694501794~exp=1694502394~hmac=d2765101c58e8822583d1f7b345291e9d3e9de7e2e0bdf939a093a36952a85a0',
        }


    ];

    return (
        <>

            <div className="my-8">
                <h2 className="text-2xl font-bold mb-4">Featured Images</h2>
                <Slider {...sliderSettings} >
                    {images.map((image, index) => (
                        <Link href={image?.link} key={index} >
                            <div key={index} className="slide-container ">
                                <img src={image.url} alt={image.text} className="mx-auto custom-slider-image" />
                                <div className="slide-overlay">
                                    {image.text}
                                </div>
                            </div>
                        </Link>

                    ))}
                </Slider>
            </div>
        </>)
}

export default BookSlider