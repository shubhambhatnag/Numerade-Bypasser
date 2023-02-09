
//BUTTON VERSION

chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, qURL } = obj;
    if (type === "numerade") {
        var element = document.getElementById('my-video_html5_api');
        var urlCode = (element.getAttribute("poster"));
        var urlCode1 = urlCode.split("/");
        //change the text of the fourth element in urlCode to "encoded"
        urlCode1[3] = "ask_video";
        //remove the last ten characters off the end of the last element and then add '.webm' to the end
        urlCode1[urlCode1.length-1] = urlCode1[urlCode1.length-1].slice(0, -10) + ".webm";
        //join the array back into a string
        var urlCode1 = urlCode1.join("/");
        chrome.runtime.sendMessage({
            type: "openURL",
            finalURL: urlCode1,
          });  

          
        var urlCode2 = urlCode.split("/");
        urlCode2[3] = "encoded";
        urlCode2[urlCode2.length-1] = urlCode2[urlCode2.length-1].slice(0, -10) + ".webm";
        var urlCode2 = urlCode2.join("/");
        chrome.runtime.sendMessage({
            type: "openURL",
            finalURL: urlCode2,
        });  
    }
});

if (window.location.hostname == "cdn.numerade.com") {
    var div = document.getElementById("webkit-xml-viewer-source-xml");
        if (div) { 
            chrome.runtime.sendMessage({
                type: "nuke",
              });  
        }
}

// AUTOMATIC VERSION

// var element = document.getElementById('my-video_html5_api');
//         var urlCode = (element.getAttribute("poster"));
//         var urlCode1 = urlCode.split("/");
//         //change the text of the fourth element in urlCode to "encoded"
//         urlCode1[3] = "encoded";
//         //remove the last ten characters off the end of the last element and then add '.webm' to the end
//         urlCode1[urlCode1.length-1] = urlCode1[urlCode1.length-1].slice(0, -10) + ".webm";
//         //join the array back into a string
//         var urlCode1 = urlCode1.join("/");
//         chrome.runtime.sendMessage({
//             type: "openURL",
//             finalURL: urlCode1,
//           });  