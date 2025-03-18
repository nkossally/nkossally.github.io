export const NavBar = ({scrollToAbout,scrollToPortfolio, scrollToContact }) =>{
    return (
        <div className="nav-bar" >
            <button className={"nav-element"} onClick={scrollToAbout}> About </button>
            <button className="nav-element" onClick={scrollToPortfolio}> Projects </button>
            <button className="nav-element" onClick={scrollToContact}> Contact </button>

        </div>
    )
}