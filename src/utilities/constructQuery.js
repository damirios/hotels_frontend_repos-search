export function constructQuery(query, qualifier) {
    let queryURL = 'https://api.github.com/search/repositories?q=';
    queryURL += query;
    if (qualifier !== 'all') {
        queryURL += ' in:' + qualifier;
    }

    return queryURL;
}