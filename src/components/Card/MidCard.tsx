import React from "react";

interface CardProps {
  heading: string;
  content: string;
  button1Label: string;
  button1OnClick: () => void;
  button2Label: string;
  button2OnClick: () => void;
  backColor: string;
}

const MidCard: React.FC<CardProps> = ({
  heading,
  content,
  button1Label,
  button1OnClick,
  button2Label,
  button2OnClick,
  backColor,
}) => {
  return (
    <div
      style={{
        border: "1px solid #cccac9",
        padding: "16px 16px 24px 16px",
        borderRadius: "12px",
        width: "216px",
        height: "368px",
        marginTop: "64px",
        marginLeft: "16px",
        backgroundColor: `${backColor}`,
        color: "white",
      }}
    >
      <h2
        style={{
          marginBottom: "16px",
          fontSize: "14px",
          fontWeight: "650",
          maxWidth: "156px",
        }}
      >
        {heading}
      </h2>
      <p
        style={{
          marginBottom: "24px",
          fontSize: "13px",
          fontWeight: "450",
          maxWidth: "156px",
          lineHeight: "20px",
        }}
        dangerouslySetInnerHTML={{ __html: content }}
      ></p>
      <div>
        {button1Label && (
          <button
            style={{
              borderRadius: "8px",
              border: "1px solid #cccac9",
              backgroundColor: "white",
              padding: "6px 12px",
              color: "#303030",
              marginRight: "12px",
            }}
            onClick={button1OnClick}
          >
            {button1Label}
          </button>
        )}
        {button2Label && (
          <button
            onClick={button2OnClick}
            style={{
              borderRadius: "8px",
              backgroundColor: "#303030",
              padding: "6px 12px",
              color: "white",
            }}
          >
            {button2Label}
          </button>
        )}
      </div>
    </div>
  );
};

export default MidCard;
