var previousURL = ''
const youtube_startpage = 'https://www.youtube.com/'
const youtube_search = 'https://www.youtube.com/results?search_query='
const youtube_watch = 'https://www.youtube.com/watch?v='

/**
 * Checks if the url matches a channel url
 * @param {*} url the url to be checked
 * @returns true if url matches channel url, else false
 */
function matchesChannelURL(url){
    // youtube startpage
    if (url === youtube_startpage){
        return false
    }
    // youtube search
    else if (url.startsWith(youtube_search)){
        return false
    }
    // youtube watch
    else if (url.startsWith(youtube_watch)){
        return false
    }
    // reload youtube channel
    else if(url.startsWith(youtube_startpage)){
        return true
    }
}

/**
 * Catch all web events
 */
const observer = new MutationObserver(() => {
    var currentURL = window.location.href

    // youtube startpage
    if (currentURL === youtube_startpage){
        var url = localStorage.getItem('previousURL')
        // check if previous url is channel url
        if (matchesChannelURL(url)){
            // reset stored url
            localStorage.setItem('previousURL', "")
            // reload side
            location.reload(true)
        }
    }
    // youtube search
    else if (currentURL.startsWith(youtube_search)){
        var url = localStorage.getItem('previousURL')
        // check if previous url is channel url
        if (matchesChannelURL(url)){
            // reset stored url
            localStorage.setItem('previousURL', "")
            // reload side
            location.reload(true)
        }
    }
    // youtube watch
    else if (currentURL.startsWith(youtube_watch)){
        var url = localStorage.getItem('previousURL')
        // check if previous url is channel url
        if (matchesChannelURL(url)){
            // reset stored url
            localStorage.setItem('previousURL', "")
            // reload side
            location.reload(true)
        }
    }
    // reload youtube channel
    else if(currentURL.startsWith(youtube_startpage) && previousURL != currentURL){
        var url = localStorage.getItem('previousURL')
        // change to channel site from a different site
        if (!matchesChannelURL(url)){
            previousURL = currentURL
            // store previous url
            localStorage.setItem('previousURL', previousURL)
            location.reload(true)
        }
    }
})
// start observer
const config = { subtree: true, childList: true}
observer.observe(document, config)

