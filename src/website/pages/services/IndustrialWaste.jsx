import { NavLink } from "react-router";

const IndustrialWaste = () => {
  return (
    <>
      {/* Breadcroumb Area */}
      <div className="breadcroumb-area paper-bg">
        <div className="overlay-2" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcroumb-title text-center">
                <h1>Chất thải công nghiệp</h1>
                <h6>
                  <NavLink to="/">Trang chủ</NavLink>{" "}
                  <NavLink to="/dichvu" className="text-white">
                    / Dịch vụ
                  </NavLink>{" "}
                  / Chất thải công nghiệp
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Service Details Start*/}
      <section className="service-details pb-100">
        <div className="container">
          <div className="row gx-5">
            <div className="col-xl-4 col-lg-5">
              <div className="service-details_sidebar">
                <div className="service-details_sidebar-service">
                  <ul className="service-details_sidebar-service-list list-unstyled">
                    <li className="d-block current">
                      <a href="paper_recycle.html">
                        Paper Recycling{" "}
                        <span>
                          {" "}
                          <i className="las la-long-arrow-alt-right" />
                        </span>
                      </a>
                    </li>
                    <li className="d-block">
                      <a href="plastic_recycle.html">
                        Plastic Recycling
                        <span>
                          {" "}
                          <i className="las la-long-arrow-alt-right" />
                        </span>
                      </a>
                    </li>
                    <li className="d-block">
                      <a href="glass_recycle.html">
                        Glass Recycling
                        <span>
                          {" "}
                          <i className="las la-long-arrow-alt-right" />
                        </span>
                      </a>
                    </li>
                    <li className="d-block">
                      <a href="aluminium_recycle.html">
                        Aluminium Recycling
                        <span>
                          {" "}
                          <i className="las la-long-arrow-alt-right" />
                        </span>
                      </a>
                    </li>
                    <li className="d-block">
                      <a href="electronics_recycle.html">
                        Electronics Recycling
                        <span>
                          {" "}
                          <i className="las la-long-arrow-alt-right" />
                        </span>
                      </a>
                    </li>
                    <li className="d-block">
                      <a href="metal_recycle.html">
                        Metal Recycling
                        <span>
                          {" "}
                          <i className="las la-long-arrow-alt-right" />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="service-details_need-help">
                  <div className="service-details_need-help-bg"></div>
                  <h2 className="service-details_need-help-title">
                    Contact with us for any advice
                  </h2>
                  <div className="service-details_need-help-icon">
                    <i className="las la-phone" />
                  </div>
                  <div className="service-details_need-help-contact">
                    <p>Call Anytime</p>
                    <a href="tel:13077760608">+ 1 (307) 776-0608</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="service-details_right">
                <div className="service-details_img">
                  <img
                    src="assets/img/service-details/paper_recycle.jpg"
                    alt=""
                  />
                  <div className="service-details_img-icon">
                    <img src="assets/img/icon/paper.png" alt="" />
                  </div>
                </div>
                <div className="service-details_content">
                  <h3 className="service-details_title">Paper Recycling</h3>
                  <p className="service-details_text-1">
                    Paper makes up 23 percent of municipal solid waste (trash)
                    generated each year, more than any other material. Americans
                    recycled about 68 percent of the paper they used in 2018.
                    This recovered paper is used to make new paper products,
                    which saves trees and other natural resources. Most
                    community or office recycling programs accept paper and
                    paper products.
                  </p>
                  <p className="service-details_text-2">
                    Check what your community or office program accepts before
                    you put it in the bin. Look for products that are made from
                    recycled paper when you shop. Better yet, consider if you
                    really need to print in the first place.
                  </p>
                  <p className="service-details_text-2">
                    If the book is still in good condition, try donating it!
                    Schools, places of faith, charities, and non-profits will
                    often accept book donations. If the book is not in usable
                    condition, it can be recycled. Paperback books can be
                    recycled as-is; remove the cover from a hardcover book
                    before recycling it.
                  </p>
                </div>
                <ul className="service-details_two-icons list-unstyled">
                  <li className="service-details_two-icon-single">
                    <div className="service-details_two-icon">
                      <span className="service-icon">
                        <img src="assets/img/icon/1.png" alt="" />
                      </span>
                    </div>
                    <p className="service-details_two-icon-content">
                      Recycling also helps create clean environment &amp; save
                      ecology.
                    </p>
                  </li>
                  <li className="service-details_two-icon-single">
                    <div className="service-details_two-icon">
                      <span className="service-icon">
                        <img src="assets/img/icon/2.png" alt="" />
                      </span>
                    </div>
                    <p className="service-details_two-icon-content">
                      We can all make a difference by practicing proper
                      recycling.
                    </p>
                  </li>
                </ul>
                <p className="service-details_text-3">
                  Paper gift wrap often is not recyclable when it has a shiny or
                  laminated coating. If you use gift wrap, purchase a type that
                  can be recycled or is made from recycled content. EPA
                  encourages consumers to reuse gift bags, boxes, and tissue
                  paper. Newspaper is an excellent alternative to gift wrap.{" "}
                </p>
                <div className="service-details_bottom">
                  <div className="service-details_bottom-icon">
                    <img src="assets/img/icon/recycling.png" alt="" />
                  </div>
                  <p className="service-details_bottom-text">
                    Recycling is the process of collecting and processing
                    materials that would otherwise be thrown away as trash and
                    turning them into new products. Recycling can benefit your
                    community, the economy and the environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustrialWaste;
