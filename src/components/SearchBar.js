import Search from "@material-ui/icons/Search";
import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.props.onSearchSubmit(this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex">
                <h1 className="text-3xl font-bold text-gray-900">
                    Search
                </h1>
                <div className="shadow w-8 ml-10">
                    <p className="m-2 font-bold text-gray-900">
                        r/
                    </p>
                </div>
                <div className="shadow flex w-full">
                    <form onSubmit={this.handleSubmit} className="flex w-full">
                        <input className="w-full rounded p-2" type="text" placeholder="Search a subreddit here" value={this.state.value} onChange={this.handleChange}/>
                        <button
                            className="bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
                            <Search/>
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;
