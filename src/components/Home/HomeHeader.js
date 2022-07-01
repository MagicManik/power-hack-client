import React, { useEffect, useState } from 'react';
import useBills from '../../hooks/useBills';
import AddBill from './AddBill';
import Table from './Table';

const HomeHeader = () => {

    const [bills, setBills] = useBills();

    // others
    const [addBill, setAddBill] = useState(false);

    const handleShow = () => setAddBill(true);

    // pageCount state
    const [pageCount, setPageCount] = useState(0);



    // table
    // const [bills, setBills] = useState([]);

    const [searchResult, setSearchResult] = useState(bills);

    const handleSearch = event => {
        const searchText = event.target.value;
        const result = bills.filter(bill => ((bill.name.toLowerCase()).includes(searchText.toLowerCase()) || (bill.email.toLowerCase()).includes(searchText.toLowerCase()) || (bill.phone.toLowerCase()).includes(searchText.toLowerCase())));
        setSearchResult(result);
    }



    useEffect(() => {

        fetch(`http://localhost:5000/api/billing-list`)

            .then(res => {

                if (res.status === 401 || res.status === 403) {

                    /* signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/'); */
                }

                return res.json();
            })

            .then(data => {
                setSearchResult(data)
            });

    }, [bills]);


    // to create pagination
    // collect product length
    useEffect(() => {
        fetch('http://localhost:5000/billCount')
            .then(res => res.json())
            .then(data => {
                const totalProduct = data.count;
                const totalPage = Math.ceil(totalProduct / 10);
                setPageCount(totalPage);
            })
    }, [])



    return (
        <div>
            <div className='flex justify-between items-center p-2 w-11/12 mx-auto mt-12 mb-6 custom-bg rounded'>
                <div className='flex items-center'>
                    <h3 className='px-8 text-xl text-white font-bold'>Billings</h3>
                    <div className="form-control">
                        <div className="input-group h-4/5">

                            {/* search input field */}
                            <input type="text" onChange={handleSearch} placeholder="Search…" className="input input-bordered" />

                            <button className="btn btn-small text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="add-bill" className="btn btn-wide text-white font-bold" onClick={handleShow}>Add New Bill</label>
                </div>
            </div>
            {
                addBill && <AddBill
                    addBill={addBill}
                    setAddBill={setAddBill}
                ></AddBill>
            }

            <div>

                <div class="overflow-x-auto w-11/12 mx-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>Billing Id</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Paid amount</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        {
                            searchResult.map(bill =>
                                <Table key={bill._id} bill={bill}>

                                </Table>
                            )
                        }
                        {/* create pagination button */}
                        <div>
                            {
                                [...Array(pageCount).keys()].map(number =>
                                    <button>{number + 1}</button>)
                            }
                        </div>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default HomeHeader;