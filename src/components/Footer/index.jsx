
const Footer = () => {
    // const hour = new Date().getHours();
    // const isOpen = hour >= 8 && hour <= 17;
    // if (!isOpen) {
    //     alert("We're currently closed. Sorry for the inconvenience.");
    //  }
    return (
        <h2>{new Date().toLocaleTimeString()} We're currently open!</h2>
    )
}
 
export default Footer;