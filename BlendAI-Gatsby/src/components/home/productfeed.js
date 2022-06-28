import React from "react"

import Shoes from "../../images/contents/group_707.png"
import Tshirt from "../../images/contents/group_709.png"
import Ruler from "../../images/contents/group_708.png"
import { GroupArrow } from "../../utils/imgImport"
import BingFrame from "../../images/contents/bing_frame_777.png"
import FbFrame from "../../images/contents/fb_frame_778.png"
import GgFrame from "../../images/contents/gg_frame_779.png"

const ProductFeed = ({ data }) => (
  <div id="productfeed" className="productfeed-container">
    <div className="d-flex container">
      <div className="left-block">
        <div className="product-img-block">
          <img src={Shoes} />
          <img src={Tshirt} />
          <img src={Ruler} />
        </div>
        <img className="arrow-img" src={GroupArrow} />
        <div className="platforms-block">
          <img src={BingFrame} />
          <img src={FbFrame} />
          <img src={GgFrame} />
        </div>
      </div>
      <div className="right-block">
        <h2>  Product Feed</h2>
        <br/>
        <div className="text-productfeed">
          howcase your products on Google, Facebook, Bing and TikTok.
        </div>
        <br/>
        <div className="text-productfeed">
          Blend integrates your store's inventory with major advertising platforms by creating a high-converting product feed. To drive even more revenue to the store we analyse your products and implement sales strategies best suited for your current inventory.
        </div>
      </div>
    </div>
  </div>
)

export default ProductFeed
