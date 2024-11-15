import React, { useEffect, useState } from 'react';
import './ServiceArea.scss';
import axios from 'axios';

import ServiceAreaCard from "../../../components/Common/ServiceAreaCard";
import ServiceAreaDetails from "../../../components/Common/Modals/ServiceAreaDetail";

// Fetch customer data

const Index = () => {
    const [serviceAreaDetails, setServiceAreaDetails] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [serviceArea, setServiceArea] = useState({});

    // Fetch data from the API
    useEffect(() => {
        const fetchInternetPlansDetails = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_BASE_URL}/vendors-connect/api/admin/master/serviceareas/serviceareas`,
                    {
                        headers: {
                            Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
                        },
                    }
                );
                console.log(response.data.data);
                setServiceAreaDetails(response.data.data);
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
        setServiceArea(data);
    };

    return (
        <>
            <ServiceAreaDetails
                show={openModal}
                data={serviceArea}
                onHide={() => openTaskDetailModal(false, {})}
            />
            <div className="content">
                <div className="topSection">
                    <div className="topSection--left">
                        <h3 className="topSection--left__title">
                            Service Area
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
                    {serviceAreaDetails?.map((data,index) => (
                        <ServiceAreaCard 
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
