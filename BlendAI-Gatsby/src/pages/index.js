import * as React from "react"

import Layout from "../components/layout"
import Intro from "../components/home/intro"
import About from "../components/home/about"
import Services from "../components/home/services"
import ProductFeed from "../components/home/productfeed"
import CreateAds from "../components/home/createads"
import MngAudiences from "../components/home/mngaudiences"
import Multipleadchannels from "../components/home/multipleadchannels"
import MeasureResults from "../components/home/measureresults"
import ProspectRetarget from "../components/home/prospectretarget"
import OurPartners from "../components/home/ourpartners"
import Pricing from "../components/home/pricing"
import RecentViews from "../components/home/recentviews"
import Contact from "../components/home/contact"



const IndexPage = () => (
  <Layout>
    <Contact></Contact>
    <Intro></Intro>
    <About></About>
    <Services></Services>
    <ProductFeed></ProductFeed>
    <CreateAds></CreateAds>
    <MngAudiences></MngAudiences>
    <Multipleadchannels></Multipleadchannels>
    <MeasureResults></MeasureResults>
    <ProspectRetarget></ProspectRetarget>
    <OurPartners></OurPartners>
    <Pricing></Pricing>
    <RecentViews></RecentViews> 
  </Layout>
)
export default IndexPage
