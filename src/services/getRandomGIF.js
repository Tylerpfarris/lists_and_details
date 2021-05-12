export const getRandomGIF = async () => {
    try {
        const res = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/gifs/random?count=1');
    const gif  = await res.json();

    return gif[0];
    } catch (error) {
        throw Error(error);
    }
};