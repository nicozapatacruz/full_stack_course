import React from "react";
import image from "../assets/images/Logo_solo_pirupi.jpg";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <React.Fragment>
      {/*<!-- Sidebar -->*/}
      <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
        {/*<!-- Sidebar - Brand -->*/}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
          <div className="sidebar-brand-icon">
            <img className="w-100 margin-pirupi" /*style={{ marginTop: "100px" }}*/ src={image} alt="Pirupi" />
          </div>
        </a>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0" />

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
          <Link className="nav-link" to="/ContentWrapper">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - Pirupi Games</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Actions</div>

        {/*<!-- LastProductInDb -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/LastProductInDb" exact="true">
            <i className="fas fa-fw fa-table"></i>
            Último producto en BD
          </Link>
        </li>

        {/*<!-- ConsolesInDb -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/ConsolesInDb" exact="true">
            <i className="fas fa-fw fa-table"></i>
            Consolas en BD
          </Link>
        </li>

        {/*<!-- UsersInDb -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/DataInDb" exact="true">
            <i className="fas fa-fw fa-table"></i>
            Usuarios en BD
          </Link>
        </li>

        {/*<!-- ProductsInDb -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/ProductsInDb" exact="true">
            <i className="fas fa-fw fa-table"></i>
            Productos en BD
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/*<!-- End of Sidebar -->*/}
    </React.Fragment>
  );
}
export default SideBar;
