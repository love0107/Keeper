import "../components/Footer.css";

function Footer() {
    const currYear = new Date().getFullYear();
    return (
        <div>
            <footer className="footer">
                <p>copyright © {currYear}</p>
            </footer>
        </div>
    );
}
export default Footer;