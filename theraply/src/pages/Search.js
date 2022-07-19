import React from "react";
import SearchComponent from "../components/SearchComponent";
import therapists from '../api/therapists';
import TherapistsList from "../components/TherapistsList";

class Search extends React.Component {
    state = { therapists: [] };

    onSearchSubmit = async (term) => {
        const response = await therapists.get('/therapists/', {
            parms: { query: term },
        });

        this.setState({ therapists: response.data.results });
    }


    render() {
        return (
            <div className='searchContainer'>
                <div className="components">
                    <SearchComponent onSubmit={this.onSearchSubmit} />
                    Found: {this.state.therapists.length} Therapists.
                    <TherapistsList therapists={this.state.therapists} />
                </div>
            </div>
        )
    }
}

export default Search;