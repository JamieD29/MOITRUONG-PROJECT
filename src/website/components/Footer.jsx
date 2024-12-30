import Logo from '../../assets/img/logo-main.png'
const Footer = () => {
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="footer-up">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="logo">
                  <img src={Logo} alt="ecofix-logo" />
                </div>
                <div className="contact-info">
                  <p>
                    <b>Location:</b> 123, Broklyn Street, New York
                  </p>
                  <p>
                    <b>Phone:</b> +99 268 827 2500
                  </p>
                  <p>
                    <b>E-mail:</b> info@ecofix.com
                  </p>
                  <p>
                    <b>Opening Hour:</b> 08.00 AM-09.00 PM
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 com-sm-12">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <h6>Company</h6>
                    <ul>
                      <li>
                        <a href="about.html">About Us</a>
                        <a href="team.html">Meet Our Team</a>
                        <a href="blog.html">News &amp; Media</a>
                        <a href="project.html">Our Project</a>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <h6>Services</h6>
                    <ul>
                      <li>
                        <a href="paper_recycle.html">Paper Recycling</a>
                        <a href="plastic_recycle.html">Plastic Recycling</a>
                        <a href="glass_recycle.html">Glass Recycling</a>
                        <a href="metal_recycle.html">Metal Recycling</a>
                        <a href="electronics_recycle.html">
                          Electronics Recycling
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="subscribe-form">
                  <h6>Newsletter</h6>
                  <form action="index.html">
                    <input type="email" placeholder="Your email" />
                    <button type="submit">
                      <i className="las la-envelope" />
                    </button>
                  </form>
                  <p>Stay tuned for our latest news</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-3 col-12">
              <div className="copyright-area">
                <p className="copyright-line">
                  © 2024 Ecofix. All rights reserved.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <p className="privacy">
                <a href="#">Terms &amp; Conditions</a>{" "}
                <a href="#">Privacy Policy</a> <a href="#">Recycling Tips</a>{" "}
              </p>
            </div>
            <div className="col-lg-3 col-12 text-end">
              <div className="social-area">
                <a href="">
                  <i className="lab la-facebook-f" />
                </a>
                <a href="">
                  <i className="lab la-youtube" />
                </a>
                <a href="">
                  <i className="lab la-twitter" />
                </a>
                <a href="">
                  <i className="lab la-instagram" />
                </a>
                <a href="">
                  <i className="lab la-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer