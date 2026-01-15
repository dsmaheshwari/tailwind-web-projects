import "./FooterMenu.css";

function Menu() {
    return (
        <div data-footer-menu id="data-footer-menu">
            <div className="menu flex">
                <a href="#data-features" className="group menu-item">
                    <span>Features</span>
                </a>
                <a href="#data-download" className="group menu-item">
                    <span>Download</span>
                </a>
                <a href="#data-faq" className="group menu-item">
                    <span>FAQ</span>
                </a>
            </div>
        </div>
    );
}

export default Menu;
