export async function getRepos(queryInput, filterSelect) {
    const query = queryInput.value;
    const qualifier = filterSelect.value;
    const queryURL = constructQuery(query, qualifier);

    return fetch(queryURL);
}

function constructQuery(query, qualifier) {
    let queryURL = 'https://api.github.com/search/repositories?q=';
    queryURL += query;
    if (qualifier !== 'all') {
        queryURL += ' in:' + qualifier;
    }

    return queryURL;
}

export function showReposList(repos) {
    console.log('repos: ', repos);
}