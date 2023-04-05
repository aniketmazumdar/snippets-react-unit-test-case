import { fetchDataFromAPi } from './api'


const mockResponse = { name: 'charmander' };
const mockReqId = 4;

describe("PokedexDetails", () => {
    beforeEach(() => {
        fetch.resetMocks()
    })


    it('should return value of fetchDataFromAPi method as mentioned', async () => {
        await fetch.mockResponseOnce(JSON.stringify(mockResponse));
        const resp = await fetchDataFromAPi(mockReqId);
        await expect(resp).toEqual(mockResponse);
        await expect(fetch.mock.calls.length).toEqual(1);
        await expect(fetch.mock.calls[0][0]).toEqual('https://pokeapi.co/api/v2/pokemon/'+mockReqId);
    });
})
