import type { FC } from 'react';
import { useNavigate, useParams } from 'react-router';
import toiartData from '@/utils/json/toiartData.json';
import toiartDataWide from '@/utils/json/toiartwideData.json';
import { Button, Container } from '@/components';

export const DetailPage: FC = () => {
    const navigate = useNavigate();
    const { category, id } = useParams<{ category: string; id: string }>();
    const itemId = Number(id);

    const allCategories = [...toiartData, ...toiartDataWide];

    const categoryData = allCategories.find((c) =>
        category === 'toiArtWide' ? c.brand === 'TOIART WIDE' : c.brand === 'TOIART',
    );

    const item = categoryData?.items.find((i) => i.id === itemId);

    if (!item) return <p className="text-2xl text-center font-semibold h-[70vh]">Услуга не найдена</p>;

    return (
        <Container className="flex flex-col lg:flex-row justify-center gap-10 pt-10 px-4 sm:px-6 lg:px-8">
            <div className="flex-1 max-w-3xl relative">
                <Button
                    onClick={() => navigate(-1)}
                    className="absolute -top-10 sm:-top-12 left-0 text-sm sm:text-base">
                    Назад
                </Button>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6">{item.title}</h1>

                <div className="relative w-full h-64 sm:h-80 lg:h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>

                <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">{item.description}</p>
            </div>

            <aside className="sticky top-1/4 flex-1 max-w-sm h-fit bg-white border border-neutral-200 rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-shadow duration-300 mt-8 lg:mt-0">
                <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-700">Характеристики</h2>

                <ul className="flex flex-col gap-3 sm:gap-4 text-sm sm:text-base text-gray-600">
                    <li>{item.shortDescription}</li>
                    <li>
                        <strong>{item.price}</strong>
                    </li>
                </ul>
            </aside>
        </Container>
    );
};
