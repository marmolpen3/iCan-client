import logo from '../images/ican_logo.png';
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <header className="container">
        <div className="row mt-3">
          <div className="col-4 offset-4 text-center">
          <Link to="/">
              <img src={logo} className="img-fluid header-logo" alt="iCan logo" />
            </Link>
          </div>
          {/* <div className="col-2 text-end py-2">
            <Link to="/">
              <img src={perfil} className="img-fluid align-middle header-perfil" alt="Perfil" />
            </Link>
          </div> */}
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;