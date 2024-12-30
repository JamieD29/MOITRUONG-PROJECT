import { NavLink } from "react-router";
import Logo from "../../assets/img/logo-main.png";

const Navbar = () => {
  return (
    <div className="header-area">
      <div className="sticky-area">
        <div className="navigation">
          <div className="container-fluid">
            <div className="header-inner-box">
              <div className="logo">
                <a className="navbar-brand" href="index.html">
                  <img src={Logo} alt="" style={{ width: "50%" }} />
                </a>
                <h5>Saigon Xanh</h5>
              </div>
              <div className="main-menu">
                <nav className="navbar navbar-expand-lg">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                    <span className="navbar-toggler-icon" />
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div
                    className="collapse navbar-collapse justify-content-center"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav m-auto">
                      <li className="nav-item">
                        <NavLink className="nav-link active" to="/">
                          Trang chủ
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/dichvu">
                          Dịch vụ
                          <span className="sub-nav-toggler"> </span>
                        </NavLink>
                        <ul className="sub-menu">
                          <li>
                            <NavLink to="/dichvu/chatThai-sinhHoat">Chất thải sinh hoạt</NavLink>
                          </li>
                          <li>
                            <NavLink to="/dichvu/chatThai-congNghiep">Chất thải công nghiệp</NavLink>
                          </li>
                          <li>
                            <NavLink to="/dichvu/chatThai-xayDung">Chất thải xây dựng</NavLink>
                          </li>
                          <li>
                            <NavLink to="/dichvu/chatThai-taiChe">
                              Chất thải tái chế
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/linhvuc">
                          Lĩnh vực hoạt động
                          <span className="sub-nav-toggler"> </span>
                        </NavLink>
                        <ul className="sub-menu">
                          <li>
                            <a href="project.html">Project</a>
                          </li>
                          <li>
                            <a href="project-details.html">Project Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="">
                          Tin tức
                         
                        </NavLink>
              
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/lienhe">
                          Contact
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="icon-wrapper">
                <div className="search-icon search-trigger">
                  <i className="las la-search" />
                </div>
                <div className="shopping-cart">
                  <i className="las la-shopping-cart" />
                </div>
              </div>
              <div className="header-btn">
                <a href="quotation.html" className="main-btn primary">
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
