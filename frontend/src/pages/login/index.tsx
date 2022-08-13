import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../util/auth";
import { requestBackendLogin } from "../../util/requests";
import { saveAuthData } from "../../util/storage";
import "./styles.css";

type Credentials = {
  username: string;
  password: string;
};

function Login() {
  const [hasError, setHasError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Credentials>();
  const navigate = useNavigate();

  useEffect(() => {
    isAuthenticated() && navigate("/lista");
  }, []);

  const onSubmit = (data: Credentials) => {
    requestBackendLogin(data)
      .then((response) => {
        saveAuthData(response.data);
        setHasError(false);
        navigate("/lista");
      })
      .catch((error) => {
        setHasError(true);
        console.log("ERRO", error);
      });
  };
  return (
    <div className="container-login">
      <div className="base-card container-form">
        <h1>LOGIN</h1>
        {hasError && <div className="login-erro">Erro ao efetuar o login</div>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              {...register("username", {
                required: "Campo obrigatório",
              })}
              type="text"
              placeholder="E-mail"
              className="base-input"
              name="username"
            />
            <div className="input-erro">{errors.username?.message}</div>
          </div>
          <div>
            <input
              {...register("password", {
                required: "Campo obrigatório",
              })}
              type="password"
              placeholder="Senha"
              className="base-input"
              name="password"
            />
            <div className="input-erro">{errors.password?.message}</div>
          </div>
          <div className="btn">
            <button>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
