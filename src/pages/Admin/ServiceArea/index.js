import React, { useEffect, useState } from 'react';
import './ServiceArea.scss';
import axios from 'axios';
import AddServiceAreaModal from "../../../components/Operator/Modals/AddServiceArea";
import ServiceAreaCard from "../../../components/Common/ServiceAreaCard";
import ServiceAreaDetailModal from "../../../components/Common/Modals/ServiceAreaDetail";
import { Button } from 'react-bootstrap';

const Index = () => {
    const [serviceAreasDetails, setServiceAreasDetails] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [serviceAreaDetails, setServiceAreaDetails] = useState({});
    const [openAddModal, setOpenAddModal] = useState(false);

    // Fetch data from the API
    useEffect(() => {
        const fetchInternetPlansDetails = async () => {
            const token = sessionStorage.getItem('authToken');
            const url = `${process.env.REACT_APP_BASE_URL}/vendors-connect/api/admin/master/serviceareas/serviceareas`;
    
            try {
                const response = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log("API Response:", response.data);
                setServiceAreasDetails(response.data.data || []); // Fallback to empty array

                
            } catch (error) {
                console.error("Error fetching internet plans:", error);
            }
        };
    
        fetchInternetPlansDetails();
    }, []);
    

    // Handle modals
    const handleDetailModal = (status, data = {}) => {
        setOpenModal(status);
        setServiceAreaDetails(data);
    };

    const handleAddModal = (status) => {
        setOpenAddModal(status);
    };

    // Handle saving new internet plans
    const handleSaveServiceArea = (newArea) => {
        const validatedArea = {
            id: newArea?.id || Date.now(), // Generate fallback ID if missing
            ...newArea,
        };
        setServiceAreasDetails((prevDetails) => [...prevDetails, validatedArea]);
    };
    

    return (
        <>
            <AddServiceAreaModal
                show={openAddModal}
                onHide={() => handleAddModal(false)}
                onSave={handleSaveServiceArea}
            />
            <ServiceAreaDetailModal
                show={openModal}
                data={serviceAreaDetails}
                onHide={() => handleDetailModal(false)}
            />
            <div className="content">
                <div className="topSection">
                    <div className="topSection--left">
                        <h3 className="topSection--left__title">Service Area</h3>
                    </div>
                    <div className="topSection--right">
                        <div className="filter-widget">
                            <p>Filter</p>
                            <span className="filter-widget__cover">
                                <i className="bi bi-filter"></i>
                            </span>
                        </div>
                        <Button
                            variant="primary"
                            className="primary-btn"
                            onClick={() => handleAddModal(true)}
                        >
                            <i className="bi bi-plus"></i> Add
                        </Button>
                    </div>
                </div>
                <div className="bottomSection">
    {Array.isArray(serviceAreasDetails) && serviceAreasDetails.length > 0 ? (
        serviceAreasDetails.map((data, index) => (
            <ServiceAreaCard
                key={data?.id || index}
                index={index}
                data={data}
                showModal={handleDetailModal}
            />
        ))
    ) : (
        <p>No Service Areas available</p>
    )}
</div>

            </div>
        </>
    );
};

export default Index;
