const getRSSFeed = require('./rss-parser')
const { convertISODateToAEST } = require('./format-iso-date-to-AEST')

/**
 * get payload
 * @param order should be string or null
 * @returns
 */
async function getPayload(order) {
    const RSSFeedUrl = `https://www.nasa.gov/rss/dyn/Houston-We-Have-a-Podcast.rss`

    const { items, title, description } = await getRSSFeed(RSSFeedUrl)
    // if `dsc` the latest 10 episodes are returned, otherwise will return first 10 episodes
    const tenItems = order === 'dsc' ? items.slice(-10) : items.slice(0, 10)

    const episodes = tenItems.map((item) => {
        const { title, isoDate, enclosure } = item
        return {
            title,
            audioUrl: enclosure.url,
            publishedDate: convertISODateToAEST(isoDate)
        }
    })

    return {
        title: title,
        description: description,
        episodes
    }
}

module.exports = getPayload
