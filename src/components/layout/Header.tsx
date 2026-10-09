import { Sprout } from 'lucide-react';
import { NavLink } from "react-router"

const Header = () => {
    return (
                <header className='flex items-center justify-between px-[5em] py-[2em]'>
                    <a href="/" className='text-3xl flex items-center gap-[.5em] brand-logo'>
                        <Sprout size={30}/>
                        <span aria-label='logo-name'>bloom&breath</span>
                    </a>

                    <nav aria-label="Main Navigation">
                        <ul className='flex gap-[1em] items-center'>
                            <li>
                                <NavLink 
                                    to="/" 
                                    className={({ isActive }) =>
                                        isActive ? "text-primary underline underline-offset-8 decoration-primary" :
                                        "text-foreground hover:text-primary hover:underline underline-offset-8 decoration-primary"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/services" 
                                    className={({ isActive }) =>
                                        isActive ? "text-primary underline underline-offset-8 decoration-primary" : 
                                        "text-foreground hover:text-primary hover:underline underline-offset-8 decoration-primary"
                                    }
                                >
                                    Services
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
            );
}

export default Header;