import { Routes, Route, Navigate } from 'react-router-dom';
import AccesDataPage from '../../../features/pages/access/access';
import Confirmation from '../../../features/pages/confirm-data/confirmation';
import Login from '../../../features/pages/login/login';
import PersonalDataPage from '../../../features/pages/personal/personalForm';
import { MenuItems } from '../../types/menu.item';

export function AppRoutes({ items }: { items: MenuItems }) {
    return (
        <Routes>
            <Route
                path={''}
                element={<PersonalDataPage></PersonalDataPage>}
            ></Route>
            <Route
                path={items[0].path}
                element={<PersonalDataPage></PersonalDataPage>}
            ></Route>
            <Route
                path={items[1].path}
                element={<AccesDataPage></AccesDataPage>}
            ></Route>
            <Route
                path={items[2].path}
                element={<Confirmation></Confirmation>}
            ></Route>
            <Route 
                path={items[3].path} 
                element={<Login></Login>}
            ></Route>
            <Route
                path={'*'}
                element={<Navigate to="" replace></Navigate>}
            ></Route>
        </Routes>
    );
}
