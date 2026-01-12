import LogoLigtMode from '../assets/logo-light-mode.svg'
import LogoDarkMode from '../assets/logo-dark-mode.svg'
import LightThemeIcon from '../assets/light-theme.svg'
import DarkThemeIcon from '../assets/dark-theme.svg'
import { useAppProperties } from '../common/app-properties';

function Header() {
    const { getTheme, toggleTheme } = useAppProperties();

    return (
        <header>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 py-8">
                <img src={getTheme() === "light" ? LogoLigtMode : LogoDarkMode} alt="Fylo logo" />
                <nav className='flex flex-row items-center space-x-6 menu'>
                    <div className='menu-item group'>
                        <a href="">
                            <span>Features</span>
                        </a>
                        <div className='menu-bottom-border'></div>
                    </div>
                    <div className='menu-item group'>
                        <a href="">
                            <span>Testimonials</span>
                        </a>
                        <div className='menu-bottom-border'></div>
                    </div>
                    <div>
                        <button onClick={toggleTheme} className='border border-transparent bg-slate-800 dark:bg-amber-200 hover:border hover:border-gray-300 p-1 rounded-xl outline-none hover:cursor-pointer duration-200 dark:duration-200'>
                            {getTheme() === 'light' && <img src={DarkThemeIcon} className='w-6' />}
                            {getTheme() === 'dark' && <img src={LightThemeIcon} className='w-6' />}
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
