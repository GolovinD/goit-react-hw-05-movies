import { Link, useLocation } from "react-router-dom";

const ButtonBack = () => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/movies';

  return (
    <div>
      <Link to={backLinkHref}>
        Go back
      </Link>
    </div>
  )
};

export default ButtonBack;