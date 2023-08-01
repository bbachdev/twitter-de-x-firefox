function updatePageTitle() {
  // Function to update the page title
  function setPageTitle() {
    document.title = document.title.replace('\/ X', '\/ Twitter')
  }

  // Create a MutationObserver to observe changes in the page's DOM
  const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
      // Check if the title element is modified (e.g., by a SPA router)
      if (mutation.target === document.querySelector('title')) {
        const newTitle = mutation.target.textContent;

        // Check if the new title is different from the existing title
        if (!document.title.includes('\/ Twitter') && document.title.includes('\/ X')) {
          // Disconnect the observer before updating the title to avoid further mutations
          observer.disconnect();
          setPageTitle(newTitle);
          // Reconnect the observer after updating the title
          observer.observe(document.querySelector('title'), {
            subtree: true,
            characterData: true,
            childList: true,
          });
          //"Get Verified" prompt and sidebar item'
          console.log("Get Verified")
          var getVerifiedDiv = document.querySelector('div[data-testid="sidebarColumn"] aside[role="complementary"]')
          if(getVerifiedDiv != null){
            console.log("Change")
            getVerifiedDiv.parentElement.style="display: none"
          }

          console.log("Sidebar")
          var sideNav = document.querySelector('nav[aria-label="Primary"]')
          if(sideNav == null){
            return
          }
          var verifiedItem = sideNav.querySelector('a[href="/i/verified-choose"]')
          if(verifiedItem != null){
            verifiedItem.style = 'display:none'
          }
        }
      }
    });
  });

  // Start observing changes to the DOM, targeting the <title> element
  observer.observe(document.querySelector('title'), {
    subtree: true,
    characterData: true,
    childList: true,
  });
}

function updateFavicon(newFaviconUrl) {
  const head = document.head || document.getElementsByTagName('head')[0];

  // Remove any existing favicon link elements
  const existingFavicons = head.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
  existingFavicons.forEach((favicon) => favicon.remove());

  // Create a new favicon link element
  const faviconLink = document.createElement('link');
  faviconLink.type = 'image/x-icon';
  faviconLink.rel = 'icon';
  faviconLink.href = newFaviconUrl;

  // Append the new favicon link element to the <head> section
  head.appendChild(faviconLink);
}

export { updatePageTitle, updateFavicon }