var player;
function onYouTubeIframeAPIReady() {
        player = new YT.Player('video-placeholder', {
        videoId: 'DLWxtiaG4sE',
        playerVars: {
        color: 'white',
        playlist: '4cn9rnoeyBQ,Q1p3DkT7GLA,F-Ru9c0t32o,q9XoKVAS4UU,jEQCqmFYF-0,xKgFJ5uMZ-Y,At0nbz4CkU8,_gk6lzNYW0c,-_UVqWNyEaw,hH90F_kAUkI,F0l-kes3kwo,basfXuVGwgI',
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
