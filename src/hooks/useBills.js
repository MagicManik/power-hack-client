import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const useBills = () => {
    const [bills, setBills] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        fetch(`https://upper-crown-54943.herokuapp.com/api/billing-list`)

            .then(res => {

                if (res.status === 401 || res.status === 403) {

                    localStorage.removeItem('accessToken');
                    navigate('/login');
                }

                return res.json();
            })

            .then(data => {
                setBills(data)
            });

    }, [bills, setBills, navigate]);

    return [bills, setBills];

};

export default useBills;