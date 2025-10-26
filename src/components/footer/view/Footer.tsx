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
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                        <Link to={path.toiArt} className="w-[100px] hover:opacity-80 transition-opacity">
                            <img
                                src={logoToiArt}
                                alt="Логотип TOIART"
                                draggable={false}
                                className="w-full h-auto object-contain"
                            />
                        </Link>

                        <Link to={path.toiArtWide} className="w-40 hover:opacity-80 transition-opacity">
                            <img
                                src={logoToiArtWide}
                                alt="Логотип TOIARTWIDE"
                                draggable={false}
                                className="w-full h-auto object-contain"
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
                            href="https://maps.google.com/?q=ЖК Триумф-Стиль, Жоомарта Боконбаева 103"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block hover:text-neutral-900 transition-colors px-2 sm:px-0">
                            Адрес: ЖК Триумф-Стиль, ​ул. Жоомарта Боконбаева, 103, 1 этаж
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
