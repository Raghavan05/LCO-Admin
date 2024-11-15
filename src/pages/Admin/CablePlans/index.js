import React, { useEffect, useState } from 'react';
import './CablePlans.scss';
import axios from 'axios';

import CablePlanCard from "../../../components/Common/CablePlanCard";
import CablePlanDetails from "../../../components/Common/Modals/CablePlansDetail";

// Fetch customer data

const Index = () => {
    const [cablePlansDetails, setCablePlansDetails] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [cablePlans, setCablePlans] = useState({});

    // Fetch data from the API
    useEffect(() => {
        const fetchInternetPlansDetails = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_BASE_URL}/vendors-connect/api/admin/master/cableplans/cableplans`,
                    {
                        headers: {
                            Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
                        },
                    }
                );
                console.log(response.data.data);
                setCablePlansDetails(response.data.data);
            } catch (error) {
                console.error("Error fetching customer data:", error);
                // Optionally show an error state to the user
            }
        };

        fetchInternetPlansDetails();
    }, []);

    // Handle modal opening
    const openTaskDetailModal = (status, data) => {
        setOpenModal(status);
        setCablePlans(data);
    };

    return (
        <>
            <CablePlanDetails
                show={openModal}
                data={cablePlans}
                onHide={() => openTaskDetailModal(false, {})}
            />
            <div className="content">
                <div className="topSection">
                    <div className="topSection--left">
                        <h3 className="topSection--left__title">
                            Cable Plans
                        </h3>
                    </div>
                    <div className="topSection--right">
                        <div className="filter-widget">
                            <p>Filter</p>
                            <span className="filter-widget__cover">
                                <i className="bi bi-filter filter-widget__cover"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="bottomSection">
                    {cablePlansDetails?.map((data,index) => (
                        <CablePlanCard 
                            index = {index}
                            key={data.id} // Assuming data has an `id` field
                            data={data} 
                            showModal={openTaskDetailModal}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Index;
