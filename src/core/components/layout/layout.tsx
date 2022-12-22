import { MenuItems } from '../../types/menu.item';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

export function Layout({
    items,
    children,
}: {
    items: MenuItems;
    children: JSX.Element;
}) {
    return (
        <>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    );
}
