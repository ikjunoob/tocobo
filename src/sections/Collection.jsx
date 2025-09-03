import React, { useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import "../styles/sections/collection.scss"
import collectionData from '../util/collection'
const Collection = () => {
    return (
        <div className='inner collection-inner'>
            <div className="t-wrap">
                <h2 className='tit'>TOCOBO COLLECTION</h2>
                <p className="txt">Shop By Category
                </p>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                pagination={{
                    type: 'progressbar',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
            >
                {collectionData.map((sl, i) => (

                    <SwiperSlide key={i}>

                        <a href="#">
                            <div className="info-wrap">
                                <div className="info-tit"></div>
                                <div className="name"></div>
                                <div className="k-name"></div>
                            </div>
                            <div className="img-wrap">
                                <img src={sl.image} alt="" />
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* </SwiperSlide> */}


            <a href="#" className="prev">prev</a>
            <a href="#" className="next">next</a>
        </div>
    )
}

export default Collection