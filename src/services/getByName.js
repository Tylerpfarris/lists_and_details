export const getByName = async (query) => {
    try {
        const res = await fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters?name=${query}`);
        const db = await res.json();
        return db[0];
    } catch (error) {
        throw Error(error)
    }
};