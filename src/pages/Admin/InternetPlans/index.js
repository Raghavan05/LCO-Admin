import React, { useEffect, useState } from 'react';
import './InternetPlans.scss';
import axios from 'axios';
import AddInternetPlansModal from "../../../components/Operator/Modals/AddInternetPlans";
import InternetPlanCard from "../../../components/Common/InternetPlanCard";
import InternetPlansDetailModal from "../../../components/Common/Modals/InternetPlansDetail";
import { Button } from 'react-bootstrap';

const Index = () => {
    const [internetPlansDetails, setInternetPlansDetails] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [internetPlanDetails, setInternetPlanDetails] = useState({});
    const [openAddModal, setOpenAddModal] = useState(false);

    // Fetch data from the API
    useEffect(() => {
        const fetchInternetPlansDetails = async () => {
            const token = sessionStorage.getItem('authToken');
            const url = `${process.env.REACT_APP_BASE_URL}/vendors-connect/api/admin/master/internetplans/internetplans`;
    
            try {
                const response = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log("API Response:", response.data);
                setInternetPlansDetails(response.data.data || []); // Fallback to empty array
            } catch (error) {
                console.error("Error fetching internet plans:", error);
            }
        };
    
        fetchInternetPlansDetails();
    }, []);
    

    // Handle modals
    const handleDetailModal = (status, data = {}) => {
        setOpenModal(status);
        setInternetPlanDetails(data);
    };

    const handleAddModal = (status) => {
        setOpenAddModal(status);
    };

    // Handle saving new internet plans
    const handleSaveInternetPlan = (newPlan) => {
        const validatedPlan = {
            id: newPlan?.id || Date.now(), // Generate fallback ID if missing
            ...newPlan,
        };
        setInternetPlansDetails((prevDetails) => [...prevDetails, validatedPlan]);
    };
    

    return (
        <>
            <AddInternetPlansModal
                show={openAddModal}
                onHide={() => handleAddModal(false)}
                onSave={handleSaveInternetPlan}
            />
            <InternetPlansDetailModal
                show={openModal}
                data={internetPlanDetails}
                onHide={() => handleDetailModal(false)}
            />
            <div className="content">
                <div className="topSection">
                    <div className="topSection--left">
                        <h3 className="topSection--left__title">Internet Plans</h3>
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
    {Array.isArray(internetPlansDetails) && internetPlansDetails.length > 0 ? (
        internetPlansDetails.map((data, index) => (
            <InternetPlanCard
                key={data?.id || index}
                index={index}
                data={data}
                showModal={handleDetailModal}
            />
        ))
    ) : (
        <p>No internet plans available</p>
    )}
</div>

            </div>
        </>
    );
};

export default Index;
