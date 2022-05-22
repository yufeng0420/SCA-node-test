const getRSSFeed = require('./rss-parser')
const { convertISODateToAEST } = require('./format-iso-date-to-AEST')

async function getPayload() {
    const RSSFeedUrl = `https://www.nasa.gov/rss/dyn/Houston-We-Have-a-Podcast.rss`

    const { items, title, description } = await getRSSFeed(RSSFeedUrl)

    const firstTenItems = items.slice(0, 10).map((item) => {
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
        episodes: firstTenItems
    }
}

module.exports = getPayload
