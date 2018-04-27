var player;
function onYouTubeIframeAPIReady() {
        player = new YT.Player('video-placeholder', {
        videoId: 'zKlSGE7jr8c',
        playerVars: {
        color: 'white',
        playlist: 'DMOmT4DXMHc,kq4BrPS6APU,rcuWt2lGwlY',
        showinfo: '1',
        rel:'0',
        },
        events: {
            onReady: initialize
        }
    });
}
             
function initialize(){
    // Update the controls on load
        updateTimerDisplay();
        updateProgressBar();
    // Clear any old interval.
        clearInterval(time_update_interval);
    // Start interval to update elapsed time display and
    // the elapsed part of the progress bar every second.
        time_update_interval = setInterval(function () {
        updateTimerDisplay();
        updateProgressBar();
    }, 1000)
}

$('#next').on('click', function () {
    player.nextVideo()
});

$('#prev').on('click', function () {
    player.previousVideo()
});
