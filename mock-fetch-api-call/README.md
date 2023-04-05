# Mock Fetch API Call
Using `jest-fetch-mock` npm package

<br/>

#### STEPS
1. install `jest-fetch-mock`:
```shell
$ npm install --save-dev jest-fetch-mock
```

2. There are two cases:
  - If your React App is created using CRA, find `src/setupTests.js` file and add below codes into the file:
```javascript
import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()
```

  - Else, find or create a `src/setupJest.js` file to setup the mock and add below codes into the file:
```javascript
import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()
```
On the `package.json` file, add below codes on the root to setup jest config:
```json
"jest": {
    "automock": false,
    "setupFiles": [
        "./setupJest.js"
    ]
}
```

3. Suppose your api file is `index.js` and there is a method named `fetchDataFromAPi`, for which we need to write test case.
```javascript
// index.js
export const fetchDataFromAPi = async (id) => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + id)
        .then(res => res.json())
        .then(res => res)
        .catch(err => err);

    return response;
}
```
4. On your test file `index.test.js`, import the APi method `fetchDataFromAPi` and write codes as mentioned below.
```javascript
// index.test.js
import { fetchDataFromAPi } from './api'
describe("PokedexDetails", () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    it('should return value of fetchDataFromAPi method as mentioned', async () => {
        await fetch.mockResponseOnce(JSON.stringify({ name: 'charmander' }));
        const resp = await fetchDataFromAPi(4);
        await expect(resp).toEqual({ name: 'charmander' });
        await expect(fetch.mock.calls.length).toEqual(1);
        await expect(fetch.mock.calls[0][0]).toEqual('https://pokeapi.co/api/v2/pokemon/'+mockReqId);
    });
})
```

<br/>

#### REFERENCES
- https://www.npmjs.com/package/jest-fetch-mock
