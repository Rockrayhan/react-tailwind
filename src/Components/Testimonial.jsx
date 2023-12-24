import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Testimonial = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
      fetch('http://localhost:8080/allreview')
          .then(res => res.json())
          .then(data => setReview(data)) ;
  }, []);
    return (
        <div className='bg-slate-200 py-16 my-10 container text-center p-6'>


            <OwlCarousel className="owl-theme owl-carousel" loop margin={1} items={3}>

                {/* Testimonial item */}
               {
                review.map( item =>      <div className='py-5 p-5 bg-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-14">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
                <div className='flex flex-col gap-6'> 
                <p className='text-gray-600'> {item.comment} </p>
                <div className='flex gap-8'>
                    <div className='w-1/5'><img className='rounded-full' src="https://images.template.net/79088/Free-Single-Person-Vector-1.jpg" alt="" /></div>
                    <div> <h1 className='text-xl font-semibold'> {item.name}  </h1> 
                        <h6 className='text-gray-600 text-lg'> {item.role} </h6>
                    </div>

                </div>
                </div>
            </div>  )
               }

            </OwlCarousel>
        </div>
    );
};

export default Testimonial;