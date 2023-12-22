import React from "react";

const footerStyle: React.CSSProperties = {
  padding: "1rem",
  textAlign: "center",
  fontWeight: "bold",
};

export default function Footer() {
  return (
    <div style={footerStyle} className="bg-footer">
      <p className="pb-10 text-primary">
        All right reserved & Copyright &#169; {new Date().getFullYear()}.
      </p>
    </div>
  );
}
