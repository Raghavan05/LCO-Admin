import React, { useState } from "react";
import "./ServiceAreaCard.scss";
import Card from "react-bootstrap/Card";
import EditServiceAreaModal from "../../Operator/Modals/EditServiceArea"; // Adjust the import path as needed

const Index = (props) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedServiceArea, setSelectedServiceArea] = useState(null);

  const handleOpenDetailModal = (status) => {
    props.showModal(status, props?.data);
  };

  const handleEditClick = () => {
    setSelectedServiceArea(props.data); // Pass the selected service area details
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  // Generate dynamic styles based on pincode
//   const getPincodeStyle = (pincode) => {
//   if (!pincode) return {};

//   // Professional and modern color palette
//   const colors = [
//     "#FF6F61", // Vibrant coral
//     "#6A9FB5", // Soothing blue-gray
//     "#FFD700", // Rich gold
//     "#8A2BE2", // Deep purple
//     "#5F9EA0", // Calming teal
//   ];

//   const index = parseInt(pincode.slice(-1), 10) % colors.length; // Use the last digit to determine the color
//   return {
//     color: colors[index],
//     fontWeight: "bold",
//     fontSize: "1.3rem",
//     textShadow: `0px 0px 8px ${colors[index]}`, // Add a subtle glow effect
//     animation: "pulse 2s infinite ease-in-out", // Smooth pulsing effect
//     transition: "transform 0.3s, text-shadow 0.3s", // Smooth transitions
//     cursor: "pointer", // Pointer to indicate interactivity
//   };
// };

const getPincodeStyle = (pincode) => {
    if (!pincode) return {};
    const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFC300", "#C70039"];
    const index = parseInt(pincode.slice(-1), 10) % colors.length; // Use the last digit to pick a color
    return {
      color: colors[index],
      animation: "pulse 1.5s infinite",
      fontWeight: "bold",
      fontSize: "1.2rem",
    };
  };


  return (
    <>
      <Card className="serviceCard" style={{ width: "20rem" }}>
        <Card.Header className="serviceCard__header">
          <h5 className="serviceCard__header--title">
            {"Service Area : " + (props.index + 1)}
          </h5>
          <div className="serviceCard__header__status">
            <p
              className="serviceCard__header__status--pincode"
              style={getPincodeStyle(props?.data?.pinCode)}
            >
              {props?.data?.pinCode}
            </p>
          </div>
        </Card.Header>
        <Card.Body className="serviceCard__body">
          <Card.Text as="p" className="serviceCard__body--text">
            {props?.data?.serviceAreaName}
          </Card.Text>
          <div
            className="serviceCard__actions"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <h6
              className="serviceCard__body--anchor"
              onClick={handleOpenDetailModal}
            >
              View Detail
            </h6>
            <h6
              className="serviceCard__body--anchor"
              onClick={handleEditClick}
            >
              Edit
            </h6>
          </div>
        </Card.Body>
      </Card>

      {/* Edit Modal */}
      {showEditModal && (
        <EditServiceAreaModal
          show={showEditModal}
          onHide={handleCloseEditModal}
          serviceArea={selectedServiceArea} // Pass service area data to the modal
          onSave={(data) => console.log("Saved Data:", data)} // Example handler
        />
      )}
    </>
  );
};

export default Index;
