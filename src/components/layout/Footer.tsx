import { ArrowUpRight } from 'lucide-react';
import { NavLink } from 'react-router';

const navClass = ({ isActive }: { isActive: boolean }) => {
    return `text-sm text-foreground hover:text-primary hover:underline underline-offset-8 decoration-primary ${isActive ? "text-primary underline underline-offset-8 decoration-primary" : ''}`;
}

const Footer = () => {
    return (
        <footer className="bg-secondary px-[5em] pt-[4em] pb-[2em] grid divide-y-1 divide-primary/20 items-start    ">
            <div className='flex justify-between pb-[3em]'>
                <div className='flex flex-col gap-[2em]'>
                    <a href="/" className='text-5xl brand-logo'>
                        <span aria-label='logo-name'>bloom&breath</span>
                    </a>

                    <div className='text-[15px]'>
                        <p>A little closer to nature.</p>
                        <p>A little closer to yourself.</p>
                    </div>

                    <div>
                        <a href="#" className='flex items-center gap-1 text-[13px] text-primary'>Instagram <ArrowUpRight size={18}/></a>
                    </div>
                </div>

                <div>
                    <p className='text-xs text-primary mb-[1em]'>EXPLORE</p>

                    <nav aria-label="Footer Navigation">
                        <ul className='flex flex-col gap-[1em]'>
                            <li>
                                <NavLink 
                                    to="/" 
                                    className={navClass}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/services" 
                                    className={navClass}
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/about" 
                                    className={navClass}
                                >
                                    Our philosophy
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/book" 
                                    className={navClass}
                                >
                                    Gift a moment
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className='flex flex-col gap-[1em]'>
                    <p className='text-xs text-primary'>FIND YOUR CALM</p>

                    <p className='text-sm'>18 Willow Lane, Bath Somerset, BA1 2BT</p>

                    <p className='text-sm'>hello@bloomandbreat.co.uk</p>

                    <p className='text-sm'>+44 (0)1225 014 820</p>
                </div>

                <div className='flex flex-col gap-[1em]'>
                    <p className='text-xs text-primary'>SLOW HOURS</p>

                    <p className='text-sm'>
                        Tuesday–Friday  10am–7pm <br />
                        Saturday–Sunday  9am–6pm <br />
                        Monday  Closed 
                    </p>

                    <p className='text-xs text-muted-foreground'>Treatments by appointment.</p>
                </div>
            </div>

            <div className='pt-[3.5em] flex justify-between text-xs text-muted-foreground'>
                <p className=''>© 2026 bloom&breath. Naturally, with care.</p>

                <nav>
                    <ul className='flex gap-[1em]'>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Booking Terms</a></li>
                        <li><a href="#">Accessibility</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;