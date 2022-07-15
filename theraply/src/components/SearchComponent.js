import React from "react";

class SearchComponent extends React.Component {
    state = { term: '' }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="scSegment">
                <form onSubmit={this.onFormSubmit} className="scForm">
                    <div>
                        <h2 className='title'>Therapists Search</h2>
                    </div>
                    <div className="zipcodeSearch">
                        <label>Search by Zipcode</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                        />
                    </div>
                    <div className="distanceSearch">
                        <label>Maximum Distance</label>
                        <select className="select">
                            <option value="english">5km</option>
                            <option value="english">10km</option>
                            <option value="german">15km</option>
                        </select>
                    </div>
                    <div className="languageSearch">
                        <label>Language</label>
                        <select className="select">
                            <option value="english">no preference</option>
                            <option value="english">English</option>
                            <option value="german">German</option>
                        </select>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchComponent;