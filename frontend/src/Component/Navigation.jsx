const Navigation = () => {

    return(
        <div className="nav-bar">
            <form action="post">
            <input type="text" name="job" placeholder="Quoi ?" id="job-input"/>
            <input type="text" name="location" placeholder="Ou?" id="location-input" />
            <input type="submit" value="Go!"  />
            </form>
        </div>
    )
}

export default Navigation;  