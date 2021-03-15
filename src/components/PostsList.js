import React from 'react';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';

class PostsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const isSearchListEmpty = this?.props?.items.length === 0;

        return (
            <div className="flex h-full bg-gray-200">
                    <div className="flex justify-center w-full">
                        <div className="bg-white shadow-xl rounded-lg w-2/3">
                            {
                                isSearchListEmpty ? (
                                    <div> No results found</div>
                                ) :
                                    (
                                        <ul className="divide-y divide-gray-300">
                                            {
                                                this?.props?.items.map((post, index) => (
                                                    <div key={index} className="flex hover:bg-gray-50 cursor-pointer p-4">
                                                        <div className="w-11/12">
                                                            <a href={post.url}>
                                                                <p className="font-bold">{post.title}</p>
                                                                <p className="italic text-gray-500">Author: {post.author}</p>
                                                                <p className="italic text-gray-500">Ups: {post.ups}</p>
                                                                <p className="italic text-gray-500">Subreddit: {post.subreddit}</p>
                                                            </a>
                                                        </div>
                                                        <div className="m-4" onClick={() => { this.props.onFavouritesClick(post.id) }}>
                                                            {
                                                                post.isFavourite ? (
                                                                    <StarIcon/>
                                                                ) : (
                                                                    <StarBorderIcon/>
                                                                )
                                                            }
                                                        </div>

                                                    </div>
                                                ))}

                                        </ul>
                                    )
                            }
                            {/*<ul className="divide-y divide-gray-300">*/}
                            {/*    {*/}
                            {/*        this?.props?.items.map((post, index) => (*/}
                            {/*        <div key={index} className="flex hover:bg-gray-50 cursor-pointer p-4">*/}
                            {/*            <div className="w-11/12">*/}
                            {/*                <a href={post.url}>*/}
                            {/*                    <p className="font-bold">{post.title}</p>*/}
                            {/*                    <p className="italic text-gray-500">Author: {post.author}</p>*/}
                            {/*                    <p className="italic text-gray-500">Ups: {post.ups}</p>*/}
                            {/*                    <p className="italic text-gray-500">Subreddit: {post.subreddit}</p>*/}
                            {/*                </a>*/}
                            {/*            </div>*/}
                            {/*            <div className="m-4" onClick={() => { this.props.onFavouritesClick(post.id) }}>*/}
                            {/*                {*/}
                            {/*                    post.isFavourite ? (*/}
                            {/*                        <StarIcon/>*/}
                            {/*                    ) : (*/}
                            {/*                        <StarBorderIcon/>*/}
                            {/*                    )*/}
                            {/*                }*/}
                            {/*            </div>*/}

                            {/*        </div>*/}
                            {/*    ))}*/}

                            {/*</ul>*/}
                        </div>
                    </div>
            </div>
        );
    }
}

export default PostsList;
