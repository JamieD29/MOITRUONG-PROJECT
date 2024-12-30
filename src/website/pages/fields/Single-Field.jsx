import React from 'react'

const SingleField = () => {
  return (
    <>
      {/* Breadcroumb Area */}
      <div className="breadcroumb-area project-bg">
        <div className="overlay-2" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcroumb-title text-center">
                <h1>Project Details</h1>
                <h6>
                  <a href="index.html">Home</a> / Project Details
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* project details*/}
      <div id="project-page">
        <div className="project_details-section section-padding">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="single-content-wrapper">
                  <div className="single-image-wrapper">
                    <img src="assets/img/single-project.jpg" alt="" />
                  </div>
                  <div className="project-details-box">
                    <div className="project-details-box-title">
                      <h4>Project Info</h4>
                    </div>
                    <ul className="detail-box-list">
                      <li>
                        <div className="list-details">
                          <i className="las la-tasks" />
                          <h5>
                            Project <span>Plastic Recycling</span>{" "}
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="list-details">
                          <i className="las la-film" />
                          <h5>
                            Categories <span>Commercial, Residential</span>{" "}
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="list-details">
                          <i className="las la-calendar" />
                          <h5>
                            Date <span>22 February 2024</span>{" "}
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="list-details">
                          <i className="las la-user" />
                          <h5>
                            Client <span>Alex Sam Martin</span>{" "}
                          </h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single-content-area">
                  <h4>The Back Story</h4>
                  <p>
                    Green Recycling Solutions specializes in recycling and helps
                    to lower waste disposal costs while increasing recycling
                    rates. We offer both pick-up and drop-off services for our
                    customer. As with all services, if you are unsure whether
                    your products are recyclable, contact us and we will be
                    happy to navigate you through the process.Paper waste from
                    offices, data centers, and businesses is often shredded or
                    bailed. Twenty ton loads are then transported and resold for
                    re-manufacturing purposes.
                  </p>
                  <br />
                </div>
                <div className="row mt-30 mb-30">
                  <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12">
                    <div className="single-img-wrapper">
                      <img src="assets/img/project/10.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12">
                    <div className="single-img-wrapper">
                      <img src="assets/img/project/6.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12">
                    <div className="single-img-wrapper">
                      <img src="assets/img/project/12.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="single-content-area">
                  <h4>Project Challenge</h4>
                  <p>
                    Wecusandae debitis facere quidem animi placeat maxime
                    cuuntur at voluptatib uod numuam pariatur libero laborum
                    laudantium non. Vitae optio, distinctio earum facere magni
                    natus eaque esse corporis dolorem! Similique fugiatime
                    magnis dis parturient montes, nascetur ridiculus mus
                    faucibus sed eros dapibus. Excepturi quos conse ctetur adipi
                    sicing elit provi dent laud atium Wecusandae debitis facere
                    quidem animi placeat maxime cuuntur at voluptatib uod
                    numuam.
                  </p>
                </div>
                <div className="row mt-50">
                  <div className="col-xl-6">
                    <div className="single-content-area">
                      <h4>Project Solutions</h4>
                    </div>
                    <ul className="project-solutions-list mt-30">
                      <li>
                        <i className="las la-long-arrow-alt-right" />
                        We use the best and newest product for developing
                        technologies
                      </li>
                      <li>
                        <i className="las la-long-arrow-alt-right" />
                        Manage and test all systems to our experienced qualified
                        Experts
                      </li>
                      <li>
                        <i className="las la-long-arrow-alt-right" />
                        Always ready to easy way in installing all security
                        systems
                      </li>
                      <li>
                        <i className="las la-long-arrow-alt-right" />
                        We use the best and newest product for developing
                        technologies
                      </li>
                      <li>
                        <i className="las la-long-arrow-alt-right" />
                        Manage and test all systems to our experienced qualified
                        Experts
                      </li>
                      <li>
                        <i className="las la-long-arrow-alt-right" />
                        Always ready to easy way in installing all security
                        systems
                      </li>
                      <li>
                        <i className="las la-long-arrow-alt-right" />
                        We use the best and newest product for developing
                        technologies
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-6">
                    <img src="assets/img/project-wide-img.jpg" alt="" />
                  </div>
                </div>
                <div className="single-content-area">
                  <h4>Project Result</h4>
                  <p>
                    Wecusandae debitis facere quidem animi placeat maxime
                    cuuntur at voluptatib uod numuam pariatur libero laborum
                    laudantium non. Vitae optio, distinctio earum facere magni
                    natus eaque esse corporis dolorem! Similique fugiatime
                    magnis dis parturient montes, nascetur ridiculus mus
                    faucibus sed eros dapibus. Excepturi quos conse ctetur adipi
                    sicing elit provi dent laud atium vWecusandae debitis facere
                    quidem animi placeat maxim
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleField