
import AboutPng from '../../assets/img/about/about.jpg';
import PlasticIcon from "../../assets/img/icon/plastic.png";
import PaperIcon from "../../assets/img/icon/paper.png";
import GlassIcon from "../../assets/img/icon/glass.png";
import ServiceImg from "../../assets/img/service/service_1.jpg";
import BlogImg from "../../assets/img/blog/3.jpg";
import AboutImg from "../../assets/img/sgxanh/about/about-800x800.png"
import ServiceImg1 from "../../assets/img/sgxanh/service/service-1.jpg"
import ServiceImg2 from "../../assets/img/sgxanh/service/service-2.jpg"
import ServiceImg3 from "../../assets/img/sgxanh/service/service-3.jpg"
import ServiceImg4 from "../../assets/img/sgxanh/service/service-4.jpg"
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
            style={{ backgroundImage: "url(../../assets/img/sgxanh/slides/thumb_1.jpg)" }}
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
                    <h6>Sài Gòn Xanh, xin chào!</h6>
                    <h1>
                      Thu Gom, <br /> Vận Chuyển và <br /> Xử Lý Chất Thải
                    </h1>
                  </div>
                  <p>
                  Chúng tôi cung cấp dịch vụ thu gom và vận chuyển rác chuyên nghiệp, đáp ứng mọi nhu cầu từ hộ gia đình đến doanh nghiệp. Với đội ngũ nhân viên được đào tạo bài bản, hệ thống xe chuyên dụng hiện đại, chúng tôi cam kết mang lại giải pháp xử lý rác thải an toàn, tiện lợi và hiệu quả
                  </p>
                  
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
                    GIỚI THIỆU CÔNG TY
                  </p>
                  <h2 className="mt-0">
                  Giới thiệu Công Ty TNHH DV Công Ích Sài Gòn Xanh
                  </h2>
                </div>
                <div className="about-content">
                  <div className="row">
                    <div className="col-lg-12 col-xl-12">
                      <div className="about-content-left">
                        <p className="highlight">
                        Công Ty TNHH DV Công Ích Sài Gòn Xanh (Sài Gòn Xanh) là một công ty cung cấp dịch vụ toàn diện từ thu gom,
                         vận chuyển đến xử lý rác thải sinh hoạt, công nghiệp và nguy hại Với cam kết đảm bảo sự hiệu quả và bền vững,
                          Sài Gòn Xanh đang đóng góp tích cực vào nỗ lực giảm thiểu tác động tiêu cực của rác thải đối với môi trường.
                        </p>
                        <p>
                         ...
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
                                    Lịch trình <br /> đúng giờ
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
                                    Dịch vụ <br />
                                    24/7
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
                                    Giá cả <br />
                                    hợp lý
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
                <img src={AboutImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services */}
      <div className="service-area sky-bg section-padding pb-50">
        <div className="container">
          <div className="section-title">
            <h6>Dịch Vụ</h6>
            <h2 className='text-capitalize'>Dịch vụ của chúng tôi</h2>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
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
                    <img src={ServiceImg1} alt="" />
                  </div>
                  {/* <div className="services-two_icon">
                    <img src={PaperIcon} alt="" />
                  </div> */}
                </div>
                <div className="services-two_content">
                  <h3 className="services-two_title">
                    <a href="paper_recycle.html">Chất Thải Công Nghiệp</a>
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
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
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
                    <img src={ServiceImg2} alt="" />
                  </div>
                  {/* <div className="services-two_icon">
                    <img src={PaperIcon} alt="" />
                  </div> */}
                </div>
                <div className="services-two_content">
                  <h3 className="services-two_title">
                    <a href="paper_recycle.html">Chất Thải Xây Dựng</a>
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
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
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
                    <img src={ServiceImg3} alt="" />
                  </div>
                  {/* <div className="services-two_icon">
                    <img src={PlasticIcon} alt="" />
                  </div> */}
                </div>
                <div className="services-two_content">
                  <h3 className="services-two_title">
                    <a href="plastic_recycle.html">Chất Thải Sinh Hoạt</a>
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
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
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
                    <img src={ServiceImg4} alt="" />
                  </div>
                  {/* <div className="services-two_icon">
                    <img src={GlassIcon} alt="" />
                  </div> */}
                </div>
                <div className="services-two_content">
                  <h3 className="services-two_title">
                    <a href="glass_recycle.html">Chất Thải Tái Chế</a>
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
      
      {/* Collection process */}
      <div className="process-area dark-bg section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="section-title">
                <h6>Quy Trình</h6>
                <h2 className="text-white">
                  Mô Tả Quy Trình Thu Gom
                </h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="process-right-content">
                <p className="text-white">
                "Dịch vụ thu gom rác của chúng tôi bắt đầu từ lúc 4:00 sáng và hoàn thành trước 10:00 sáng, 
                đảm bảo môi trường sống sạch sẽ ngay từ đầu ngày. Với đội xe hiện đại và lộ trình được sắp xếp thông minh, 
                chúng tôi cam kết không làm gián đoạn sinh hoạt của khách hàng."
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
                className="col-xl-4 col-lg-3 col-md-6 wow fadeInLeft"
                data-wow-delay=".2s"
              >
                <div className="process-single">
                  <div className="process-icon">
                    <img src="assets/img/process/1.png" alt="" />
                  </div>
                  <div className="process-title">
                    <h5>Đặt Lịch</h5>
                  </div>
                  <div className="process-desc">
                    <p>
                    Đặt lịch thu gom dễ dàng qua điện thoại hoặc website.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-3 col-md-6 wow fadeInLeft"
                data-wow-delay=".4s"
              >
                <div className="process-single two">
                  <div className="process-icon">
                    <img src="assets/img/process/2.png" alt="" />
                  </div>
                  <div className="process-title">
                    <h5>Thu Gom</h5>
                  </div>
                  <div className="process-desc">
                    <p>
                    Xe thu gom đến đúng thời gian hẹn và tiến hành thu gom rác một cách nhanh chóng.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-3 col-md-6 wow fadeInLeft"
                data-wow-delay=".6s"
              >
                <div className="process-single three">
                  <div className="process-icon">
                    <img src="assets/img/process/3.png" alt="" />
                  </div>
                  <div className="process-title">
                    <h5>Vận Chuyển</h5>
                  </div>
                  <div className="process-desc">
                    <p>
                    Vận chuyển rác đến các điểm xử lý được cấp phép, đảm bảo xử lý rác theo đúng tiêu chuẩn môi trường.
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      {/* Field */}
      <div className="service-area sky-bg section-padding pb-50">
        <div className="container">
          <div className="section-title">
            <h6>Lĩnh Vực</h6>
            <h2 className='text-capitalize'>Lĩnh vực hoạt động của chúng tôi</h2>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
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
                    <img src={ServiceImg1} alt="" />
                  </div>
                  {/* <div className="services-two_icon">
                    <img src={PaperIcon} alt="" />
                  </div> */}
                </div>
                <div className="services-two_content">
                  <h3 className="services-two_title">
                    <a href="paper_recycle.html">Thu Gom, Vận Chuyển và Xử Lý Chất Thải Sinh Hoạt</a>
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
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
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
                    <img src={ServiceImg2} alt="" />
                  </div>
                  {/* <div className="services-two_icon">
                    <img src={PaperIcon} alt="" />
                  </div> */}
                </div>
                <div className="services-two_content">
                  <h3 className="services-two_title">
                    <a href="paper_recycle.html">Thu Gom, Vận Chuyển và Xử Lý Chất Thải Sinh Hoạt</a>
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
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
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
                    <img src={ServiceImg3} alt="" />
                  </div>
                  {/* <div className="services-two_icon">
                    <img src={PlasticIcon} alt="" />
                  </div> */}
                </div>
                <div className="services-two_content">
                  <h3 className="services-two_title">
                    <a href="plastic_recycle.html">Thu Gom, Vận Chuyển và Xử Lý Chất Thải Nguy Hại</a>
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
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
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
                    <img src={ServiceImg4} alt="" />
                  </div>
                  {/* <div className="services-two_icon">
                    <img src={GlassIcon} alt="" />
                  </div> */}
                </div>
                <div className="services-two_content">
                  <h3 className="services-two_title">
                    <a href="glass_recycle.html">Tư Vấn Môi Trường</a>
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
                  <h6>Liên Hệ</h6>
                  <h2 className="text-white">
                    Lý Do Chọn Chúng Tôi
                  </h2>
                </div>
                
                <div className="contact-list-wrap">
                  <div className="row">
                    <div className="col-12 col-md-4 col-sm-6 col-lg-6">
                      <ul className="list-unstyled contact-list">
                        <li>
                          <i className="las la-check" /> Thu Gom Rác Thải
                        </li>
                        <li>
                          <i className="las la-check" />
                          Đo Kiểm Môi Trường
                        </li>
                        <li>
                          <i className="las la-check" />
                          Tư Vấn Môi Trường
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
                  <h5 className="quotation-heading">Để lại thông tin liên hệ cho chúng tôi</h5>
                  {/* <p className="quotation-desc">
                    There are various ways to reduce waste so you can have the
                    peace of mind that you’re making a positive impact.
                  </p> */}
                  <form action="index.html">
                    <div className="row">
                      <div className="col-12">
                        <label>Họ Tên</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Họ Tên"
                          required=""
                        />
                      </div>
                      <div className="col-12">
                        <label>Số Điện Thoại</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Số điện thoại"
                          required=""
                        />
                      </div>
                      <div className="col-12">
                        <label>Email</label>
                        <input
                          className="form-control"
                          type="email"
                          placeholder="Email"
                          required=""
                        />
                      </div>
                      <div className="col-12">
                        <label>Nội dung</label>
                        <textarea
                          className="form-control"
                          placeholder="Nội dung cần tư vấn"
                        
                        />
                      </div>
                      {/* <div className="col-lg-6 col-md-12 mb-20">
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
                      </div> */}
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
                <h6>Tin Tức</h6>
                <h2>Thông Tin Mới Nhất</h2>
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
                    TP. Hồ Chí Minh: Rác thải y tế đã tăng bình quân 69 tấn/ngày
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
                    TP. Hồ Chí Minh: Chung tay ngăn chặn nạn xả rác
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
                    TP. Hồ Chí Minh: Rác thải y tế đã tăng bình quân 69 tấn/ngày
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
