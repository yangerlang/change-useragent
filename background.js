chrome.webRequest.onBeforeSendHeaders.addListener(
  function(info) {
    console.log("Cat intercepted: " + info.url);
    var objSelect = document.getElementById('useragentlist');
    for (var i = 0; i < info.requestHeaders.length; ++i) {
      if (info.requestHeaders[i].name === 'User-Agent') {
            if (localStorage.changeuseragent) {
              !function(i) {
                // chrome.storage.local.get("changeuseragent", function(callback) {
                //   info.requestHeaders[i].value = callback['changeuseragent'];
                // });
                info.requestHeaders[i].value = localStorage.getItem('changeuseragent')
              }(i)
            }
            break;
          }
      }

      return {
        "requestHeaders": info.requestHeaders
      };


  },
  // filters
  {
    urls: [
      "<all_urls>"
    ],
  },
  // extraInfoSpec
  ["blocking", "requestHeaders"]);
