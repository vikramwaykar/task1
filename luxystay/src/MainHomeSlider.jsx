import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './MainHomeSlider.css';
import { Navigation } from 'swiper/modules';

function MainHomeSlider() {
  //const [images, setImages] = useState([]);

//   useEffect(() => {
//     // Replace with your actual API URL
//     const fetchImages = async () => {
//       try {
//         const response = await fetch('YOUR_API_URL_HERE');
//         const data = await response.json();
//         setImages(data); // Assuming data is an array of image URLs
//       } catch (error) {
//         console.error('Error fetching images:', error);
//       }
//     };

//     fetchImages();
//   }, []);


const images=[
    {
        image:'https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        image:'https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        image:'https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
]


  return (
    <div className='MainHomeSlider'>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.image} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MainHomeSlider;
