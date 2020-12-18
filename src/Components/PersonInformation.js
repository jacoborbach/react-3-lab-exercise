function PersonInformation(props) {
    //console.log(props.personalInfo)
    const count = props.count;
    if (props.uniqueID !== count) {
        return null;
    }
    return (
        <div>
            <h2 id="count">{props.personalInfo.id}/25</h2>
            <h2>{props.personalInfo.name.first} {props.personalInfo.name.last}</h2>
            <h1>From: {props.personalInfo.country}</h1>
            <h1>Title: {props.personalInfo.title}</h1>
            <h3>Favorite Movies:</h3>
            <ol>
                <li>{props.personalInfo.favoriteMovies[0]}</li>
                <li>{props.personalInfo.favoriteMovies[1]}</li>
                <li>{props.personalInfo.favoriteMovies[2]}</li>
            </ol>
        </div>
    )
}

export default PersonInformation;