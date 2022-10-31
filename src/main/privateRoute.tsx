import React, { useEffect } from 'react'
import {
    useAppSelector,
    useAppDispatch
} from '../app/hooks';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ page }: { page: JSX.Element }) => {
    const { isSuccess, isAuthenticated, jwt } = useAppSelector(
        (state) => state.auth
    );

    //const dispatch = useAppDispatch();

    useEffect(() => {
        if (!jwt || !jwt?.token) return;
        if (localStorage.getItem('jwt') != null) {

        }

    }, [jwt, isSuccess]);

    return isAuthenticated ? page : <Navigate replace to='/register' />;
};


export default PrivateRoute