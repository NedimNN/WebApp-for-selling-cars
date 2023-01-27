import React from 'react'
import { Container, Table, Col } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import reservationData from '../assets/data/reservationData'
import { useState } from 'react'

import '../styles/reservations.css'

const Reservations = () => {
    const options = [
        { value: '', text: 'Sort by' },
        { value: 'complete', text: 'Completed' },
        { value: 'notComplete', text: 'Not Completed' }
    ];
    const [selected, setSelected] = useState(options[0].value);
    const [res, setRes] = useState(reservationData);
    const sortReservations = event => {
        if (event.target.value === "complete") {
            var complete = [...reservationData].filter(x => x.status === true);
            setRes(complete);
            setSelected(event.target.text)
        }
        else if (event.target.value === "notComplete") {
            var not = [...reservationData].filter(x => x.status === false);
            setRes(not);
            setSelected(event.target.text)
        }
        else {
            setRes(reservationData);
        }
    }
    function setStatusForElement(id) {
        var state = [];
        res.forEach(element => {
            if (element.id === id) {
                element.status = !element.status;
                state.push(element);
            }
            else {
                state.push(element);
            }
        });
        setRes(state);
    }

    return <Helmet title='Inspection reservations'>
        <CommonSection title='Recent inspection reservations' />
        <Container className='mt-3'>
            <Col>
                <div className='d-flex align-items-center  gap-3 mb-5'>
                    <span className='d-flex align-items-center gap-2'>
                        <i className="ri-sort-desc"></i>
                    </span>
                    <select value={selected} onChange={sortReservations}>
                        {
                            options.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.text}
                                </option>
                            ))

                        }
                    </select>

                </div>
                <div className='table-out'>
                    <div className='table-in'>
                        <div className='table-parent'>

                            <Table className='table table-striped'>
                                <thead className='table-dark'>
                                    <tr>
                                        <th>
                                            <span className='fw-bold'>#</span>
                                        </th>
                                        <th>
                                            <span className='fw-bold'>First & Last Name</span>
                                        </th>
                                        <th>
                                            <span className='fw-bold'>Date of Inspection</span>
                                        </th>
                                        <th className='text-center fw-bold'>
                                            <span>Brand/Model/Year</span>
                                        </th>
                                        <th className='text-center fw-bold'>
                                            <span>Actions</span>
                                        </th>
                                        <th className='text-center fw-bold'>
                                            <span >Status</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        res.map(((item,index) => {
                                            return <tr key={item.id}>
                                                <td >
                                                    <span >{index+1}</span>
                                                </td>
                                                <td >
                                                    <span >{item.firstLastName}</span>
                                                </td>
                                                <td>
                                                    <span>{item.dateOfInspection}</span>
                                                </td>
                                                <td className='text-center' >
                                                    <span>{item.brandModelYear}</span>
                                                </td>
                                                <td className='text-center' >
                                                    <span ><button className='btn btn-success btn-sm' onClick={() => setStatusForElement(item.id)}>
                                                        Complete
                                                    </button></span>
                                                </td>
                                                <td className='text-center' >
                                                    {item.status === true &&
                                                        <span ><i className="ri-checkbox-fill text-warning fs-5"></i></span>
                                                    }
                                                    {item.status === false &&
                                                        <span><i className="ri-checkbox-blank-line text-warning fs-5"></i></span>
                                                    }
                                                </td>
                                            </tr>
                                        }))
                                    }
                                </tbody>
                            </Table>
                        </div>

                    </div>
                </div>

            </Col>

        </Container>
    </Helmet>
}

export default Reservations