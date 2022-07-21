import React from "react";
import './SearchComponent.css';

class SearchComponent extends React.Component {
    state = { term: '' }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="scSegment">
                <div className="scFormContainer">
                    <form onSubmit={this.onFormSubmit} className="scForm">
                        <div>
                            <h2 className='scTitle'>Therapists Search</h2>
                        </div>
                        <div className="zipcodeSearch">
                            <input
                                type="text"
                                value={this.state.term}
                                onChange={(e) => this.setState({ term: e.target.value })}
                                placeholder="Search by Zipcode"
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
                        <div className="cbStat">
                            <label>Statutory</label>
                            <input type="checkbox" />
                        </div>
                        <div className="cbPrivate">
                            <label>Private</label>
                            <input type="checkbox" />
                        </div>
                        <div className="scButtonContainer">
                            <button className='scbtn'>Search</button>
                        </div>
                        <div className="moreOpt">
                            <a href="#">More Options</a>
                        </div>
                    </form>
                </div>
                <div className="imgContainer">
                    <img className="imgMap" src="images/Map.png" alt="" />
                </div>
            </div>
        );
    }
}

export default SearchComponent;