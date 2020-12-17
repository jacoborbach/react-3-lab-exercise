// const PersonInformation = (props) => {

// }

function PersonInformation(props) {
    console.log(props.personalInfo)
    return (
        <div>
            <h2>{props.personalInfo.name.first} {props.personalInfo.name.last}</h2>
            <h1>From: {props.personalInfo.country}</h1>
            <h1>Title: {props.personalInfo.title}</h1>
            <ol>
                <lh>Favorite Movies:</lh>
                <li>{props.personalInfo.favoriteMovies[0]}</li>
                <li>{props.personalInfo.favoriteMovies[1]}</li>
                <li>{props.personalInfo.favoriteMovies[2]}</li>
            </ol>
        </div>
    )
}

export default PersonInformation;