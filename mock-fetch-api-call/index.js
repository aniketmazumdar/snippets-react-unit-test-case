export const fetchDataFromAPi = async (id) => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + id)
        .then(res => res.json())
        .then(res => res)
        .catch(err => err);

    return response;
}
