import Breadcrumb from "react-bootstrap/Breadcrumb";
import Searchbar from "./Searchbar";

const Breadcrumbs = ({ title }) => {
  return (
    <div
      style={{
        backgroundImage: "url('images/user-hero-bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "#fff",
        padding: " 0px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* ✅ Full-width wrapper for Searchbar */}
      <div style={{ width: "90%", maxWidth: "1200px" }}>
        <Searchbar />
      </div>

      {/* ✅ Center the title and breadcrumb separately */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2 style={{ fontWeight: "600" }}>{title}</h2>
        <Breadcrumb className="justify-content-center mt-3">
          <Breadcrumb.Item href="/home" className="text-white">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="text-light">
            <span> &gt; {title}</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default Breadcrumbs;