import { useState, type FC } from 'react';
import { Container } from '@/components/ui/container';
import { navlink, path } from '@/utils/constants/constants';
import { Link } from 'react-router';
import logoToiArt from '@/assets/svg/logoToiArt.svg';
import logoToiArtWide from '@/assets/svg/logoToiArtWide.svg';
import { Menu, X } from 'lucide-react';

export const Header: FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="mb-5 sm:mb-10 relative">
            <Container className="flex items-center justify-between md:justify-evenly px-4 sm:px-0 py-4">
                <div className="flex items-center gap-3 md:gap-0">
                    <Link to={path.home}>
                        <img
                            src={logoToiArt}
                            alt="Логотип TOIART"
                            className="w-[60px] sm:w-[100px] md:-[120px] h-auto object-contain"
                        />
                    </Link>

                    <div className="h-4 sm:h-6 border-r border-e-neutral-400 md:hidden" />

                    <Link to={path.toiArtWide} className="block md:hidden">
                        <img
                            src={logoToiArtWide}
                            alt="Логотип TOIARTWIDE"
                            className="w-[140px] sm:w-[200px] h-auto object-contain"
                        />
                    </Link>
                </div>

                <ul className="hidden md:flex justify-between items-center gap-10 px-6 py-2 text-lg font-light rounded-full bg-black text-white">
                    {navlink.map((i) => (
                        <li key={i.label}>
                            <Link to={i.link} className="hover:text-blue-200 transition-colors">
                                {i.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link to={path.toiArtWide} className="hidden md:block">
                    <img
                        src={logoToiArtWide}
                        alt="Логотип TOIARTWIDE"
                        className="w-[140px] sm:w-[200px] h-auto object-contain"
                    />
                </Link>

                <button
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className="md:hidden text-neutral-800 hover:text-neutral-950 transition-colors ml-auto"
                    aria-label="Открыть меню">
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </Container>

            <div
                className={`md:hidden bg-black text-white absolute z-10 left-0 right-0 top-full transition-all duration-300 overflow-hidden ${
                    menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <ul className="flex flex-col items-center gap-4 py-6 text-lg font-light">
                    {navlink.map((i) => (
                        <li key={i.label}>
                            <Link
                                to={i.link}
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-blue-200 transition-colors">
                                {i.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};
