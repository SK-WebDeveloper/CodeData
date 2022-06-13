import { getData } from './script/appendFetch.js';

test('testing fetching of data', async () => {

    let data = await getData('https://fakestoreapi.com/products/category/electronics')

    expect(data).toBeTruthy()
});

// expectation vs reality