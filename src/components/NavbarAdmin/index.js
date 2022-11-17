import "./index.css";
import { Link, NavLink, useNavigate } from "react-router-dom";


const NavbarAdmin = () => {
    let navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate("/")
        window.location.reload()
    }

    return (
        <div className="">
        <nav className="navbar navbar-expand-lg">
            <Link to="/" className="nav-link mx-3">
            <h3 className="fw-bold">AdminBukaAda</h3>
            </Link>
            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>

            <div
            className="collapse navbar-collapse mx-4"
            id="navbarSupportedContent"
            >
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                <NavLink
                    to="/admin/home"
                    className="nav-link col2-item m-auto"
                    style={({ isActive }) => ({
                    color: isActive ? "#DE6C83" : "black",
                    })}
                >
                    Home
                </NavLink>
                </li>
                {localStorage.getItem("token") &&
                    <li className="nav-item">
                    <NavLink
                        to="/admin/rekap"
                        className="nav-link col2-item m-auto"
                        style={({ isActive }) => ({
                        color: isActive ? "#DE6C83" : "black",
                        })}
                    >
                        Rekap Penjualan
                    </NavLink>
                    </li>
                }
                <li className="nav-item">
                <NavLink
                    to="/about"
                    className="nav-link col2-item m-auto"
                    style={({ isActive }) => ({
                    color: isActive ? "#DE6C83" : "black",
                    })}
                >
                    About
                </NavLink>
                </li>
                {!localStorage.getItem("token") &&
                    <li className="nav-item">
                    <NavLink
                        to="/login"
                        className="nav-link col2-item m-auto"
                        style={({ isActive }) => ({
                        color: isActive ? "#DE6C83" : "black",
                        })}
                    >
                        Login
                    </NavLink>
                    </li>
                }
                <li className="nav-item">
                    {localStorage.getItem("token") &&
                        <button className = "btn btn-danger" onClick={()=>handleLogout()}>
                            Logout
                        </button>
                    }
                </li>
            </ul>
            </div>
        </nav>
        </div>
    )
}
  
export default NavbarAdmin