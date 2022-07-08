import * as React from "react"
import { graphql } from "gatsby"

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



const IndexPage = ({ data }) => {
  
  const sections = data?.allSanityHome.nodes[0].sections;

  return (
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
}
export default IndexPage

export const query=graphql`
query Home {
  allSanityHome {
    nodes {
      sections {
        ... on SanityAbout {
          _key
          _type
          title
          text
          deviceImage {
            asset {
              gatsbyImageData
            }
          }
          overviewImage {
            asset {
              gatsbyImageData
            }
          }
          statusImage {
            asset {
              gatsbyImageData
            }
          }
        }
        ... on SanityCreateAds {
          _key
          _type
          title
          bottomText
          text
          bgImage {
            asset {
              gatsbyImageData
            }
          }
          blockText {
            _type
            children {
              text
              _type
            }
          }
          productImage {
            asset {
              gatsbyImageData
            }
          }
        }
        ... on SanityIntro {
          _key
          _type
          ProductImages {
            asset {
              gatsbyImageData
            }
            _type
          }
          bannerSubText
          title
          blockText {
            _type
            children {
              text
              _type
            }
          }
          mainProductImage {
            asset {
              gatsbyImageData
            }
          }
        }
        ... on SanityMeasureResults {
          _key
          _type
          bottomText
          text
          title
          blockText {
            children {
              text
              _type
            }
            _type
          }
          chartImage {
            asset {
              gatsbyImageData
            }
          }
        }
        ... on SanityMngAudiences {
          _key
          _type
          text
          title
          bottomText
          blockText {
            children {
              text
              _type
            }
            _type
          }
          cardImage {
            asset {
              gatsbyImageData
            }
          }
        }
        ... on SanityMultipleAdchannels {
          _key
          _type
          title
          text
          adCardImages {
            _type
            asset {
              gatsbyImageData
            }
          }
          blockText {
            children {
              text
              _type
            }
          }
          overImage {
            asset {
              gatsbyImageData
            }
          }
        }
        ... on SanityOurPartners {
          _key
          _type
          title
          text
          blockText {
            _type
            children {
              text
              _type
            }
          }
          partnerImages {
            asset {
              gatsbyImageData
            }
            _type
          }
        }
        ... on SanityPricing {
          _key
          _type
          text
          title
          blockText {
            _type
            children {
              text
              _type
            }
          }
        }
        ... on SanityProductFeed {
          _key
          _type
          title
          text
          productImages {
            asset {
              gatsbyImageData
            }
          }
          adImages {
            asset {
              gatsbyImageData
            }
          }
          blockText {
            _type
            children {
              text
              _type
            }
          }
        }
        ... on SanityProspectRetarget {
          _key
          _type
          bottomText
          text
          title
          blockText {
            _type
            children {
              text
              _type
            }
          }
        }
        ... on SanityRecentViews {
          _key
          _type
          title
          text
          blockText {
            _type
            children {
              text
              _type
            }
          }
        }
        ... on SanityServices {
          _key
          _type
          title
          text
          bannerSubText
          platformImages {
            asset {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
}

`