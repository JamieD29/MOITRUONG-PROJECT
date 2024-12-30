
const Contact = () => {
  return (
    <>
      {/* Breadcroumb Area */}
      <div className="breadcroumb-area contact-bg">
        <div className="overlay-2" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcroumb-title text-center">
                <h1>Contact</h1>
                <h6>
                  <a href="index.html">Home</a> / Contact
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Contact Page Google Map Start*/}
      <div className="contact-page-google-map">
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d524.1286947673564!2d106.63354936289859!3d10.729207450197922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e74933efa45%3A0xa9d8987919bd8645!2zMy80SyBI4bq7bSBT4buRIDUgTeG7hSBD4buRYywgUGjGsOG7nW5nIDE1LCBRdeG6rW4gOCwgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e1!3m2!1sen!2s!4v1735546071417!5m2!1sen!2s"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      {/* Contact Section  */}
      <div className="contact-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              <div className="contact-wrapper">
                <div className="contact-inner">
                  <div className="contact-headline">
                    <h3>Get Appointment starting a New Project?</h3>
                  </div>
                  <div className="contact-meta-info">
                    <div className="contact-single-info">
                      <i className="las la-map-marker-alt" />
                      <h6>Address</h6>
                      <p>248, Park Street Avenue, NY, USA </p>
                    </div>
                    <div className="contact-single-info">
                      <i className="las la-phone" />
                      <h6>Phone</h6>
                      <p>Mobile: +14+127893 </p>
                      <p>Hotline: +1235678</p>
                    </div>
                    <div className="contact-single-info">
                      <i className="las la-envelope" />
                      <h6>Phone</h6>
                      <p>Mail: support@ecofix.com </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8">
              <div className="contact-form-wrap">
                <div className="section-title">
                  <h6>Let's Get In Touch</h6>
                  <h2>Send Us a Message</h2>
                  <p>
                    Please put up a topic below reated to your inquiry. If you
                    dont find what you need fill out our contract form.{" "}
                  </p>
                </div>
                <div className="contact_form">
                  <form
                    action="assets/inc/sendemail.php"
                    className="comment-one_form contact-form-validated"
                    noValidate="novalidate"
                  >
                    <div className="row">
                      <div className="col-xl-6 col-lg-6">
                        <div>
                          <input
                            type="text"
                            placeholder="Your Name"
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div>
                          <input
                            type="email"
                            placeholder="Email Address"
                            name="email"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div>
                          <input
                            type="text"
                            placeholder="Phone Number"
                            name="phone"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div>
                          <input
                            type="email"
                            placeholder="Subject"
                            name="Subject"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div>
                          <textarea
                            name="message"
                            placeholder="Write a Message"
                            defaultValue={""}
                          />
                        </div>
                        <button type="submit" className="main-btn">
                          send a message
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
    </>
  );
}

export default Contact