import { Component } from 'react';
import data from '../data';
import PersonInformation from './PersonInformation';

class DisplayPerson extends Component {
    constructor() {
        super();
        this.state = {
            data: data
        }
    }
    render() {
        return (
            <section className="displayPersonContainer">
                {this.state.data.map((element, i) => <PersonInformation key={i} personalInfo={element} />)}
            </section >
        )
    }
}
export default DisplayPerson;