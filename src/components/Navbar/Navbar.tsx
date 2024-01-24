import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-items">
        <p
          style={{
            borderBottom: "2px solid #8051FF",
            width: "24px",
            marginRight: "50px",
          }}
        >
          Home
        </p>
        <p>Orders</p>
        <p>Integrations</p>
        <p>
          Tracking Page &nbsp;<i className="fa-solid fa-chevron-down"></i>
        </p>
        <p>Partner with Us</p>
      </div>
      <div className="right-items">
        <div style={{ display: "flex" }}>
          <i
            className="fa-solid fa-magnifying-glass"
            style={{ borderBottom: "2px solid black" }}
          ></i>
          <input
            style={{
              border: "none",
              outline: "none",
              borderBottom: "2px solid black",
              paddingLeft: "10px",
              marginTop: "0px",
            }}
            placeholder="Search"
            type="text"
          ></input>
        </div>
        <p>
          <i className="fa-solid fa-user"></i>&nbsp;&nbsp;Account
        </p>
        <p>
          <i className="fa-solid fa-gear"></i>&nbsp;&nbsp;Settings
        </p>
      </div>
    </div>
  );
};

export default Navbar;
