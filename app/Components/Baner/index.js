import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
    return (
        <div className='relative'>

            <Carousel
                autoPlay
                infiniteLoop
                showIndicators={false}
                showThumbs={false}
                showStatus={false}
                interval={3000}
            >
                <div>
                    <img src={"https://m.media-amazon.com/images/I/71aQ3u78A3L._SX3000_.jpg"} loading="lazy" />
                </div>
                <div>
                    <img src={"https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"} loading="lazy" />
                </div>

                <div>
                    <img src={"https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"} loading="lazy" />
                </div>
                <div>
                    <img src={"https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"} loading="lazy" />
                </div>
                <div>
                    <img src={"https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg"} loading="lazy" />
                </div>
                <div>
                    <img src={"https://m.media-amazon.com/images/I/71dbxIcDioL._SX3000_.jpg"} loading="lazy" />
                </div>
            </Carousel>
        </div>
    )
}

export default Banner