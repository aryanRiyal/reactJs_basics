export const getPosts = async function () {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET'
    });
    return await response.json();
};

export const getRandomUser = async function () {
    const response = await fetch('https://randomuser.me/api/', {
        method: 'GET'
    });
    return await response.json();
};
