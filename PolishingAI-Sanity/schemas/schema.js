// documents
import home from './documents/home'
import homePageContent from './documents/homePageContent'
import homePageOptions from './documents/homePageOptions'

import privacyPolicy from './documents/privacyPolicy'
import privacyPageContent from './documents/privacyPageContent'
import privacyPageOptions from './documents/privacyPageOptions'

import termsAndConditions from './documents/termsAndConditions'
import termsPageContent from './documents/termsPageContent'
import termsPageOptions from './documents/termsPageOptions'
// import seoManage from './documents/seoManage'

// objects
import intro from './objects/intro'
import about from './objects/about'
import services from './objects/services'
import productFeed from './objects/productFeed'
import createAds from './objects/createAds'
import mngAudiences from './objects/mngAudiences'
import multipleAdchannels from './objects/multipleAdchannels'
import measureResults from './objects/measureResults'
import prospectRetarget from './objects/prospectRetarget'
import ourPartners from './objects/ourPartners'
import pricing from './objects/pricing'
import recentViews from './objects/recentViews'
import blockContent from './objects/blockContent'
import textWithTitle from './objects/textWithTitle'
import mainImage from './objects/mainImage'
import recentView from './objects/recentView'
import seoItem from './objects/seoItem'
import header from './objects/header'
import footer from './objects/footer'

// Then we give our schema to the builder and provide the result to Sanity
export default [
  // documents
  // home,
  // privacyPolicy,
  // termsAndConditions,
  homePageContent,
  privacyPageContent,
  termsPageContent,
  homePageOptions,
  privacyPageOptions,
  termsPageOptions,
  // seoManage,

  // objects
  intro,
  about,
  services,
  productFeed,
  createAds,
  mngAudiences,
  multipleAdchannels,
  measureResults,
  prospectRetarget,
  ourPartners,
  pricing,
  recentViews,
  blockContent,
  textWithTitle,
  mainImage,
  recentView,
  seoItem,
  header,
  footer,
]
