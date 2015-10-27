// Set RTC options.
var rtcOpts = {
    room: 'test-room',
    signaller: 'https://switchboard.rtc.io'
};
// call RTC module
var rtc = RTC(rtcOpts);
// A div element to show our local video stream
var localVideo = document.getElementById('l-video');
// A div element to show our remote video streams
var remoteVideo = document.getElementById('r-video');
// A contenteditable element to show our messages
var messageWindow = document.getElementById('messages');

// Bind to events happening on the data channel
function bindDataChannelEvents(id, channel, attributes, connection) {

    // Receive message
    channel.onmessage = function(evt) {
        messageWindow.innerHTML = evt.data;
    };

    // Send message
    messageWindow.onkeyup = function() {
        channel.send(this.innerHTML);
    };
}

// Start working with the established session
function init(session) {
    session.createDataChannel('chat');
    session.on('channel:opened:chat', bindDataChannelEvents);
}

// Display local and remote video streams
var crel = require('crel');

// ensure we have a style tag that tells the video renderer what size it should be
// document.body.appendChild(crel('style', [
//   'body { margin: 0px; width: 100vw; height: 100vh; overflow: hidden }',
//   'body > * { width: 100%; height: 100%; object-fit: contain }'
// ].join('\n')));
localvideo.appendChild(crel('style', ['body { margin: 0px; width: 200vw; height: 200vh; overflow: hidden }', 'body > * { width: 200%; height: 200%; object-fit: contain }'].join('\n')));
localVideo.appendChild(rtc.local);
remoteVideo.appendChild(rtc.remote);


// Detect when RTC has established a session
rtc.on('ready', init);
