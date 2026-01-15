import "./Footer.css";
import FooterLogo from "../../assets/logo-bookmark-footer.svg"
import FooterMenu from "../FooterMenu/FooterMenu";
import FacebookIcon from "../../assets/icon-facebook.svg"
import TwitterIcon from "../../assets/icon-twitter.svg"

function Footer() {
    return (
        <div data-footer id="data-footer">
            <div className="app-max-width flex flex-col lg:flex-row items-center justify-center lg:justify-between py-8 space-y-16 lg:space-y-0">
                <div className="flex flex-col lg:flex-row items-center justify-center space-x-0 lg:space-x-12 space-y-12 lg:space-y-0">
                    <div>
                        <img src={FooterLogo} alt="" />
                    </div>
                    <FooterMenu />
                </div>
                <div className="flex flex-row justify-around space-x-8">
                    <button title="Facebook" className="p-2">
                        <img src={FacebookIcon} alt="" className="ficon"/>
                    </button>
                    <button title="Twitter" className="p-2">
                        <img src={TwitterIcon} alt="" className="ficon" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Footer;