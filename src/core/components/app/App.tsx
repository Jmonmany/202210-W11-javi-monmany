import { Layout } from '../layout/layout';
import { MenuItems } from '../../types/menu.item';
import { AppRoutes } from '../routes/app.routes';
export function App() {
    const items: MenuItems = [
        { path: '/step 1', label: 'Personal data' },
        { path: '/step 2', label: 'Access data' },
        { path: '/step 3', label: 'Confirmation' },
        { path: '/step 4', label: 'Login' },
    ];
    return (
        <>
            <Layout items={items}>
                <AppRoutes items={items}></AppRoutes>
            </Layout>
        </>
    );
}
