export const fetchCharacters = async () => {
    try {
        const res = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters');
    const db  = await res.json();

    return db.map(character => ({
        id: character._id,
        name: character.name,
        image: character.image,
            
    }));
    } catch (error) {
        throw Error(error);
    }
};