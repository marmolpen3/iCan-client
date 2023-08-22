function Footer() {
    return (
        <footer className="text-center">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Agreements</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
                <li className="nav-item"><a href="/instructions" className="nav-link px-2 text-muted">Classification</a></li>
            </ul>
            <p>© 2023 iCan App</p>
        </footer>
    );
}

export default Footer;