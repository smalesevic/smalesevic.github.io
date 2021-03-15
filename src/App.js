import './App.css';
import TopNavBar from './components/TopNavBar';
import HeaderSearchBar from './components/HeaderSearchBar';
import PostsList from './components/PostsList';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        const favourites = [];

        for (var i = 0; i < localStorage.length; i++){
            favourites.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }

        this.state = {searchInput: '', topSubredditPosts: [], favouriteSubredditPosts: favourites};
    }

    handleSearch = (searchInput) => {
        this.setState({searchInput: searchInput});
        const topTenPosts = [];

        try {
        fetch(`https://www.reddit.com/r/${searchInput}/top/.json?limit=10`).then(
            (res) =>
                    res.json().then((response) => {
                        if(response.error)
                        {
                            this.setState({topSubredditPosts: [] });
                            throw 'Err';
                        }
                        response.data.children.forEach((item) => {
                            try {
                                topTenPosts.push({
                                    author: item.data.author,
                                    id: item.data.id,
                                    score: item.data.score,
                                    ups: item.data.ups,
                                    url: item.data.url,
                                    title: item.data.title,
                                    subreddit_subscribers: item.data.subreddit_subscribers,
                                    subreddit: item.data.subreddit,
                                    isFavourite: this.state.favouriteSubredditPosts.find(favouritesItem => item.data.id === favouritesItem.id)
                                })
                            }
                            catch(e)
                            {
                                console.log(e);
                                this.setState({topSubredditPosts: [] });
                            }
                        });
                        this.setState({topSubredditPosts: topTenPosts})
                    })

        );
        } catch (e) {
            console.log(e);
            this.setState({topSubredditPosts: [] });
        }
    }

    handleFavouritesAction = (id) => {
        const modifiedTenPosts = [];
        const favouritePosts = this.state.favouriteSubredditPosts;

        this.state.topSubredditPosts.forEach((item) => {
            if (item.id === id) {
                item.isFavourite = !item.isFavourite;
            }
            modifiedTenPosts.push(item);
        });

        if(favouritePosts.find(item => item.id === id))
        {
            let removeIndex = favouritePosts.map(function(favouritePostsItem) {
                return favouritePostsItem.id;
            }).indexOf(id);
            favouritePosts.splice(removeIndex, 1);
        }
        modifiedTenPosts.forEach((modifiedItem) => {
            if (modifiedItem.isFavourite && !favouritePosts.find(item => item.id === modifiedItem.id)) {
                favouritePosts.push(modifiedItem);
                localStorage.setItem(id, JSON.stringify(modifiedItem));
            } else if (favouritePosts.find(item => item.id === modifiedItem.id) && modifiedItem.id === id) {
                let removeIndex = favouritePosts.map(function(favouritePostsItem) {
                    return favouritePostsItem.id;
                }).indexOf(modifiedItem.id);
                favouritePosts.splice(removeIndex, 1);
                localStorage.removeItem(id);
            }
        })

        this.setState({topSubredditPosts: modifiedTenPosts, favouriteSubredditPosts: favouritePosts});
    }

    render () {
        return (
            <Router>
                <div>
                    <TopNavBar> </TopNavBar>
                    <HeaderSearchBar onSearchSubmit={this.handleSearch}>
                    </HeaderSearchBar>
                    <main>
                        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                                <div className="border-4 border border-gray-200 rounded-lg">
                                    <Route exact path="/">
                                        <PostsList items={this.state.topSubredditPosts} onFavouritesClick={this.handleFavouritesAction}>
                                        </PostsList>
                                    </Route>
                                    <Route path="/Search" render={() => (
                                        <PostsList items={this.state.topSubredditPosts} onFavouritesClick={this.handleFavouritesAction}>
                                        </PostsList>
                                    )}/>
                                    <Route path="/Favourites" render={() => (
                                        <PostsList items={this.state.favouriteSubredditPosts} onFavouritesClick={this.handleFavouritesAction}>
                                        </PostsList>
                                    )}/>
                                </div>
                        </div>
                    </main>
                </div>
            </Router>
        );
    }
}

export default App;
