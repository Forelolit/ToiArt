import { Button, Container } from '@/components';
import { type FC } from 'react';
import logoToiArt from '@/assets/svg/logoToiArt.svg';
import logoToiArtWide from '@/assets/svg/logoToiArtWide.svg';
import { Link } from 'react-router';
import { path } from '@/utils/constants/constants';

export const HomePage: FC = () => {
    return (
        <Container>
            <div className="grid gap-10">
                <section className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
                    <Link to={path.toiArt}>
                        <div className="rounded-full overflow-hidden w-36 sm:w-40 md:w-44 lg:w-48 h-36 sm:h-40 md:h-44 lg:h-48 border border-neutral-400 shadow-md">
                            <img src={logoToiArt} alt="Логотип TOI ART" className="object-cover w-full h-full" />
                        </div>
                    </Link>

                    <div className="bg-white/30 p-6 sm:p-8 rounded-2xl backdrop-blur-lg shadow-xl border border-white/40 max-w-2xs sm:max-w-md text-center lg:text-left">
                        <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-neutral-800 mb-3 tracking-tight">
                            16 лет на рынке
                        </h1>
                        <ul className="space-y-2 text-neutral-700 text-sm sm:text-base leading-relaxed mb-3">
                            <li>Айдентика — визитки, бланки, вывески и многое другое</li>
                            <li>Брендирование сувенирной продукции</li>
                        </ul>
                        <Link to={path.toiArt}>
                            <Button className="whitespace-normal py-6 sm:py-2">
                                Узнать больше о продукции TOI-ART
                            </Button>
                        </Link>
                    </div>
                </section>

                <section className="flex flex-col lg:flex-row-reverse items-center justify-center gap-8 lg:gap-12">
                    <Link to={path.toiArtWide}>
                        <div className="rounded-full overflow-hidden w-36 sm:w-40 md:w-44 lg:w-48 h-36 sm:h-40 md:h-44 lg:h-48 border border-neutral-400 shadow-md">
                            <img
                                src={logoToiArtWide}
                                alt="Логотип TOI ART WIDE"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </Link>

                    <div className="bg-white/30 p-6 sm:p-8 rounded-2xl backdrop-blur-lg shadow-xl border border-white/40 max-w-2xs sm:max-w-md text-center lg:text-left">
                        <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-neutral-800 mb-3 tracking-tight">
                            Широкоформатная печать
                        </h2>
                        <ul className="space-y-2 text-neutral-700 text-sm sm:text-base leading-relaxed mb-3">
                            <li>Печать на японском оборудовании премиум-класса</li>
                            <li>Roll-up, баннеры, холсты, постеры, стикеры и оформление интерьеров</li>
                        </ul>
                        <Link to={path.toiArtWide}>
                            <Button className="whitespace-normal py-6 sm:py-2">
                                Узнать больше о продукции TOI-ART-WIDE
                            </Button>
                        </Link>
                    </div>
                </section>
            </div>
        </Container>
    );
};
