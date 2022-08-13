import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Departamento } from "../../types/departamento";
import { requestBackend } from "../../util/requests";
import { removeAuthData } from "../../util/storage";
import "./styles.css";

function List() {
  const [dept, setDept] = useState<Departamento[]>([]);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    removeAuthData();
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: "/departments",
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setDept(response.data);
    });
  }, []);

  return (
    <div className="container-lista">
      <div className="container-text">
        {dept.map((d) => (
          <p>{d.name}</p>
        ))}
      </div>
      <div className="btn-lista">
        <button onClick={handleLogoutClick}>Sair</button>
      </div>
    </div>
  );
}

export default List;
