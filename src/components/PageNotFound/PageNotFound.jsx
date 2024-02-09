import { Link } from "react-router-dom";
const PageNotFound = () => {
    
  return (
    <div style={{ textAlign: "center", marginTop: "70px" }}>
      <img src="https://img.freepik.com/free-vector/404-error-with-portals-concept-illustration_114360-7870.jpg?w=1060&t=st=1703063567~exp=1703064167~hmac=b6ef5d63869f79df0fe315bf81e23937cdc8f08fcc7036f844cc1fa0aab53b5d" />
      <h2 style={{ textAlign: "center", marginBottom:"10px", paddingBottom:"80px" }}>
        <Link to="/" style={{color:"red"}}>Go To Home</Link>
      </h2>
    </div>
  );
};

export default PageNotFound;
