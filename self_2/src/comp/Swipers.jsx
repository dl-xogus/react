import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { NavLink } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/Swipers.scss';

function Swipers() {
  return (
    <Swiper
      slidesPerView="auto"
      centeredSlides={true}
      spaceBetween={100}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      // loop={true}
      // loopAdditionalSlides={10}
      // loopedSlides={3}
      className="mySwiper"
    >
      <SwiperSlide className='mySlide'>
        <NavLink to="/aboutme">
          <figure>
            <img src="./imgs/img-self2-1.jpg" alt="" />
            <figcaption>
              <p className='title'>Mountains</p>
              <p className='detail'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma.</p>
            </figcaption>
          </figure>
        </NavLink>
      </SwiperSlide>

      <SwiperSlide className='mySlide'>
        <NavLink to="/aboutme">
          <figure>
            <img src="./imgs/img-self2-2.jpg" alt="" />
            <figcaption>
              <p className='title'>Beautiful Flowers</p>
              <p className='detail'>Lorem ipsum dolor sit amet consectetur. Purus ultrices etiam etiam amet volutpat nullam. Aliquam fringilla volutpat magna rhoncus tellus purus interdum. Quis adipiscing in rhoncus adipiscing dui suspendisse pulvinar. Mi diam egestas laoreet risus diam.</p>
            </figcaption>
          </figure>
        </NavLink>
      </SwiperSlide>

      <SwiperSlide className='mySlide'>
        <NavLink to="/aboutme">
          <figure>
            <img src="./imgs/img-self2-3.jpg" alt="" />
            <figcaption>
              <p className='title'>Rivers</p>
              <p className='detail'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma</p>
            </figcaption>
          </figure>
        </NavLink>
      </SwiperSlide>
    </Swiper>
  )
}

export default Swipers