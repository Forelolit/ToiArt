import type { FC } from 'react';
import toiartData from '@/utils/json/toiartwideData.json';
import { Card, CardContent, Container } from '@/components';
import { Link } from 'react-router';

export const ToiArtWidePage: FC = () => {
    return (
        <Container className="px-4 sm:px-6 lg:px-8">
            {toiartData.map((category) => (
                <div key={category.brand} className="max-w-7xl mx-auto relative mt-10">
                    <h2 className="font-bold text-2xl sm:text-3xl mb-4 text-center sm:text-left">
                        {category.category}
                    </h2>

                    <p className="mb-6 text-gray-700 text-sm sm:text-base">
                        <strong>TOIART WIDE</strong> - широкоформатная печать с безупречным качеством на японском
                        оборудовании. Мы гордимся высоким качеством печати и бережем здоровье наших клиентов, используя
                        безопасные чернила, которые не выделяют вредных веществ.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                        {category.items.map((item) => (
                            <Link
                                key={item.id}
                                to={`/toiArtWide/services/toiArtWide/${item.id}`}
                                onClick={() => window.scrollTo({ top: 0 })}>
                                <Card className="hover:scale-105 transition-transform duration-300">
                                    <CardContent>
                                        <div className="overflow-hidden h-40 sm:h-48 rounded-2xl">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <h3 className="mt-3 text-center text-base sm:text-lg font-medium">
                                            {item.title}
                                        </h3>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </Container>
    );
};
