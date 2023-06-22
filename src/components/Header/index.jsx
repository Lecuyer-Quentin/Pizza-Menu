
const Header = () => {
    const name = "Fast React Pizza Co.";
    const style = {color: "red", fontSize: "38px", textTransform: "uppercase"};
    return (
        <header>
        <h1 style={style}>{name}.</h1>
        </header>
    )
}

export default Header;