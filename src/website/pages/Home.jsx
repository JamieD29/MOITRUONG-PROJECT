
import AboutPng from '../../assets/img/about/about.jpg';
import PlasticIcon from "../../assets/img/icon/plastic.png";
import PaperIcon from "../../assets/img/icon/paper.png";
import GlassIcon from "../../assets/img/icon/glass.png";
import ServiceImg from "../../assets/img/service/service_1.jpg";
import BlogImg from "../../assets/img/blog/3.jpg";
const Home = () => {
 
  return (
    <>
      {/* Header top */}
      {/* <div className="header-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-xs-12">
              <div className="contact-info">
                <i className="las la-map-marker"></i> 123, Broklyn Street, New
                York.
                <i className="las la-envelope"></i> info@ecofix.com
                <i className="las la-phone"></i> +80 125 880 266
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-xs-12 text-end">
              <div className="header_top_right">
                <div className="social-area">
                  <a href="">
                    <i className="lab la-facebook-f"></i>
                  </a>
                  <a href="">
                    <i className="lab la-youtube"></i>
                  </a>
                  <a href="">
                    <i className="lab la-twitter"></i>
                  </a>
                </div>
                <div className="quick_link">
                  <ul>
                    <li>
                      <a href="blog-standard.html">News & Media</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQs</a>
                    </li>
                    <li>
                      <a href="price.html">Pricing Plans</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Nav */}
      
      {/* Hero */}
      <div className="homepage-slides">
        <div className="single-slide-item">
          <div
            className="image-layer"
            style={{ backgroundImage: "url(assets/img/slider/slide-1.jpg)" }}
          >
            <div className="overlay" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-xl-8 col-lg-8 wow fadeInUp animated"
                data-wow-delay=".2s"
              >
                <div className="hero-area-content">
                  <div className="section-title">
                    <h6>Welcome to Ecofix</h6>
                    <h1>
                      Thought Solution to <br /> Safe Environment
                    </h1>
                  </div>
                  <p>
                    Ecofix is a household name for having been the pioneer of
                    Recycling and Waste Disposal Services in country from the
                    corporate clients to the average person.
                  </p>
                  <a href="about.html" className="main-btn primary mt-30">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About section */}
      <div className="about-area section-padding">
        <div className="container">
          <div className="row gx-5">
            <div
              className="col-lg-6 col-xl-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="about-content-wrap">
                <div className="section-title">
                  <p>
                    Waste Disposal &amp; Recycling Services in Commercial &amp;
                    Domestic
                  </p>
                  <h2 className="mt-0">
                    The Pioneers In The Recycling Service!
                  </h2>
                </div>
                <div className="about-content">
                  <div className="row">
                    <div className="col-lg-12 col-xl-12">
                      <div className="about-content-left">
                        <p className="highlight">
                          We are providing the effectively waste disposal &amp;
                          recycling service with our modern technologies, we
                          serve commonly, client first priority.
                        </p>
                        <p>
                          How can better environment for future universe to
                          recycling waste disposal? We believe the most
                          effective strategy is to stop waste from entering the
                          ocean in the first place.
                        </p>
                        <div className="row mt-30">
                          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                            <div className="featured-area">
                              <div className="featured-icon">
                                <i className="las la-business-time" />
                              </div>
                              <div className="featured-content">
                                <div className="featured-title">
                                  <h5>
                                    Ontime <br />
                                    Scheduled
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                            <div className="featured-area">
                              <div className="featured-icon">
                                <i className="las la-stopwatch" />
                              </div>
                              <div className="featured-content">
                                <div className="featured-title">
                                  <h5>
                                    24/7 <br />
                                    Services
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                            <div className="featured-area">
                              <div className="featured-icon">
                                <i className="las la-money-check-alt" />
                              </div>
                              <div className="featured-content">
                                <div className="featured-title">
                                  <h5>
                                    Affordable <br />
                                    Cost
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-lg-6 wow fadeInLeft"
              data-wow-delay=".4s"
            >
              <div className="about-img">
                <img src={AboutPng} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services */}
      <div className="service-area sky-bg section-padding pb-50">
        <div className="container">
          <div className="section-title">
            <h6>What we’re doing</h6>
            <h2>Services We Offer</h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
              style={{
                visibility: "visible",
                animationDelay: "100ms",
                animationName: "fadeInUp",
              }}
            >
              {/*Services Single*/}
              <div className="services-two_single">
                <div className="services-two_img-box">
                  <div className="services-two_img">
                    <img src={ServiceImg} alt="" />
                  </div>
                  <div className="services-two_icon">
                    <img src={PaperIcon} alt="" />
                  </div>
                </div>
                <div className="services-two_content">
                  <h3 className="services-two_title">
                    <a href="paper_recycle.html">Capboard/Paper Recycling</a>
                  </h3>
                  <p className="services-two_text">
                    Lorem ipsum dolor sit donec amet tristique ante vel sem
                    dictum is rhoncus elit sed.
                  </p>
                  <div className="services-two_bottom">
                    <a href="paper_recycle.html" className="services-one_btn">
                      Read More
                    </a>
                    <a href="paper_recycle.html" className="services-one_arrow">
                      <span className="icon-right-arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
              style={{
                visibility: "visible",
                animationDelay: "200ms",
                animationName: "fadeInUp",
              }}
            >
              {/*Services Two Single*/}
              <div className="services-two_single">
                <div className="services-two_img-box">
                  <div className="services-two_img">
                    <img src={ServiceImg} alt="" />
                  </div>
                  <div className="services-two_icon">
                    <img src={PlasticIcon} alt="" />
                  </div>
                </div>
                <div className="services-two_content">
                  <h3 className="services-two_title">
                    <a href="plastic_recycle.html">Plastic Recycling</a>
                  </h3>
                  <p className="services-two_text">
                    Lorem ipsum dolor sit donec amet tristique ante vel sem
                    dictum is rhoncus elit sed.
                  </p>
                  <div className="services-two_bottom">
                    <a href="plastic_recycle.html" className="services-one_btn">
                      Read More
                    </a>
                    <a
                      href="plastic_recycle.html"
                      className="services-one_arrow"
                    >
                      <span className="icon-right-arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
              style={{
                visibility: "visible",
                animationDelay: "300ms",
                animationName: "fadeInUp",
              }}
            >
              {/*Services Two Single*/}
              <div className="services-two_single">
                <div className="services-two_img-box">
                  <div className="services-two_img">
                    <img src={ServiceImg} alt="" />
                  </div>
                  <div className="services-two_icon">
                    <img src={GlassIcon} alt="" />
                  </div>
                </div>
                <div className="services-two_content">
                  <h3 className="services-two_title">
                    <a href="glass_recycle.html">Glass Recycling</a>
                  </h3>
                  <p className="services-two_text">
                    Lorem ipsum dolor sit donec amet tristique ante vel sem
                    dictum is rhoncus elit sed.
                  </p>
                  <div className="services-two_bottom">
                    <a href="glass_recycle.html" className="services-one_btn">
                      Read More
                    </a>
                    <a href="glass_recycle.html" className="services-one_arrow">
                      <span className="icon-right-arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-7 text-center">
              <div className="service-note mt-50">
                <p>
                  We Provide Various Category Recycling Services.{" "}
                  <a href="services.html">Explore Our Services</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Field of operation */}
      <div className="process-area dark-bg section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="section-title">
                <h6>Recycling Wastage Save Environment!</h6>
                <h2 className="text-white">
                  Simple Steps Wastage <br /> to Recycling Item Processing
                </h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="process-right-content">
                <p className="text-white">
                  Recycling is the process of converting waste materials into
                  new materials and objects. To do this, recycling often
                  requires both machinery and employees to correctly sort
                  recyclable items based on the material they’re made of.{" "}
                </p>
                <p className="text-white">
                  This Waste Management video shows the step-by-step process of
                  how materials are processed once they reach a facility.
                </p>
                <div className="process-btn">
                  <a href="contact.html" className="main-btn">
                    Get Started
                  </a>
                  <a href="about.html" className="main-btn white">
                    View Our Plans
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="process-item-wrap">
            <div className="row">
              <div
                className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft"
                data-wow-delay=".2s"
              >
                <div className="process-single">
                  <div className="process-icon">
                    <img src="assets/img/process/1.png" alt="" />
                  </div>
                  <div className="process-title">
                    <h5>Collection Wastage</h5>
                  </div>
                  <div className="process-desc">
                    <p>
                      Recycling is the process of making used or unwanted
                      products into new.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft"
                data-wow-delay=".4s"
              >
                <div className="process-single two">
                  <div className="process-icon">
                    <img src="assets/img/process/2.png" alt="" />
                  </div>
                  <div className="process-title">
                    <h5>Pickup Wastage</h5>
                  </div>
                  <div className="process-desc">
                    <p>
                      Recycling is the process of making used or unwanted
                      products into new.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft"
                data-wow-delay=".6s"
              >
                <div className="process-single three">
                  <div className="process-icon">
                    <img src="assets/img/process/3.png" alt="" />
                  </div>
                  <div className="process-title">
                    <h5>Reduce Garbage</h5>
                  </div>
                  <div className="process-desc">
                    <p>
                      Recycling is the process of making used or unwanted
                      products into new.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft"
                data-wow-delay=".8s"
              >
                <div className="process-single four">
                  <div className="process-icon">
                    <img src="assets/img/process/4.png" alt="" />
                  </div>
                  <div className="process-title">
                    <h5>Recycling Process</h5>
                  </div>
                  <div className="process-desc">
                    <p>
                      Recycling is the process of making used or unwanted
                      products into new.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why you should choose me */}
      <div className="contact-area section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-5 col-lg-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="contact-wrap">
                <div className="section-title">
                  <h6>Ecology Survive With Sustainable service!</h6>
                  <h2 className="text-white">
                    Time Is The Best Way To Think About Recycling
                  </h2>
                </div>
                <div className="contact-desc">
                  <p className="text-white">
                    Recycling is not just learning which bin to throw an item
                    into. It’s about appreciating the resources that went into
                    making the item and understanding the value of these
                    materials. You will truly understand recycling if you change
                    your mindset.
                  </p>
                </div>
                <div className="contact-list-wrap">
                  <div className="row">
                    <div className="col-12 col-md-4 col-sm-6 col-lg-6">
                      <ul className="list-unstyled contact-list">
                        <li>
                          <i className="las la-check" /> Reduce Greenhouse
                          Effect
                        </li>
                        <li>
                          <i className="las la-check" />
                          Conserv Natural Resources
                        </li>
                        <li>
                          <i className="las la-check" />
                          Reduces Carbon Emissions
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 col-md-4 col-sm-6 col-lg-6">
                      <ul className="list-unstyled contact-list">
                        <li>
                          <i className="las la-check" />
                          Protects Ecosystems{" "}
                        </li>
                        <li>
                          <i className="las la-check" />
                          Economic Benefits.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="contact-btn">
                  <a className="main-btn white" href="contact.html">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 offset-xl-1 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="quotation-wrap">
                <div className="quotation-inner">
                  <h5 className="quotation-heading">Request A Quote</h5>
                  <p className="quotation-desc">
                    There are various ways to reduce waste so you can have the
                    peace of mind that you’re making a positive impact.
                  </p>
                  <form action="index.html">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <label>Name</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Name"
                          required=""
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label>Company Name</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Compnay Name"
                          required=""
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label>Contact Number</label>
                        <input
                          className="form-control"
                          type="number"
                          placeholder="Contact Number"
                          required=""
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label>E-mail</label>
                        <input
                          className="form-control"
                          type="email"
                          placeholder="E-mail"
                          required=""
                        />
                      </div>
                      <div className="col-lg-6 col-md-12 mb-20">
                        <label>Service Type</label>
                        <div className="quotation-item">
                          <select
                            className="form-dropdown form-control select_option"
                            name="service_provider"
                            data-component="dropdown"
                          >
                            <option value={0}> Select Service Type </option>
                            <option value={1}> Commercial </option>
                            <option value={2}> Residential </option>
                            <option value={3}> Industrial </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 mb-20">
                        <label>Recycling Type</label>
                        <div className="quotation-item">
                          <select
                            className="form-dropdown form-control select_option"
                            name="service_provider"
                            data-component="dropdown"
                          >
                            <option value={0}> Select Recycling Type </option>
                            <option value={1}> Plastic Recycling </option>
                            <option value={2}> Paper Recycling </option>
                            <option value={3}> Glass Recycling </option>
                            <option value={4}> Aluminium Recycling </option>
                            <option value={5}> Electronics Recycling </option>
                            <option value={6}> Metal Recycling </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <label>Pickup Date</label>
                        <input
                          className="form-control"
                          type="date"
                          required=""
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label>Pickup Time</label>
                        <input
                          className="form-control"
                          type="time"
                          required=""
                        />
                      </div>
                      <div className="col-12">
                        <button className="main-btn primary">
                          submit request
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News */}
      <div className="blog-area section-padding pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="section-title">
                <h6>Read Blog About Recycling</h6>
                <h2>Our Latest News &amp; Articles</h2>
              </div>
            </div>
            <div className="col-lg-6 text-end" />
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow fadeInLeft"
              data-wow-delay=".2s"
            >
              <div className="single-blog-item">
                <div className="blog-bg">
                  <img src={BlogImg} alt="" />
                  <span className="blog-date">25 Feb</span>
                </div>
                <div className="blog-content">
                  <p className="blog-meta">
                    <i className="las la-user-circle" />
                    Admin
                    <i className="las la-comments" />
                    13
                  </p>
                  <h5>
                    <a href="blog-details.html">
                      Sainsbury’s Announces New In-Store Wastage Recycling
                      Scheme
                    </a>
                  </h5>
                  <p>
                    There are some reason Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Dolorem, facilis perferendis
                    ipsam.
                  </p>
                  <a href="blog-details.html" className="read-more">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow fadeInLeft"
              data-wow-delay=".4s"
            >
              <div className="single-blog-item">
                <div className="blog-bg">
                  <img src={BlogImg} alt="" />
                  <span className="blog-date">07 Mar</span>
                </div>
                <div className="blog-content">
                  <p className="blog-meta">
                    <i className="las la-user-circle" />
                    Admin
                    <i className="las la-comments" />
                    13
                  </p>
                  <h5>
                    <a href="blog-details.html">
                      Plastic Free July: Who produces the most plastic waste?
                    </a>
                  </h5>
                  <p>
                    There are some reason Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Dolorem, facilis perferendis
                    ipsam.
                  </p>
                  <a href="blog-details.html" className="read-more">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow fadeInLeft"
              data-wow-delay=".6s"
            >
              <div className="single-blog-item">
                <div className="blog-bg">
                  <img src={BlogImg} alt="" />
                  <span className="blog-date">30 Apr</span>
                </div>
                <div className="blog-content">
                  <p className="blog-meta">
                    <i className="las la-user-circle" />
                    Admin
                    <i className="las la-comments" />
                    13
                  </p>
                  <h5>
                    <a href="blog-details.html">
                      Government figures show declining recycling rates in the
                      UK
                    </a>
                  </h5>
                  <p>
                    There are some reason Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Dolorem, facilis perferendis
                    ipsam.
                  </p>
                  <a href="blog-details.html" className="read-more">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      
    </>
  );
};

export default Home;
