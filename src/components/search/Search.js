import React, {Component} from "react";
import './Search.css';

class Search extends Component {
    state = {
        searchValue: '',
    };

    handleOnChange = event => {
        this.setState({searchValue: event.target.value});
    };

    handleSearch = () => {
    }

    render() {
        return <form className="search-form">
            <div className="search-block">
                <div className="search-block-a">
                    <input
                        className="search-bar"
                        name="text"
                        type="text"
                        placeholder="Search"
                        onChange={event => this.handleOnChange(event)}
                        value={this.state.searchValue}
                    />
                </div>
                <div className="search-block-b">
                    {/*<button className="search-button" onClick={this.handleSearch}>Search</button>*/}
                    <p className="search-button" onClick={this.handleSearch}>Search</p>
                </div>

            </div>
        </form>;
    }
}

export default Search;