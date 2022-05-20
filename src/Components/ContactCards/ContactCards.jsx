import React, { useEffect } from 'react';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaPencilAlt,
  FaTimes,
  FaFacebookF,
  FaTwitter,
  FaSkype,
} from 'react-icons/fa';
import Styles from './ContactCards.module.scss';

function ContactCards() {
  useEffect(() => {
    document.body.classList.add('dashboard-body');

    return function cleanup() {
      document.body.classList.remove('body');
    };
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-xl-3">
          <div className="card m-b-30">
            <div className="card-body row">
              <div className="col-6">
                <a href="#/">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt=""
                    className={`${Styles.w60} img-fluid rounded-circle`}
                  />
                </a>
              </div>
              <div className="col-6 card-title align-self-center mb-0">
                <h5>Emma A. Main</h5>
                <p className="m-0">Graphics Designer</p>
              </div>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Email : <a href="#/">PaulGoyette@gmail.com</a>
                <FaEnvelope className="fa fa-envelope float-right" />
              </li>
              <li className="list-group-item">
                Phone : 000 123-456
                <FaPhoneAlt className="fa fa-phone float-right" />
              </li>
            </ul>
            <div className="card-body">
              <div className="float-right btn-group btn-group-sm">
                <a
                  href="#/"
                  className="btn btn-primary tooltips"
                  data-placement="top"
                  data-toggle="tooltip"
                  data-original-title="Edit"
                >
                  <FaPencilAlt className="fa fa-pencil" />{' '}
                </a>
                <a
                  href="#/"
                  className="btn btn-secondary tooltips"
                  data-placement="top"
                  data-toggle="tooltip"
                  data-original-title="Delete"
                >
                  <FaTimes className="fa fa-times" />
                </a>
              </div>
              <ul className={`${Styles.socialLinks} list-inline mb-0`}>
                <li className="list-inline-item">
                  <a
                    title=""
                    data-placement="top"
                    data-toggle="tooltip"
                    className="tooltips"
                    href="#/"
                    data-original-title="Facebook"
                  >
                    <FaFacebookF className="fa fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    title=""
                    data-placement="top"
                    data-toggle="tooltip"
                    className="tooltips"
                    href="#/"
                    data-original-title="Twitter"
                  >
                    <FaTwitter className="fa fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    title=""
                    data-placement="top"
                    data-toggle="tooltip"
                    className="tooltips"
                    href="#/"
                    data-original-title="Skype"
                  >
                    <FaSkype className="fa fa-skype" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-3">
          <div className="card m-b-30">
            <div className="card-body row">
              <div className="col-6">
                <a href="#/">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar6.png"
                    alt=""
                    className={`${Styles.w60} img-fluid rounded-circle`}
                  />
                </a>
              </div>
              <div className="col-6 card-title align-self-center mb-0">
                <h5>Paul L. Goyette</h5>
                <p className="m-0">Graphics Designer</p>
              </div>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Email : <a href="#/">PaulGoyette@gmail.com</a>
                <FaEnvelope className="fa fa-envelope float-right" />
              </li>
              <li className="list-group-item">
                Phone : 000 123-456
                <FaPhoneAlt className="fa fa-phone float-right" />
              </li>
            </ul>
            <div className="card-body">
              <div className="float-right btn-group btn-group-sm">
                <a
                  href="#/"
                  className="btn btn-primary tooltips"
                  data-placement="top"
                  data-toggle="tooltip"
                  data-original-title="Edit"
                >
                  <FaPencilAlt className="fa fa-pencil" />{' '}
                </a>
                <a
                  href="#/"
                  className="btn btn-secondary tooltips"
                  data-placement="top"
                  data-toggle="tooltip"
                  data-original-title="Delete"
                >
                  <FaTimes className="fa fa-times" />
                </a>
              </div>
              <ul className={`${Styles.socialLinks} list-inline mb-0`}>
                <li className="list-inline-item">
                  <a
                    title=""
                    data-placement="top"
                    data-toggle="tooltip"
                    className="tooltips"
                    href="#/"
                    data-original-title="Facebook"
                  >
                    <FaFacebookF className="fa fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    title=""
                    data-placement="top"
                    data-toggle="tooltip"
                    className="tooltips"
                    href="#/"
                    data-original-title="Twitter"
                  >
                    <FaTwitter className="fa fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    title=""
                    data-placement="top"
                    data-toggle="tooltip"
                    className="tooltips"
                    href="#/"
                    data-original-title="Skype"
                  >
                    <FaSkype className="fa fa-skype" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-3">
          <div className="card m-b-30">
            <div className="card-body row">
              <div className="col-6">
                <a href="#/">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar5.png"
                    alt=""
                    className={`${Styles.w60}  img-fluid rounded-circle`}
                  />
                </a>
              </div>
              <div className="col-6 card-title align-self-center mb-0">
                <h5>Jonathan Smith</h5>
                <p className="m-0">Graphics Designer</p>
              </div>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Email : <a href="#/">PaulGoyette@gmail.com</a>
                <FaEnvelope className="fa fa-envelope float-right" />
              </li>
              <li className="list-group-item">
                Phone : 000 123-456
                <FaPhoneAlt className="fa fa-phone float-right" />
              </li>
            </ul>
            <div className="card-body">
              <div className="float-right btn-group btn-group-sm">
                <a
                  href="#/"
                  className="btn btn-primary tooltips"
                  data-placement="top"
                  data-toggle="tooltip"
                  data-original-title="Edit"
                >
                  <FaPencilAlt className="fa fa-pencil" />{' '}
                </a>
                <a
                  href="#/"
                  className="btn btn-secondary tooltips"
                  data-placement="top"
                  data-toggle="tooltip"
                  data-original-title="Delete"
                >
                  <FaTimes className="fa fa-times" />
                </a>
              </div>
              <ul className={`${Styles.socialLinks} list-inline mb-0`}>
                <li className="list-inline-item">
                  <a
                    title=""
                    data-placement="top"
                    data-toggle="tooltip"
                    className="tooltips"
                    href="#/"
                    data-original-title="Facebook"
                  >
                    <FaFacebookF className="fa fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    title=""
                    data-placement="top"
                    data-toggle="tooltip"
                    className="tooltips"
                    href="#/"
                    data-original-title="Twitter"
                  >
                    <FaTwitter className="fa fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    title=""
                    data-placement="top"
                    data-toggle="tooltip"
                    className="tooltips"
                    href="#/"
                    data-original-title="Skype"
                  >
                    <FaSkype className="fa fa-skype" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-3">
          <div className="card m-b-30">
            <div className="card-body row">
              <div className="col-6">
                <a href="#/">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    alt=""
                    className={`${Styles.w60} img-fluid rounded-circle`}
                  />
                </a>
              </div>
              <div className="col-6 card-title align-self-center mb-0">
                <h5>Lily J. Ford</h5>
                <p className="m-0">Graphics Designer</p>
              </div>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Email : <a href="#/">PaulGoyette@gmail.com</a>
                <FaEnvelope className="fa fa-envelope float-right" />
              </li>
              <li className="list-group-item">
                Phone : 000 123-456
                <FaPhoneAlt className="fa fa-phone float-right" />
              </li>
            </ul>
            <div className="card-body">
              <div className="float-right btn-group btn-group-sm">
                <a
                  href="#/"
                  className="btn btn-primary tooltips"
                  data-placement="top"
                  data-toggle="tooltip"
                  data-original-title="Edit"
                >
                  <FaPencilAlt className="fa fa-pencil" />{' '}
                </a>
                <a
                  href="#/"
                  className="btn btn-secondary tooltips"
                  data-placement="top"
                  data-toggle="tooltip"
                  data-original-title="Delete"
                >
                  <FaTimes className="fa fa-times" />
                </a>
              </div>
              <ul className={`${Styles.socialLinks} list-inline mb-0`}>
                <li className="list-inline-item">
                  <a
                    title=""
                    data-placement="top"
                    data-toggle="tooltip"
                    className="tooltips"
                    href="#/"
                    data-original-title="Facebook"
                  >
                    <FaFacebookF className="fa fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    title=""
                    data-placement="top"
                    data-toggle="tooltip"
                    className="tooltips"
                    href="#/"
                    data-original-title="Twitter"
                  >
                    <FaTwitter className="fa fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    title=""
                    data-placement="top"
                    data-toggle="tooltip"
                    className="tooltips"
                    href="#/"
                    data-original-title="Skype"
                  >
                    <FaSkype className="fa fa-skype" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCards;
