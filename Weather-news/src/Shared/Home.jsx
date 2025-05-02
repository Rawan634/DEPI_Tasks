import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="position-fixed top-50 start-50 translate-middle bg-white">
        <button className="bg-dark text-white cursor-pointer btn btn-secondary btn-lg" onClick={() => navigate("/weather")}>
          City Weather News
        </button>
        <button className="text-black bg-white cursor-pointer btn btn-secondary btn-lg" onClick={() => navigate("/weatherclass")}>
          City Weather News CLASS
        </button>
    </div>
  );
}

export default Home;
