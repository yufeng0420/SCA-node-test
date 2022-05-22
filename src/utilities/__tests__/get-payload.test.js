jest.mock("../rss-parser")

const getPayload = require("../get-payload")
const getRSSFeed = require("../rss-parser")
const { mockItems,
    mockFirstTenItems,
    mockDescription,
    mockTitle,
    mockLastTenItems } = require("../mockData")

describe('get payload', () => {

    getRSSFeed.mockResolvedValue({
        items: mockItems, title: mockTitle, description: mockDescription
    });

    it('should return first 10 episodes when order is null', async () => {
        const result = await getPayload()
        expect(result).toStrictEqual({
            title: mockTitle,
            description: mockDescription,
            episodes: mockFirstTenItems
        })
    })
    it('should return first 10 episodes when order is asc', async () => {
        const result = await getPayload("asc")
        expect(result).toStrictEqual({
            title: mockTitle,
            description: mockDescription,
            episodes: mockFirstTenItems
        })
    })
    it('should return last 10 episodes when order is asc', async () => {
        const result = await getPayload("dsc")
        expect(result).toStrictEqual({
            title: mockTitle,
            description: mockDescription,
            episodes: mockLastTenItems
        })
    })
})