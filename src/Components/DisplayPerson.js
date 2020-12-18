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
        //console.log(this.props)
        return (
            <section className="displayPersonContainer">
                {this.state.data.map((element, i) => {
                    // if (element.id === 0) {
                    //     // show
                    // } else {
                    //     //hide
                    // }
                    return <PersonInformation key={i} uniqueID={i} personalInfo={element} count={this.props.count} />
                })}
            </section >
        )
    }
}
export default DisplayPerson;