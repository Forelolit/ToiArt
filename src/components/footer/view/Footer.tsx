import type { FC } from 'react';
import { Container } from '@/components/ui/container';
import logoToiArt from '@/assets/svg/logoToiArt.svg';
import logoToiArtWide from '@/assets/svg/logoToiArtWide.svg';
import { Link } from 'react-router';
import { path } from '@/utils/constants/constants';

export const Footer: FC = () => {
    return (
        <footer className="border-t border-neutral-300 mt-20">
            <Container>
                <div className="flex flex-col md:flex-row justify-around items-center gap-8 py-5">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                        <Link to={path.home}>
                            <img
                                src={logoToiArt}
                                alt="Логотип TOIART"
                                className="w-20 sm:w-[100px] md:-[120px] h-auto object-contain hover:opacity-80 transition-opacity"
                            />
                        </Link>

                        <div className="h-4 sm:h-6 border-r border-e-neutral-400 hidden sm:block" />

                        <Link to={path.toiArtWide} className="">
                            <img
                                src={logoToiArtWide}
                                alt="Логотип TOIARTWIDE"
                                className="w-[155px] sm:w-[200px] h-auto object-contain hover:opacity-80 transition-opacity"
                            />
                        </Link>
                    </div>

                    <div className="text-center md:text-right space-y-2 text-neutral-700">
                        <a
                            id="contacts"
                            href="tel:+996558398780"
                            className="block hover:text-neutral-900 transition-colors">
                            Контакты: <span className="font-semibold">+996 558‒39‒87‒80</span>
                        </a>
                        <a
                            id="adress"
                            href="https://maps.app.goo.gl/vyEE1Pfjpq2vBn9C9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block hover:text-neutral-900 transition-colors px-2 sm:px-0">
                            Адрес: 103 ул. Боконбаева, Бишкек 720040
                        </a>
                    </div>
                </div>

                <div className="border-t border-neutral-300 pt-5 pb-3 text-center text-neutral-500 text-sm">
                    © {new Date().getFullYear()}
                    <span>
                        <strong> TOI ART</strong> & <strong>TOI ART WIDE. </strong>
                    </span>
                    Все права защищены.
                </div>
            </Container>
        </footer>
    );
};
