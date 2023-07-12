import React from "react"
import "./reviews.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";


const RecentViews = ({ data }) => {

    return (

        <div id="recentviews" className="recentviews-container">

            <div
                id="rec229990459"
                className="r t-rec"
                style={{ backgroundColor: "#f75c48" }}
                data-record-type="659"
                data-bg-color="#f75c48"
            >
                <div className="t659 t659__witharrows">
                    <div
                        className="t-cover"
                        id="recorddiv229990459"
                        bgimgfield="img"
                        style=
                        {{
                            height: "700px",
                            // backgroundImage: `-webkit-linear-gradient(top, #ccc, #777)`,
                            // backgroundImage: `-moz-linear-gradient(top, #ccc, #777)`,
                            // backgroundImage: `-o-linear-gradient(top, #ccc, #777)`,
                            // backgroundImage: `-ms-linear-gradient(top, #ccc, #777)`,
                            backgroundImage: `linear-gradient(top, #ccc, #777)`,
                        }}
                    >
                        <div
                            className="t-cover__carrier"
                            id="coverCarry229990459"
                            data-content-cover-id="229990459"
                            data-content-cover-bg=""
                            data-content-cover-height="700px"
                            data-content-cover-parallax=""
                            style={{ height: "700px", backgroundAttachment: "scroll" }}
                        ></div>
                        <div
                            className="t-cover__filter"
                            style={{
                                height: "700px",
                        //         backgroundImage: `-moz-linear-gradient(
                        //     top,
                        //     rgba(247, 92, 72, 1),
                        //     rgba(247, 92, 72, 1)
                        // )`,
                        //         backgroundImage: `-webkit-linear-gradient(
                        //     top,
                        //     rgba(247, 92, 72, 1),
                        //     rgba(247, 92, 72, 1)
                        // )`,
                        //         backgroundImage: `-o-linear-gradient(
                        //     top,
                        //     rgba(247, 92, 72, 1),
                        //     rgba(247, 92, 72, 1)
                        // )`,
                        //         backgroundImage: `-ms-linear-gradient(
                        //     top,
                        //     rgba(247, 92, 72, 1),
                        //     rgba(247, 92, 72, 1)
                        // )`,
                                backgroundImage: `linear-gradient(
                            top,
                            rgba(247, 92, 72, 1),
                            rgba(247, 92, 72, 1)
                        )`,
                                filter: `progid:DXImageTransform.Microsoft.gradient(startColorStr='#00f75c48', endColorstr='#00f75c48')`
                            }}
                        ></div>
                        <div className="t-slds" >
                            <div className="t-slds__main t-container">
                                <div className="t-slds__container">
                                    <div
                                        className="t-cover__wrapper t-valign_middle"
                                        data-auto-correct-mobile-width="false"
                                        style={{ height: "700px", width: "100%" }}
                                    >
                                        <div className="t659__content" data-hook-content="covercontent">
                                            <div className="t659__topsection">
                                                <div className="t-section__topwrapper t-align_center">
                                                    <div
                                                        className="t-section__title t-title t-title_xs"
                                                        field="btitle"
                                                    >
                                                        <div
                                                            style={{ fontSize: "32px", fontFamily: 'NunitoSans' }}
                                                            data-customstyle="yes"
                                                        >
                                                            {data.text}<br />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="t-slds__items-wrapper t-slds_animated-slow"
                                                data-slider-transition="500"
                                                data-slider-with-cycle="true"
                                                data-slider-correct-height="true"
                                                data-auto-correct-mobile-width="false"
                                                data-slider-timeout="4000"
                                            >

                                                <Swiper
                                                    navigation={true}
                                                    modules={[Navigation]}
                                                    spaceBetween={30}
                                                    loop={true}

                                                >
                                                    {
                                                        data.recentViewsData.map((item, idx) => (
                                                            <SwiperSlide key={`slider${idx}`}>
                                                                <div className="" data-slide-index="1">
                                                                    <div
                                                                        className="t-slds__wrapper t-align_center t-width_8 t-margin_auto"
                                                                    >
                                                                        <div
                                                                            className="t659__text t-text t-text-impact_xs"
                                                                            field="li_text__1612884709487"
                                                                            style={{
                                                                                color: "#ffffff",
                                                                                fontSize: "20px",
                                                                                fontFamily: 'NunitoSans'
                                                                            }}
                                                                        >
                                                                            {item.recommendation}<br />
                                                                        </div>
                                                                        <div
                                                                            className="t659__title t-name t-name_xs"
                                                                            field="li_title__1612884709487"
                                                                        >
                                                                            {item.name}
                                                                        </div>
                                                                        <div
                                                                            className="t659__descr t-descr t-descr_xxs"
                                                                            field="li_descr__1612884709487"
                                                                        >
                                                                            <a
                                                                                href={item.siteLink}
                                                                                style={{ color: `rgb(34, 46, 99) !important` }}
                                                                            >{item.siteName}</a><br />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </SwiperSlide>
                                                        ))
                                                    }
                                                    {/* <SwiperSlide>
                                                        <div className="" data-slide-index="1">
                                                            <div
                                                                className="t-slds__wrapper t-align_center t-width_8 t-margin_auto"
                                                            >
                                                                <div
                                                                    className="t659__text t-text t-text-impact_xs"
                                                                    field="li_text__1612884709487"
                                                                    style={{
                                                                        color: "#ffffff",
                                                                        fontSize: "20px",
                                                                        fontFamily: 'NunitoSans'
                                                                    }}
                                                                >
                                                                    Our ROI has increased, ad spend is reduced, and
                                                                    our advertising budget is being put to better
                                                                    use.<br />
                                                                </div>
                                                                <div
                                                                    className="t659__title t-name t-name_xs"
                                                                    field="li_title__1612884709487"
                                                                >
                                                                    Darren Morgan
                                                                </div>
                                                                <div
                                                                    className="t659__descr t-descr t-descr_xxs"
                                                                    field="li_descr__1612884709487"
                                                                >
                                                                    <a
                                                                        href="https://stmonline.com.au/"
                                                                        style={{ color: `rgb(34, 46, 99) !important` }}
                                                                    >STM Snow Surf Skate</a><br />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide> */}
                                                    {/* <SwiperSlide>
                                                        <div className="" data-slide-index="2">
                                                            <div
                                                                className="t-slds__wrapper t-align_center t-width_8 t-margin_auto"
                                                            >
                                                                <div
                                                                    className="t659__text t-text t-text-impact_xs"
                                                                    field="li_text__1476964743259"
                                                                    style={{
                                                                        color: "#ffffff",
                                                                        fontSize: "20px",
                                                                        fontFamily: 'NunitoSans'
                                                                    }}
                                                                >
                                                                    polish has changed the way we advertise.<br /><br />
                                                                </div>
                                                                <div
                                                                    className="t659__title t-name t-name_xs"
                                                                    field="li_title__1476964743259"
                                                                >
                                                                    Daniel Levy
                                                                </div>
                                                                <div
                                                                    className="t659__descr t-descr t-descr_xxs"
                                                                    field="li_descr__1476964743259"
                                                                >
                                                                    <a
                                                                        href="https://www.futureclassicsfurniture.com.au/"
                                                                        style={{
                                                                            fontFamily: "NunitoSans",
                                                                            fontSize: "16px",
                                                                            color: "rgb(34, 46, 99) !important"
                                                                        }}
                                                                    >
                                                                        <span style={{ fontWeight: 500 }}>Future Classic Furniture</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="" data-slide-index="3">
                                                            <div
                                                                className="t-slds__wrapper t-align_center t-width_8 t-margin_auto"
                                                            >
                                                                <div
                                                                    className="t659__text t-text t-text-impact_xs"
                                                                    field="li_text__1476964887394"
                                                                    style={{
                                                                        color: "#ffffff",
                                                                        fontSize: "20px",
                                                                        fontFamily: 'NunitoSans'
                                                                    }}
                                                                >
                                                                    I highly recommend polish for anyone wanting to
                                                                    grow sales profitably through online advertising.
                                                                </div>
                                                                <div
                                                                    className="t659__title t-name t-name_xs"
                                                                    field="li_title__1476964887394"
                                                                >
                                                                    Gavin Redelman
                                                                </div>
                                                                <div
                                                                    className="t659__descr t-descr t-descr_xxs"
                                                                    field="li_descr__1476964887394"
                                                                >
                                                                    <a
                                                                        href="https://powellsowls.com/"
                                                                        style={{ color: `rgb(34, 46, 99) !important` }}
                                                                    >
                                                                        Powell's Owls
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide> 
                                                        <div className="" data-slide-index="4">
                                                        <div
                                                            className="t-slds__wrapper t-align_center t-width_8 t-margin_auto"
                                                        >
                                                            <div
                                                                className="t659__text t-text t-text-impact_xs"
                                                                field="li_text__1612884320764"
                                                                style={{
                                                                    color: "#ffffff",
                                                                    fontSize: "20px",
                                                                    fontFamily: 'NunitoSans'
                                                                }}
                                                            >
                                                                This is an amazing service that takes the
                                                                guesswork out of online advertising!<br /><br />
                                                            </div>
                                                            <div
                                                                className="t659__title t-name t-name_xs"
                                                                field="li_title__1612884320764"
                                                            >
                                                                Heidi Krowitz
                                                            </div>
                                                            <div
                                                                className="t659__descr t-descr t-descr_xxs"
                                                                field="li_descr__1612884320764"
                                                            >
                                                                <a
                                                                    href="https://littlebitesize.com/"
                                                                    style={{ color: `rgb(34, 46, 99) !important` }}
                                                                >littlebitesize.com</a><br />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </SwiperSlide> */}
                                                </Swiper>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}
export default RecentViews
