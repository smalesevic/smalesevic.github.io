import logo from '../logo.svg';
import {
    Route,
} from "react-router-dom";

function TopNavBar() {
    return (
            <nav className="bg-gray-800">
                <div className="hidden sm:block mx-auto">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <img className="hidden sm:block h-8 w-auto ml-6" src={logo} alt="logo"></img>
                            </div>
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    {/*<a href="Home" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>*/}
                                    {/*<a href="List" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">List</a>*/}
                                    <Route render={({ history}) => (
                                        <button onClick={() => { history.push('/Search')}} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Search</button>
                                        )} />
                                    <Route render={({ history}) => (
                                        <button onClick={() => { history.push('/Favourites')}} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Favourites</button>
                                    )} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sm:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Route render={({ history}) => (
                            <button onClick={() => { history.push('/Search')}} className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Search</button>
                        )} />
                        <Route render={({ history}) => (
                            <button onClick={() => { history.push('/Favourites')}} className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Favourites</button>
                        )} />
                    </div>
                </div>
            </nav>
    );
}

export default TopNavBar;
