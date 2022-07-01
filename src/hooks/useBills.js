import { useEffect, useState } from "react";

const useBills = () => {
    const [bills, setBills] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/billing-list')
            .then(req => req.json())
            .then(data => setBills(data));
    }, [])

    return [bills, setBills];

};

export default useBills;