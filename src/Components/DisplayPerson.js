/*
1. Count floated to top right
2. Name of person
3. Person Info [Location, Job Title, Employer]
4. Favorite Movies in a ordered list

*/

import { Component } from 'react';
import data from '../data';

class DisplayPerson extends Component {
    constructor() {
        super();
        this.state = {
            data: data
        }
    }
    // {
    //     id: 1,
    //     name: { first: "Waylin", last: "Lumsdon" },
    //     city: "Likiep",
    //     country: "Marshall Islands",
    //     employer: "Twinder",
    //     title: "Physical Therapy Assistant",
    //     favoriteMovies: [
    //         "That Night in Varennes (Nuit de Varennes, La)",
    //         "Spy(ies) (Espion(s))",
    //         "Klip (Clip)"
    //     ]
    // },
    render() {
        return (
            <section className="displayPersonContainer">
                {/* count */}

                <h1>this.state.data</h1>
                <h1>{this.state.data[0].name.first} {this.state.data[0].name.last}</h1>
                <h3>From: {this.state.data[0].country}</h3>
                <h3>Job Title: {this.state.data[0].title}</h3>
                <ol>
                    <lh>Favorite Movies:</lh>
                    <li>
                        {this.state.data[0].favoriteMovies[0]}
                    </li>
                    <li>
                        {this.state.data[0].favoriteMovies[1]}
                    </li>
                    <li>{this.state.data[0].favoriteMovies[2]}</li>

                </ol>

            </section >
        )
    }
}

export default DisplayPerson;