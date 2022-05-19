chrome.webRequest.onBeforeRequest.addListener(
    function(details){
        return{cancel:true}
    },
    {urls:["*://*.madoummarketing.com/*", "*://*.www.brownbook.net/*"]},
    ["blocking"]
)