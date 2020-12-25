

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("Received message: " + request.action);
        if (request.action == "getVideoSrc") {
            var videoSrc = decodeURIComponent($('video.video').attr('src'));
            sendResponse({videoSrc: videoSrc});
        } else if (request.action == 'onPlayback') {
            $('video')[0].pause();
        } else {
            console.log('Unknown action: ' + request.action);
        }
    }
);
