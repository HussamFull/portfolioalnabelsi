import React, { useRef } from "react";
import { ArrowRight } from "react-bootstrap-icons";
import emailjs from "@emailjs/browser";

const Form = ({ isColTwo }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = "service_ebz5pxc";
    const templateId = "template_8t10e2c";
    const publicKey = "x061AsciFqg9TbzC1";

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          alert("تم إرسال الرسالة بنجاح");
          e.target.reset();
        },
        (error) => {
          console.log(error);
          alert("حدث خطأ أثناء إرسال الرسالة، حاول مرة أخرى");
        }
      );
  };

  return (
    <div className="replay__box cmn__bg">
      <h3>Leave a Reply</h3>
      <p>
        Your email address will not be published. Required fields are marked *
      </p>

      <form ref={form} onSubmit={sendEmail} className="row g-4">
        <div className={`${isColTwo ? "col-lg-6" : "col-lg-12"}`}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
          />
        </div>

        <div className={`${isColTwo ? "col-lg-6" : "col-lg-12"}`}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>

        <div className={`${isColTwo ? "col-lg-6" : "col-lg-12"}`}>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />
        </div>

        <div className="col-lg-12">
          <textarea
            name="message"
            rows="5"
            placeholder="Write Comments"
            required
          ></textarea>
        </div>

        <div className="col-lg-12">
          <button
            type="submit"
            className="d-flex fw-500 cmn--btn align-items-center gap-2"
          >
            <span className="get__text">Submit Comment</span>
            <span>
              <i className="fz-20">
                <ArrowRight />
              </i>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;