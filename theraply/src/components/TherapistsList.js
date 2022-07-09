import React from "react";

const TherapistsList = props => {
    const therapists = props.therapists.map((therapist) => {
        return <li key={therapist.id}>{therapist.name}</li>
    });

    return (
        <ul>{therapists}</ul>
    )
};

export default TherapistsList;