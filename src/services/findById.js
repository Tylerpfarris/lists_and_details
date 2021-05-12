export const findById = async (id) => {
    try {
        const res = await fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`);
        const db = await res.json();
        return db;
    } catch (error) {
        throw Error(error)
    }
};