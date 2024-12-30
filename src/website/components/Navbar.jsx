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
                        <a className="nav-link active" href="#">
                          Home
                          <span className="sub-nav-toggler"> </span>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="index.html">Home-1</a>
                          </li>
                          <li>
                            <a href="index-2.html">Home-2</a>
                          </li>
                          <li>
                            <a href="index-3.html">Home-3</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Pages
                          <span className="sub-nav-toggler"> </span>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="about.html">About Us</a>
                          </li>
                          <li>
                            <a href="services.html">Service List</a>
                          </li>
                          <li>
                            <a href="team.html">Ecofix Team</a>
                          </li>
                          <li>
                            <a href="faq.html">Helpful FAQ</a>
                          </li>
                          <li>
                            <a href="price.html">Pricing Plans</a>
                          </li>
                          <li>
                            <a href="quotation.html">Get Quotation</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Services
                          <span className="sub-nav-toggler"> </span>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="paper_recycle.html">Paper Recycling</a>
                          </li>
                          <li>
                            <a href="plastic_recycle.html">Plastic Recycling</a>
                          </li>
                          <li>
                            <a href="glass_recycle.html">Glass Recycling</a>
                          </li>
                          <li>
                            <a href="aluminium_recycle.html">
                              Aluminium Recycling
                            </a>
                          </li>
                          <li>
                            <a href="electronics_recycle.html">
                              Electrical Recycling
                            </a>
                          </li>
                          <li>
                            <a href="metal_recycle.html">Metal Recycling</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Project
                          <span className="sub-nav-toggler"> </span>
                        </a>
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
                        <a className="nav-link" href="#">
                          Blog
                          <span className="sub-nav-toggler"> </span>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="blog-standard.html">Blog-Standard</a>
                          </li>
                          <li>
                            <a href="blog-classic.html">Blog-Classic</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="contact.html">
                          Contact
                        </a>
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
