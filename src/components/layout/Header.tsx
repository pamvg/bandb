import { Sprout } from 'lucide-react';

const Header = () => {
    return (
                <header>
                    <a href="/" className='text-3xl flex items-center brand-logo'>
                        <Sprout size={30}/>
                        <span aria-label='logo-name'>bloom&breath</span>
                    </a>

                    <nav aria-label="Main Navigation">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/services">Services</a></li>
                        </ul>
                    </nav>
                </header>
            );
}

export default Header;