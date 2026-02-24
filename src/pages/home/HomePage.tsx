import { Button, Container } from '@/components';
import { type FC } from 'react';
import { Link } from 'react-router';
import { path } from '@/utils/constants/constants';
import logoToiArt from '@/assets/svg/logoToiArt.svg';
import logoToiArtWide from '@/assets/svg/logoToiArtWide.svg';
import heroPrint from '@/assets/svg/hero.svg';

export const HomePage: FC = () => {
    return (
        <section className="grid justify-self-center">
            <Container>
                <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-10 mb-8 md:mb-3">
                    <h1 className="ml-5 mt-3 sm:mt-10 text-start text-nowrap text-4xl sm:text-5xl lg:text-8xl font-extrabold text-neutral-900 tracking-tight">
                        16 лет
                        <br />
                        на рынке
                    </h1>

                    <div className="w-full sm:w-2xl overflow-hidden">
                        <img
                            src={heroPrint}
                            alt="Полиграфия TOIART"
                            draggable={false}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-4 mx-2 md:mx-0">
                    <div className="bg-white w-full rounded-4xl shadow-md border border-neutral-800 p-4 sm:p-5 flex flex-col justify-between">
                        <div className="w-32 sm:w-[200px] h-auto overflow-hidden mb-2">
                            <img
                                src={logoToiArt}
                                alt="Логотип TOIART"
                                draggable={false}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-base sm:text-2xl font-black text-neutral-800 mb-3">Лазерный принтер</h2>
                            <p className="text-neutral-800 text-sm sm:text-[16px] font-semibold mb-7">
                                Айдентика - визитки, бланки, вывески и многое
                                <br className="hidden sm:block" />
                                <span className="sm:hidden"> </span>
                                Брендирование сувенирной продукции
                            </p>
                        </div>
                        <Link to={path.toiArt}>
                            <Button className="rounded-3xl w-full sm:w-auto whitespace-normal px-5 py-7 text-base lg:text-xl font-bold">
                                Узнать больше о продукции TOI-ART
                            </Button>
                        </Link>
                    </div>

                    <div className="bg-white w-full rounded-4xl shadow-md border border-neutral-800 p-4 sm:p-5 flex flex-col justify-between">
                        <div className="w-32 sm:w-[380px] h-auto overflow-hidden mb-2">
                            <img
                                src={logoToiArtWide}
                                alt="Логотип TOIARTWIDE"
                                draggable={false}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-base sm:text-2xl font-black text-neutral-800 mb-3">
                                Широкоформатная печать
                            </h2>
                            <p className="text-neutral-800 text-sm sm:text-[16px] font-semibold mb-7">
                                Печать на японском оборудовании премиум класса
                                <br className="hidden sm:block" />
                                <span className="sm:hidden"> </span>
                                Roll-up, баннеры, холсты, постеры, стикеры и
                                <br className="hidden sm:block" />
                                <span className="sm:hidden"> </span>
                                оформление интерьеров
                            </p>
                        </div>
                        <Link to={path.toiArtWide}>
                            <Button className="rounded-3xl w-full sm:w-auto whitespace-normal px-5 py-7 text-base lg:text-xl font-bold">
                                Узнать больше о продукции TOI-ART-WIDE
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
};