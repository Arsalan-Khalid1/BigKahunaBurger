import React, {useEffect, useState} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxil from '../Auxil';

const withErrorHandler = (WrappedComponent, axios) => {


    return (props) => {

        const [error, setError] = useState(null);

        useEffect(()=>{
            axios.interceptors.request.use(req => {
                return req;
                setError(null);
            });
            axios.interceptors.response.use(res => res, error => {
                setError(error);
            });

        },[]);

        const errorConfirmHandler = () => {
            setError(null);
        };

        return (
            <Auxil>
                <Modal show={error} modalClosed={errorConfirmHandler}>
                    {error? error.message : null}
                </Modal>
                <WrappedComponent {...props} />
            </Auxil>
        );
    };
};

export default withErrorHandler;