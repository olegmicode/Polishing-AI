import React from "react"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

const RecentViews = ({ data }) => (
    <div id="recentviews" className="recentviews-container">
        <div className="container">
            <div className="slider-block">
                <div className="main-title">
                    Most recent reviews
                </div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div>
                            Our ROI has increased, ad spend is reduced, and our advertising budget is being put to better use.
                        </div>
                        <di>
                            Darren Morgan
                        </di>
                        <div>
                            STM Snow Surf Skate
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>Blend has changed the way we advertise.</div>
                        <div>
                            Daniel Levy
                        </div>
                        <div>Future Classic Furniture</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div> I highly recommend Blend for anyone wanting to grow sales profitably through online advertising. </div>
                        <div> Gavin Redelman</div>
                        <div>Powell's Owls </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>This is an amazing service that takes the guesswork out of online advertising!</div>
                        <div>Heidi Krowitz</div>
                        <div>littlebitesize.com</div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>
    </div>
)

export default RecentViews
