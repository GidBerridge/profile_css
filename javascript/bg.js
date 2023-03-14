
export function bg() {
    const videos = document.querySelectorAll('video')
    for (let i = 0; i < videos.length; i++) {
        videos[i].playbackRate = 0.6
    }
}