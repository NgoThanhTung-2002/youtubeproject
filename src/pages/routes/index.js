import HomePage from "../HomePage/HomePage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import OrderPage from "../OrderPage/OrderPage";
import ProductsPage from "../ProductsPage/ProductsPage";

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: '/products',
        page:  ProductsPage,
        isShowHeader: true
    },
    {
        path: '*',
        page:  NotFoundPage
    },
]