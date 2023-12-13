import React from "react";

const footerStyle: React.CSSProperties = {
  padding: "1rem",
  textAlign: "center",
  color: "white",
  fontWeight: "bold",
};

export default function Footer() {
  return (
    <div style={footerStyle} className="bg-[#092635]">
      <p className="pb-10">
        All right reserved & Copyright &#169; {new Date().getFullYear()}.
      </p>
    </div>
  );
}
