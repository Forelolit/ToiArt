import { path } from '@/utils/constants/constants';
import { createBrowserRouter } from 'react-router';
import * as Pages from '@/pages/index';
import { Layout } from '../layout';

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: path.home,
                element: <Pages.HomePage />,
            },
            {
                path: path.notFound,
                element: <Pages.NotFoundPage />,
            },
            {
                path: path.toiArt,
                element: <Pages.ToiArtPages />,
            },
            {
                path: path.toiArtWide,
                element: <Pages.ToiArtWidePage />,
            },
            {
                path: path.servicesToiArt,
                element: <Pages.DetailPage />,
            },
            {
                path: path.servicesToiArtWide,
                element: <Pages.DetailPage />,
            },
        ],
    },
]);
