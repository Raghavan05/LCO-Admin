import React, { useEffect, useState } from 'react';
import './InternetPlans.scss';
import axios from 'axios';

import InternetPlanCard from "../../../components/Common/InternetPlanCard";
import InternetPlansDetail from "../../../components/Common/Modals/InternetPlansDetail";

// Fetch customer data

const Index = () => {
    const [internetPlansDetails, setInternetPlansDetails] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [internetPlans, setInternetPlans] = useState({});

    // Fetch data from the API
    useEffect(() => {
        const fetchInternetPlansDetails = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_BASE_URL}/vendors-connect/api/admin/master/internetplans/internetplans`,
                    {
                        headers: {
                            Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
                        },
                    }
                );
                console.log(response.data.data);
                setInternetPlansDetails(response.data.data);
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
        setInternetPlans(data);
    };

    return (
        <>
            <InternetPlansDetail
                show={openModal}
                data={internetPlans}
                onHide={() => openTaskDetailModal(false, {})}
            />
            <div className="content">
                <div className="topSection">
                    <div className="topSection--left">
                        <h3 className="topSection--left__title">
                            Internet Plans
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
                    {internetPlansDetails?.map((data,index) => (
                        <InternetPlanCard 
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
