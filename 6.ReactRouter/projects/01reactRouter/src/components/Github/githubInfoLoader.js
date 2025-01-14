export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/aryanRiyal");
    return response.json();
};
