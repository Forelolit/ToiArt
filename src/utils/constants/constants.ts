export const path = {
    home: '/',
    notFound: '*',
    toiArt: '/toiArt',
    toiArtWide: '/toiArtWide',
    aboutUs: '/aboutUs',
    contacts: '#contacts',
    adress: '#adress',
    servicesToiArt: '/toiArt/services/:category/:id',
    servicesToiArtWide: '/toiArtWide/services/:category/:id',
};

export const navlink = [
    {
        label: 'О нас',
        link: path.aboutUs,
    },
    {
        label: 'Услуги',
        link: path.toiArt,
    },
    {
        label: 'Контакты',
        link: path.contacts,
    },
    {
        label: 'Адрес',
        link: path.adress,
    },
];
