import React, { useEffect, useState } from 'react';
import './CablePlans.scss';
import axios from 'axios';
import AddCablePlansModal from "../../../components/Operator/Modals/AddCablePlans";
import CablePlanCard from "../../../components/Common/CablePlanCard";
import CablePlansDetailModal from "../../../components/Common/Modals/CablePlansDetail";
import { Button } from 'react-bootstrap';

const Index = () => {
    const [cablePlansDetails, setCablePlansDetails] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [cablePlanDetails, setCablePlanDetails] = useState({});
    const [openAddModal, setOpenAddModal] = useState(false);

    // Fetch data from the API
    useEffect(() => {
        const fetchInternetPlansDetails = async () => {
            const token = sessionStorage.getItem('authToken');
            const url = `${process.env.REACT_APP_BASE_URL}/vendors-connect/api/admin/master/cableplans/cableplans`;
    
            try {
                const response = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log("API Response:", response.data);
                setCablePlansDetails(response.data.data || []); // Fallback to empty array

                
            } catch (error) {
                console.error("Error fetching internet plans:", error);
            }
        };
    
        fetchInternetPlansDetails();
    }, []);
    

    // Handle modals
    const handleDetailModal = (status, data = {}) => {
        setOpenModal(status);
        setCablePlanDetails(data);
    };

    const handleAddModal = (status) => {
        setOpenAddModal(status);
    };

    // Handle saving new internet plans
    const handleSaveCablePlan = (newPlan) => {
        const validatedPlan = {
            id: newPlan?.id || Date.now(), // Generate fallback ID if missing
            ...newPlan,
        };
        setCablePlansDetails((prevDetails) => [...prevDetails, validatedPlan]);
    };
    

    return (
        <>
            <AddCablePlansModal
                show={openAddModal}
                onHide={() => handleAddModal(false)}
                onSave={handleSaveCablePlan}
            />
            <CablePlansDetailModal
                show={openModal}
                data={cablePlanDetails}
                onHide={() => handleDetailModal(false)}
            />
            <div className="content">
                <div className="topSection">
                    <div className="topSection--left">
                        <h3 className="topSection--left__title">Cable Plans</h3>
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
    {Array.isArray(cablePlansDetails) && cablePlansDetails.length > 0 ? (
        cablePlansDetails.map((data, index) => (
            <CablePlanCard
                key={data?.id || index}
                index={index}
                data={data}
                showModal={handleDetailModal}
            />
        ))
    ) : (
        <p>No cable plans available</p>
    )}
</div>

            </div>
        </>
    );
};

export default Index;
