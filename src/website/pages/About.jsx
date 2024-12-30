const About = () => {
  return (
    <>
      <>
        {/* Breadcroumb Area */}
        <div className="breadcroumb-area bread-bg">
          <div className="overlay-2" />
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcroumb-title text-center">
                  <h1>About</h1>
                  <h6>
                    <a href="index.html">Home</a> / About
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About Section  */}
        <div className="about-area section-padding">
          <div className="container">
            <div className="row">
              <div
                className="col-12 col-lg-6 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="about-content-wrap">
                  <div className="section-title">
                    <p>
                      Waste Disposal &amp; Recycling Services in Commercial
                      &amp; Domestic
                    </p>
                    <h2>The Pioneers In The Recycling Service!</h2>
                  </div>
                  <div className="about-content">
                    <div className="row">
                      <div className="col-12 col-lg-12">
                        <div className="about-content-left">
                          <p className="highlight">
                            We are providing the effectively waste disposal
                            &amp; recycling service with our modern
                            technologies, we serve commonly, client first
                            priority.
                          </p>
                          <p>
                            How can better environment for future universe to
                            recycling waste disposal? We believe the most
                            effective strategy is to stop waste from entering
                            the ocean in the first place.
                          </p>
                          <div className="row mt-20">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                              <div className="featured-area">
                                <div className="featured-icon">
                                  <i className="las la-business-time" />
                                </div>
                                <div className="featured-content">
                                  <div className="featured-title">
                                    <h5>
                                      Ontime at <br />
                                      Services
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
                  <img src="assets/img/about/about.jpg" alt="" />
                  <div className="about-counter">
                    <div className="counter-icon">
                      <img src="assets/img/icon/customer-service.png" alt="" />
                    </div>
                    <div className="counter-number">
                      <span className="counting" data-counterup-nums={154}>
                        4754
                      </span>
                    </div>
                    <h6>Happy Customers</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Service Area*/}
        <div className="service-area sky-bg section-padding">
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
                      <img src="assets/img/service/service_1.jpg" alt="" />
                    </div>
                    <div className="services-two_icon">
                      <img src="assets/img/icon/paper.png" alt="" />
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
                      <a
                        href="paper_recycle.html"
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
                      <img src="assets/img/service/service_2.jpg" alt="" />
                    </div>
                    <div className="services-two_icon">
                      <img src="assets/img/icon/plastic.png" alt="" />
                    </div>
                  </div>
                  <div className="services-two_content">
                    <h3 className="services-two_title">
                      <a href="plastic_recycle">Plastic Recycling</a>
                    </h3>
                    <p className="services-two_text">
                      Lorem ipsum dolor sit donec amet tristique ante vel sem
                      dictum is rhoncus elit sed.
                    </p>
                    <div className="services-two_bottom">
                      <a
                        href="plastic_recycle.html"
                        className="services-one_btn"
                      >
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
                      <img src="assets/img/service/service_3.jpg" alt="" />
                    </div>
                    <div className="services-two_icon">
                      <img src="assets/img/icon/glass.png" alt="" />
                    </div>
                  </div>
                  <div className="services-two_content">
                    <h3 className="services-two_title">
                      <a href="glass_recycle">Glass Recycling</a>
                    </h3>
                    <p className="services-two_text">
                      Lorem ipsum dolor sit donec amet tristique ante vel sem
                      dictum is rhoncus elit sed.
                    </p>
                    <div className="services-two_bottom">
                      <a href="glass_recycle.html" className="services-one_btn">
                        Read More
                      </a>
                      <a
                        href="glass_recycle.html"
                        className="services-one_arrow"
                      >
                        <span className="icon-right-arrow" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Choose Us Area  */}
        <div className="choose_us section-padding">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-12">
                <div className="choose_us_left">
                  <div className="choose_us_img">
                    <img src="assets/img/choose_us.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-12">
                <div className="choose_us_right">
                  <div className="section-title text-left">
                    <h6>Our Core Feature</h6>
                    <h2>Why You Should Take Our Services?</h2>
                  </div>
                  <p className="choose_us_right-text">
                    There might be a lot of talk about reusing and recycling
                    these days but taking discarded materials and turning them
                    into something new is by no means a modern concept. People
                    have been discarding and reusing materials for a very long
                    time ago.
                  </p>
                  <ul className="list-unstyled choose_us_points">
                    <li>
                      <div className="icon">
                        <i className="las la-check" />
                      </div>
                      <div className="text">
                        <p>Convenient Pickup</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="las la-check" />
                      </div>
                      <div className="text">
                        <p>Reducing Waste</p>
                      </div>
                    </li>
                  </ul>
                  <div className="progress-bar-area">
                    <div className="single-bar-item">
                      <h4>Recycling Service</h4>
                      <div id="bar1" className="barfiller">
                        <span className="tip">90%</span>
                        <span className="fill" data-percentage={90} />
                      </div>
                    </div>
                    <div className="single-bar-item">
                      <h4>Waste Management</h4>
                      <div id="bar2" className="barfiller">
                        <span className="tip">70%</span>
                        <span className="fill" data-percentage={70} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="cta-area-2 dark-bg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6">
                <h2>Let's Get Your Project Started Today!</h2>
              </div>
              <div className="col-xl-6 col-lg-6 offset-xl-1 col-12">
                <div className="cta-btn-2 mt-20">
                  <a href="#" className="main-btn">
                    Request a Pickup
                  </a>
                  <a href="#" className="main-btn white">
                    Contact with Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial Section  */}
        <div className="testimonial-area sky-bg section-padding">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="testimonial-wrap owl-carousel">
                  <div className="testimonial-inner">
                    <div className="testimonial-img">
                      <img src="assets/img/testimonial/1.jpg" alt="" />
                    </div>
                    <div className="testimonial-content">
                      <p>
                        “They helped lead me through the process of system
                        selection, site layout and place my order. They were
                        informed and has provided guidance each step.”
                      </p>
                      <div className="testimonial-meta">
                        <h6>Pat Cummins,</h6>
                        <span>Delta Inc.</span>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-inner">
                    <div className="testimonial-img">
                      <img src="assets/img/testimonial/2.jpg" alt="" />
                    </div>
                    <div className="testimonial-content">
                      <p>
                        “They helped lead me through the process of system
                        selection, site layout and place my order. They were
                        informed and has provided guidance each step.”
                      </p>
                      <div className="testimonial-meta">
                        <h6>Lin Nathasha,</h6>
                        <span>Expoint Logistics</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Team Start*/}
        <div className="team-section section-padding pb-60">
          <div className="container">
            <div className="section-title text-center">
              <h6>Professional Worker</h6>
              <h2>Meet Our Experts</h2>
            </div>
            <div className="row">
              <div
                className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="team-single">
                  <div className="team-img">
                    <img src="assets/img/team/1.jpg" alt="" />
                    <ul className="list-unstyled team-social">
                      <li>
                        <a href="#">
                          <i className="lab la-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lab la-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lab la-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="team-content">
                    <h4 className="team-name">Joseph Gill</h4>
                    <p className="team-title">Recycling Worker</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="team-single">
                  <div className="team-img">
                    <img src="assets/img/team/2.jpg" alt="" />
                    <ul className="list-unstyled team-social">
                      <li>
                        <a href="#">
                          <i className="lab la-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lab la-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lab la-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="team-content">
                    <h4 className="team-name">Sarah Albert</h4>
                    <p className="team-title">Recycling Worker</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="team-single">
                  <div className="team-img">
                    <img src="assets/img/team/3.jpg" alt="" />
                    <ul className="list-unstyled team-social">
                      <li>
                        <a href="#">
                          <i className="lab la-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lab la-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lab la-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="team-content">
                    <h4 className="team-name">Alex Carry</h4>
                    <p className="team-title">Recycling Worker</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="team-single">
                  <div className="team-img">
                    <img src="assets/img/team/4.jpg" alt="" />
                    <ul className="list-unstyled team-social">
                      <li>
                        <a href="#">
                          <i className="lab la-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lab la-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lab la-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="team-content">
                    <h4 className="team-name">Watson Craig</h4>
                    <p className="team-title">Recycling Worker</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default About;
