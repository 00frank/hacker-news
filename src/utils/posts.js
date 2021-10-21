const Endpoints = {
    JOBS: "https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty",
    STORIES: "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty",
}

async function getPostsId(endpoint) {
    let data = await fetch(endpoint);
    let postsId = await data.json();
    return postsId;
}

async function getPosts(ids) {
    let promises = ids.map(id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`));
    let data = await Promise.all(promises);
    let posts = await Promise.all(data.map(p => p.json()));
    return posts;
}


export { Endpoints, getPostsId, getPosts }