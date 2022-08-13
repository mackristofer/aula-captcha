import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../../util/auth";

type Props = {
  children: JSX.Element;
  path: string;
};

const PrivateRoute = ({ children, path }: Props) => {
  return(!isAuthenticated() ? (
        <Navigate to={path} />
    ) : children)
};

export default PrivateRoute;
