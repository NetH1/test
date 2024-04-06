import logo from "../../../assets/photos/logo.png";
import loupe from "../../../assets/photos/loupe.png";
import ministar from "../../../assets/photos/ministar.png";

export const Header = () => {
  return (
    <header style={{marginTop:40}} className="d-flex gap-5">
      <div>
      <img src={logo} alt="" />
      <div className="d-flex justify-content-evenly align-items-stretch border border-black rounded-3 h-auto mt-3">
        <span>Фильтры</span> <span style={{color:"#FDD446"}}>▼</span>
      </div>
      </div>
      <div className="w-100 h-auto position-relative">
        <div style={{zIndex:999, background: 'white'}} className="position-absolute border border-black rounded-3 w-100 h-auto">
          <div className="d-flex align-items-center p-1">
            <img className="me-2" style={{ width: "30px" }} src={loupe} alt="" />
            <span className="fs-5">Анастасия</span>
          </div>
          <div style={{ background: "#FEF6D6", padding: "4px 8px" }} className="d-flex align-items-center p-1">
            <img className="me-2" src={ministar} alt="" />
            <span className="fs-4 fw-bolder">Анастасия Ивлеева</span>
          </div>
          <div className="d-flex align-items-center p-1">
            <img className="me-2" src={ministar} alt="" />
            <span className="fs-4 fw-bolder">Анастасия Ивлеева</span>
          </div>
          <div className="d-flex align-items-center p-1">
            <img className="me-2" src={ministar} alt="" />
            <span className="fs-4 fw-bolder">Анастасия Ивлеева</span>
          </div>
        </div>
      </div>
    </header>
  );
};
