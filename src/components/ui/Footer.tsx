import Image from "next/image";
import signature from "@/assets/signature.png";

const footerStyle: React.CSSProperties = {
  padding: "1rem",
  textAlign: "center",
  fontWeight: "bold",
};

export default function Footer() {
  return (
    <div style={footerStyle} className="bg-footer">
      <h1 className="text-3xl text-primary font-sans pt-3 italic decoration-slice decoration-gray-50">Azizul Haque Tousif</h1>
      <p className="text-primary">Full Stack Web Developer</p>
      <p className="pb-10 text-primary">
        All right reserved & Copyright &#169; {new Date().getFullYear()}.
      </p>
    </div>
  );
}
