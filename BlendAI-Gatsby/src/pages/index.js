import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"

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
// import Contact from "../components/home/contact"
import Seo from "../components/seo"



const IndexPage = ({ data }) => {

  const sections = data?.allSanityHomePageContent.nodes[0].sections;
  const seoDatas = data?.allSanityHomePageOptions.nodes[0];

  const selectSection = (sectionData) => {
    switch (sectionData._type) {
      case "header":
        return <Header headerLogo={sectionData?.logoImage.asset} />
      case "intro":
        return <Intro data={sectionData}></Intro>
      case "about":
        return <About data={sectionData}></About>
      case "services":
        return <Services data={sectionData}></Services>
      case "productFeed":
        return <ProductFeed data={sectionData}></ProductFeed>
      case "createAds":
        return <CreateAds data={sectionData}></CreateAds>
      case "mngAudiences":
        return <MngAudiences data={sectionData}></MngAudiences>
      case "multipleAdchannels":
        return <Multipleadchannels data={sectionData}></Multipleadchannels>
      case "measureResults":
        return <MeasureResults data={sectionData}></MeasureResults>
      case "prospectRetarget":
        return <ProspectRetarget data={sectionData}></ProspectRetarget>
      case "ourPartners":
        return <OurPartners data={sectionData}></OurPartners>
      case "pricing":
        return <Pricing data={sectionData}></Pricing>
      case "recentViews":
        return <RecentViews data={sectionData}></RecentViews>
      case "footer":
        return <Footer footerLogo={sectionData?.logoBlackImage.asset}></Footer>
      default:
        break;
    }
  }

  return (
    <Layout>
      <Seo seoData={seoDatas.seo} seoImageData={seoDatas.seoImage}></Seo>
      {
        sections.map((item, idx) => (
          <div key={idx}>
            {selectSection(item)}
          </div>
        ))
      }
    </Layout>
  )
}
export default IndexPage

export const query = graphql`
query Home {
  allSanityHomePageContent {
    nodes {
      sections {
        ... on SanityAbout {
          _type
          text
          title
          deviceImage {
            _type
            asset {
              gatsbyImageData
            }
          }
          dotImage {
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
          bottomText
          text
          title
          handImage {
            asset {
              gatsbyImageData
            }
          }
          productImage {
            asset {
              gatsbyImageData
            }
          }
          vector3Image {
            asset {
              gatsbyImageData
            }
          }
        }
        ... on SanityFooter {
          _key
          _type
          logoBlackImage {
            asset {
              gatsbyImageData
            }
          }
        }
        ... on SanityHeader {
          _key
          _type
          logoImage {
            asset {
              gatsbyImageData
            }
          }
        }
        ... on SanityIntro {
          _key
          _type
          bannerSubText
          ProductImages {
            asset {
              gatsbyImageData
            }
          }
          Product2Images {
            asset {
              gatsbyImageData
            }
          }
          Product3Images {
            asset {
              gatsbyImageData
            }
          }
          Product4Images {
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
          frametImages {
            asset {
              gatsbyImageData
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
          blockText {
            _type
            children {
              text
              _type
            }
          }
          characterWimage {
            asset {
              gatsbyImageData
            }
          }
          chartImage {
            asset {
              gatsbyImageData
            }
          }
          signupEnableImage {
            asset {
              gatsbyImageData
            }
          }
          signupHoverImage {
            asset {
              gatsbyImageData
            }
          }
        }
        ... on SanityMngAudiences {
          _key
          _type
          bottomText
          text
          blockText {
            _type
            children {
              text
              _type
            }
          }
          cardImage {
            asset {
              gatsbyImageData
            }
          }
          character1minImage {
            asset {
              gatsbyImageData
            }
          }
          signupEnableImage {
            asset {
              gatsbyImageData
            }
          }
          signupHoverImage {
            asset {
              gatsbyImageData
            }
          }
          vector4Image {
            asset {
              gatsbyImageData
            }
          }
        }
        ... on SanityMultipleAdchannels {
          _key
          _type
          text
          adCardImages {
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
          line6Image {
            asset {
              gatsbyImageData
            }
          }
          line7Image {
            asset {
              gatsbyImageData
            }
          }
          line8Image {
            asset {
              gatsbyImageData
            }
          }
          overImage {
            asset {
              gatsbyImageData
            }
          }
          vector3BlueImage {
            asset {
              gatsbyImageData
            }
          }
          vector3Image {
            asset {
              gatsbyImageData
            }
          }
        }
        ... on SanityOurPartners {
          _key
          _type
          text
          blockText {
            children {
              text
              _type
            }
            _type
          }
          partnerImages {
            asset {
              gatsbyImageData
            }
          }
        }
        ... on SanityPricing {
          _key
          _type
          text
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
          text
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
          groupArrowImage {
            asset {
              gatsbyImageData
            }
          }
          productImages {
            asset {
              gatsbyImageData
            }
          }
        }
        ... on SanityProspectRetarget {
          _key
          _type
          bottomText
          text
          blockText {
            _type
            children {
              text
              _type
            }
          }
          shoppingMin2Image {
            asset {
              gatsbyImageData
            }
          }
        }
        ... on SanityRecentViews {
          _key
          _type
          text
          recentViewsData {
            name
            recommendation
            siteLink
            siteName
          }
        }
        ... on SanityServices {
          _key
          _type
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
  allSanityHomePageOptions {
    nodes {
      seoImage {
        asset {
          gatsbyImageData
        }
      }
      seo {
        focus_keyword
        focus_synonyms
        meta_description
        seo_title
      }
    }
  }
}

`
