import React from "react"
import ShopifyImg from "../../images/contents/shopify.png"
import MarapostImg from "../../images/contents/marapost.png"
import WoocommerceImg from "../../images/contents/woocommerce.png"


const Services = ({ data }) => (
  <div id="services" className="services-container">
    <div className="container">
      <h2>Ecommerce Platforms</h2>
      <div className="img-block">
        <img src={ShopifyImg} />
        <img src={MarapostImg} />
        <img src={WoocommerceImg} />
      </div>
      <div className="sevice-text">
        Blend connects to your store helping you measure the impact your ads are having on revenue.
      </div>
    </div>
  </div>
)

export default Services
