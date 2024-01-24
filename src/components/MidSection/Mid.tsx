import MidCard from "../Card/MidCard";
import "./Mid.css";
import Chart from "./Chart";

const Mid: React.FC = () => {
  const handleButtonClick1 = () => {
    console.log("Button 1 clicked");
  };

  const handleButtonClick2 = () => {
    console.log("Button 2 clicked");
  };
  return (
    <div className="mid-parent">
      <h1 className="mid-h1">Instant Dive into Your Performance Metrics</h1>
      <div className="options" style={{ marginLeft: "68px" }}>
        <span
          style={{
            backgroundColor: "#F8F7FF",
            border: "1px solid #8051FF",
          }}
        >
          Lifetime
        </span>
        <span style={{ backgroundColor: "white" }}>Last Week</span>
        <span style={{ backgroundColor: "white" }}>Last Month</span>
        <span style={{ backgroundColor: "white" }}>Last Year</span>
        <span style={{ backgroundColor: "white" }}>
          Customize Time Line &nbsp;&nbsp;&nbsp;&nbsp;
          <i className="fa-solid fa-calendar"></i>
        </span>
      </div>
      <div className="top-cards">
        <div
          style={{
            border: "1px solid #cccac9",
            padding: "16px 16px 24px 16px",
            borderRadius: "12px",
            width: "447px",
            height: "368px",
            marginTop: "64px",
            marginLeft: "16px",
            backgroundColor: `white`,
            overflowX: "auto",
            overflow: "hidden",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <h2
              style={{
                marginBottom: "16px",
                fontSize: "14px",
                fontWeight: "650",
                marginLeft: "-100px",
              }}
            >
              {"Shipment Updates"}
            </h2>
            <p
              style={{
                marginBottom: "24px",
                fontSize: "13px",
                fontWeight: "450",
                lineHeight: "20px",
                marginRight: "-100px",
              }}
            >
              {"Total Orders : 394"}
            </p>
          </div>
          <div
            className="options"
            style={{ overflowX: "auto", overflow: "hidden" }}
          >
            <span
              style={{ backgroundColor: "#FFF1E3", border: "1px solid gray" }}
            >
              Delivered
            </span>
            <span>Out for delivery</span>
            <span>Intransit</span>
            <span>Pending</span>
            <span>Exception</span>
          </div>
          <div
            style={{
              position: "absolute",
              marginTop: "86px",
              marginLeft: "160px",
              zIndex: "1",
            }}
          >
            40
          </div>
          <Chart />
          <div className="legend">
            <div className="top-legend" style={{ display: "flex" }}>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "10px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#5E4200",
                    width: "20px",
                    height: "10px",
                    borderRadius: "8px",
                  }}
                ></div>
                &nbsp;&nbsp;Exception
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "10px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#956F00",
                    width: "20px",
                    height: "10px",
                    borderRadius: "8px",
                  }}
                ></div>
                &nbsp;&nbsp;Intransit
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "10px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#E5A500",
                    width: "20px",
                    height: "10px",
                    borderRadius: "8px",
                  }}
                ></div>
                &nbsp;&nbsp;Pending
              </span>
            </div>
            <div
              className="down-legend"
              style={{ marginTop: "15px", display: "flex" }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "10px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#FFC879",
                    width: "20px",
                    height: "10px",
                    borderRadius: "8px",
                  }}
                ></div>
                &nbsp;&nbsp;Delivered
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "10px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#FFDDB6",
                    width: "20px",
                    height: "10px",
                    borderRadius: "8px",
                  }}
                ></div>
                &nbsp;&nbsp;Out for delivery
              </span>
            </div>
          </div>
        </div>
        <span
          className="circle"
          style={{
            position: "absolute",
            marginTop: "290px",
            marginLeft: "693px",
            mixBlendMode: "soft-light",
          }}
        ></span>
        <MidCard
          heading="Star Facts about your orders!!!"
          content="<br/>There are 8 shipments that have been in out for delivery for more than 3 days.<br/><br/>There are 5 shipments in exception right now<br/><br/>The maximum chargebacks are from Miami.<br/><br/>"
          button1Label="Check Orders Page"
          button1OnClick={handleButtonClick1}
          button2Label=""
          button2OnClick={handleButtonClick2}
          backColor="#956F00"
        />
        <div
          style={{
            border: "1px solid #cccac9",
            padding: "16px 16px 24px 16px",
            borderRadius: "12px",
            width: "447px",
            height: "368px",
            marginTop: "64px",
            marginLeft: "16px",
            backgroundColor: `white`,
          }}
        >
          <h2
            style={{
              marginBottom: "16px",
              fontSize: "14px",
              fontWeight: "650",
            }}
          >
            {"Tracking Page Views Vs Orders"}
          </h2>
          <p
            style={{
              marginBottom: "24px",
              fontSize: "13px",
              fontWeight: "450",
              lineHeight: "20px",
            }}
          >
            {
              "Understand user engagement patterns and optimize your tracking page for enhanced customer experiences."
            }
          </p>
          <div
            style={{
              marginTop: "26px",
              backgroundColor: "#FFEBD5",
              display: "flex",
              justifyContent: "space-between",
              height: "104px",
              borderRadius: "6px",
            }}
          >
            <div style={{ padding: "16px" }}>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "550",
                }}
              >
                Orders
              </p>
              <p
                style={{
                  fontSize: "36px",
                  marginTop: "-10px",
                  fontWeight: "700",
                }}
              >
                80
              </p>
            </div>
            <div style={{ marginTop: "24px", marginRight: "30px" }}>
              <i className="fa-solid fa-inbox fa-3x"></i>
            </div>
          </div>
          <div
            style={{
              marginTop: "26px",
              backgroundColor: "#FFC879",
              display: "flex",
              justifyContent: "space-between",
              height: "104px",
              borderRadius: "6px",
            }}
          >
            <div style={{ padding: "16px" }}>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "550",
                }}
              >
                Tracking Page Views
              </p>
              <p
                style={{
                  fontSize: "36px",
                  marginTop: "-10px",
                  fontWeight: "700",
                }}
              >
                44
              </p>
            </div>
            <div style={{ marginTop: "24px", marginRight: "30px" }}>
              <i className="fa-solid fa-eye fa-3x"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mid;
