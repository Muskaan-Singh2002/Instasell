import React from "react";
import TopCard from "../Card/TopCard";
import "./Top.css";

const Top: React.FC = () => {
  const handleButtonClick1 = () => {
    console.log("Button 1 clicked");
  };

  const handleButtonClick2 = () => {
    console.log("Button 2 clicked");
  };

  return (
    <>
      <h1 className="top-h1">Welcome, John Mathew!!</h1>
      <div className="top-cards">
        <TopCard
          wd="332px"
          heading="Order Sync Successful!"
          content="Your order details from the last 30 days have been successfully synced. Check them out now!"
          button1Label=""
          button1OnClick={handleButtonClick1}
          button2Label="Explore Your Orders"
          button2OnClick={handleButtonClick2}
          backColor="#FFFFFF"
        />
        <TopCard
          wd="332px"
          heading="Customize Customer Notification"
          content="Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers."
          button1Label=""
          button1OnClick={handleButtonClick1}
          button2Label="Configure Notifications"
          button2OnClick={handleButtonClick2}
          backColor="#FFF8DB"
        />
        <TopCard
          wd="332px"
          heading="Your Tracking Link has been generated"
          content={
            "Include the <a href='https://50d72d-5.myshopify.com/password' target='_blank'>Link</a> to Your Store's Navigation Menu."
          }
          button1Label="Copy Link"
          button1OnClick={handleButtonClick1}
          button2Label="Go To Navigation Menu"
          button2OnClick={handleButtonClick2}
          backColor="#EAF4FF"
        />
      </div>
    </>
  );
};

export default Top;
