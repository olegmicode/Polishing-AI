import * as React from "react"
import Layout from "../components/layout"
import Intro from "../components/home/intro"
import About from "../components/home/about"
import Services from "../components/home/services"
import ProductFeed from "../components/home/productfeed"
import CreateAds from "../components/home/createads"
import Pricing from "../components/home/pricing"

const IndexPage = () => (
  <Layout>
    <Intro></Intro>
    <About></About>
    <Services></Services>
    <ProductFeed></ProductFeed>
    <CreateAds></CreateAds>
    <Pricing></Pricing>
  </Layout>
)
export default IndexPage
