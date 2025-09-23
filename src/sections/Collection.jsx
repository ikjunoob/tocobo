import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../styles/sections/collection.scss";
import collectionData from '../util/collection';

const Collection = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null); // swiper 인스턴스를 담을 ref

    useEffect(() => {
        // swiper 인스턴스와 버튼 ref가 모두 준비되었을 때 실행
        if (swiperRef.current && prevRef.current && nextRef.current) {
            // swiper 설정에 커스텀 버튼 DOM 요소를 연결
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            // swiper 네비게이션을 업데이트하여 버튼을 활성화
            swiperRef.current.navigation.update();
        }
    }, []);

    return (
        <div className='inner collection-inner'>
            <div className="t-wrap">
                <h2 className='tit'>TOCOBO <br /> COLLECTION</h2>
                <p className="txt">Shop By Category</p>
            </div>
            <Swiper
                className='collection-slider'
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                pagination={{
                    type: 'progressbar',
                    // el을 지정하지 않으면 기본 클래스인 '.swiper-pagination'를 찾습니다.
                }}
                // onSwiper 콜백을 통해 swiper 인스턴스를 ref에 할당
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Pagination, Navigation]}
            >
                {collectionData.map((sl, i) => (
                    <SwiperSlide key={i}>
                        <a href="#">
                            <div className="info-wrap">
                                <div className="info-tit">{sl.title}</div>
                                <div className="name">{sl.name}</div>
                                <div className="k-name">{sl.kname}</div>
                            </div>
                            <div className="img-wrap">
                                <img src={sl.image} alt={sl.name} />
                            </div>
                        </a>
                    </SwiperSlide>
                ))}

                {/* pagination이 렌더링될 DOM 요소를 추가해야 합니다. */}
                <div className="swiper-pagination"></div>
            </Swiper>

            {/* stray </SwiperSlide> 주석을 제거했습니다. */}

            {/* <a> 태그 대신 <button> 태그 사용을 권장합니다. */}
            <button type="button" className="prev" ref={prevRef} aria-label="이전 컬렉션 보기"></button>
            <button type="button" className="next" ref={nextRef} aria-label="다음 컬렉션 보기"></button>
        </div>
    );
}

export default Collection;