// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'


// import home from "./home";
// import footer from './sections/footer'

// documents
import home from './documents/home'
// import privacyPolicy from './documents/privacyPolicy'
// import termsAndConditions from './documents/termsAndConditions'
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




// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([

    // documents
    home,
    // privacyPolicy,
    // termsAndConditions,
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
    seoItem
  ]),
})
