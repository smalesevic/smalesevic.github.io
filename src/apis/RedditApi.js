function searchTopSubRedditPosts(searchInput) {
    const topTenPosts = [];
    fetch(`https://www.reddit.com/r/${searchInput}/top/.json?limit=10`).then(
        (res) =>
            res.json().then((response) => {
                response.data.children.map((item) => {
                    try {
                        topTenPosts.push({
                            author: item.data.author,
                            id: item.data.id,
                            score: item.data.score,
                            ups: item.data.ups,
                            url: item.data.url,
                            title: item.data.title,
                            subreddit_subscribers: item.data.subreddit_subscribers,
                        })

                    } catch (e) {
                        console.log(e);
                    }
                });
                // return topTenPosts;
            })
    );
    console.log(topTenPosts);
    return topTenPosts;
}

export default searchTopSubRedditPosts;