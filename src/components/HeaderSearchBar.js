import React from 'react';
import {Route} from "react-router-dom";
import SearchBar from "./SearchBar";

class HeaderSearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(id) {
        this.props.onSearchSubmit(id);
    }

    render() {
        return (
            <header className="bg-white shadow">
                <Route exact path="/" render={() => (
                    <SearchBar onSearchSubmit={this.handleSubmit}> </SearchBar>
                )}/>
                <Route path="/Search" render={() => (
                    <SearchBar onSearchSubmit={this.handleSubmit}> </SearchBar>
                )}/>
                <Route path="/Favourites" render={() => (
                    <h1 className="text-3xl font-bold text-gray-900 py-6 px-4 sm:px-6 lg:px-8">Favourites</h1>
                )}/>
            </header>
        );
    }
}

export default HeaderSearchBar;
