import { updatePageTitle, updateFavicon } from './helper.js'

//Title
document.title = document.title.replace('\/ X', '\/ Twitter')

// Create a MutationObserver to observe changes in the page's DOM
updatePageTitle()

//Twitter Logo
const twitterLogo = browser.runtime.getURL('assets/twitterLogo.png');
const imgElement = document.createElement('img');
imgElement.src = twitterLogo;
imgElement.height = 28

var logoElement = document.querySelector('h1[role="heading"] div')
logoElement.removeChild(logoElement.firstChild)
logoElement.appendChild(imgElement)

// Change Favicon
const twitterFav = browser.runtime.getURL('assets/twitterFav.png');
updateFavicon(twitterFav)

//"Get Verified" prompt and sidebar item
var getVerifiedDiv = document.querySelector('div[data-testid="sidebarColumn"] aside[role="complementary"]')
if(getVerifiedDiv != null){
  getVerifiedDiv.parentElement.style="display: none"
}

var sideNav = document.querySelector('nav[aria-label="Primary"]')
if(sideNav != null){
  var verifiedItem = sideNav.querySelector('a[href="/i/verified-choose"]')
  if(verifiedItem != null){
    verifiedItem.style = 'display:none'
  }
}

//Side Nav
var postButtonHTML = document.querySelector('a[data-testid="SideNav_NewTweet_Button"]')
if(postButtonHTML != null){
  postButtonHTML.innerHTML = postButtonHTML.innerHTML.replace('Post','Tweet')
}