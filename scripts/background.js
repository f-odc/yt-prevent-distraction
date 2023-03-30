const youtube_startpage = 'https://www.youtube.com/'
const youtube_search = 'https://www.youtube.com/results?search_query='
const youtube_watch = 'https://www.youtube.com/watch?v='

/**
 * Catch all load site events
 * Hide youtube content on web navigation (refresh)
 */
chrome.webNavigation.onCommitted.addListener(async function(tab) {
    
    // reload youtube pages
    if (tab.url === (youtube_startpage)){
        // insert CSS
        await chrome.scripting.insertCSS({
            files: ["style/youtube-style.css"],
            target: { tabId: tab.tabId },
        });
    }
    // reload youtube search
    else if (tab.url.startsWith(youtube_search)){
        await chrome.scripting.insertCSS({
            files: ["style/youtube-style.css"],
            target: { tabId: tab.tabId },
        });
    }
    // reload youtube watch
    else if (tab.url.startsWith(youtube_watch)){
        await chrome.scripting.insertCSS({
            files: ["style/youtube-style.css"],
            target: { tabId: tab.tabId },
        });
    }
    // reload youtube channel
    else if(tab.url.startsWith(youtube_startpage)){
        await chrome.scripting.insertCSS({
            files: ["style/youtube-channel.css"],
            target: { tabId: tab.tabId },
        });
    }
})

/*
var prevState = ""

// change url listener
// url change test
chrome.tabs.onUpdated.addListener(async function
    (tabId, changeInfo, tab) {
        // go to startpage
        // && tab.title == "YouTube"
        if (tab.url == youtube_startpage && tab.status == "complete"){
            var state = "start"
            // if state changes -> new action
            if (state != prevState){
                // hide recommends and abo etc.
                console.log("Start: State Change From = " + prevState)
                chrome.scripting.insertCSS({
                    files: ["style/youtube-content.css", "style/youtube-comments.css"],
                    target: { tabId: tabId },
                });
                // update tabs
                //chrome.tabs.update(tab.url, tabId)
                prevState = state
            }
        }
        // search on youtube start page
        // url matches and status = loading / complete
        if (tab.url.startsWith(youtube_search)){

            // perform for every status => content is always displayed, but -> on watch: comments are hidden
            chrome.scripting.insertCSS({
                files: ["style/youtube-comments.css"],
                target: { tabId: tabId },
            });
            chrome.scripting.removeCSS({
                files: ["style/youtube-content.css"],
                target: { tabId: tabId },
            });

            // own state
            var state = "search"
            if (state != prevState){
                console.log("Search: State Change From = " + prevState)
                // comment in -> content not always displayed, on watch: comments are always shown
                // await chrome.scripting.insertCSS({
                //     files: ["style/youtube-comments.css"],
                //     target: { tabId: tabId },
                // });
                // chrome.scripting.removeCSS({
                //     files: ["style/youtube-content.css"],
                //     target: { tabId: tabId },
                // });
                prevState = state
            }
        }
        // switch to watch
        if (tab.url.startsWith(youtube_watch) && tab.status == "complete"){
            var state = "watch"
            if (prevState != state){
                console.log("Watch: State Change From = " + prevState)
                chrome.scripting.removeCSS({
                    files: ["style/youtube-comments.css"],
                    target: { tabId: tabId },
                });
                prevState = state
            }
        }
    }
);
*/