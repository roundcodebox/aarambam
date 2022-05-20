import React, { useEffect } from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaTwitter, FaGithub, FaLinkedinIn, FaSkype } from 'react-icons/fa';
import Styles from './AuthorsCard.module.scss';
import DashboardHeader from '../Dashboard/DashboardHeader';
import DashboardNav from '../Dashboard/DashboardNav';

function AuthorsCard() {
  useEffect(() => {
    document.body.classList.add('dashboard-body');

    return function cleanup() {
      document.body.classList.remove('body');
    };
  }, []);
  return (
    <>
      <DashboardHeader />
      <DashboardNav />
      <div className="container px-4 py-5 bootstrap snippets bootdey">
        <div className="row g-5 py-5">
          <div className="col-sm-12 col-md-12">
            <section className="container py-5">
              <h2 className="h4 block-title text-center mt-2">
                This month top authors
              </h2>
              <div className="row pt-3">
                <div className="col-lg-3 col-sm-6 mb-30 pb-2">
                  <div className={`${Styles.teamCardStyle3} mx-auto`}>
                    <div className={`${Styles.teamThumb}`}>
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="Author"
                      />
                    </div>
                    <h4 className={`${Styles.teamName}`}>Emanuel Ortega</h4>
                    <a
                      className={`${Styles.teamContactLink}`}
                      href="tel:+19871625346"
                    >
                      <FiPhone className="fe-icon-phone" />
                      &nbsp;+1 (987) 162 53 46
                    </a>
                    <a
                      className={`${Styles.teamContactLink}`}
                      href="mailto:info@example.com"
                    >
                      <FiMail className="fe-icon-mail" />
                      &nbsp;info@example.com
                    </a>
                    <div className={`${Styles.teamSocialBarWrap}`}>
                      <div className={`${Styles.teamSocialBar}`}>
                        <a
                          className={`${Styles.sbTwitter} ${Styles.socialBtn} ${Styles.sbStyle2} `}
                          href="#/"
                        >
                          <FaTwitter className="fa fa-twitter" />
                        </a>
                        <a
                          className={`${Styles.sbGithub} ${Styles.socialBtn} ${Styles.sbStyle2} `}
                          href="#/"
                        >
                          <FaGithub className="fa fa-github" />
                        </a>
                        <a
                          className={`${Styles.sbStyle2} ${Styles.socialBtn}  ${Styles.sbLinkedin}`}
                          href="#/"
                        >
                          <FaLinkedinIn className="fa fa-linkedin" />
                        </a>
                        <a
                          className={`${Styles.sbSkype} ${Styles.socialBtn} ${Styles.sbStyle2} `}
                          href="#/"
                        >
                          <FaSkype className="fa fa-skype" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 mb-30 pb-2">
                  <div className={`${Styles.teamCardStyle3} mx-auto`}>
                    <div className={`${Styles.teamThumb}`}>
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar6.png"
                        alt="Author"
                      />
                    </div>
                    <h4 className={`${Styles.teamName}`}>Samantha Palson</h4>
                    <a
                      className={`${Styles.teamContactLink}`}
                      href="tel:+57872336590"
                    >
                      <FiPhone className="fe-icon-phone" />
                      &nbsp; +5 (787) 233 65 90
                    </a>
                    <a
                      className={`${Styles.teamContactLink}`}
                      href="mailto:info@example.com"
                    >
                      <FiMail className="fe-icon-mail" />
                      &nbsp;info@example.com
                    </a>
                    <div className={`${Styles.teamSocialBarWrap}`}>
                      <div className={`${Styles.teamSocialBar}`}>
                        <a
                          className={`${Styles.sbTwitter} ${Styles.socialBtn} ${Styles.sbStyle2} `}
                          href="#/"
                        >
                          <FaTwitter className="fa fa-twitter" />
                        </a>
                        <a
                          className={`${Styles.sbGithub} ${Styles.socialBtn} ${Styles.sbStyle2} `}
                          href="#/"
                        >
                          <FaGithub className="fa fa-github" />
                        </a>
                        <a
                          className={`${Styles.sbStyle2} ${Styles.socialBtn}  ${Styles.sbLinkedin}`}
                          href="#/"
                        >
                          <FaLinkedinIn className="fa fa-linkedin" />
                        </a>
                        <a
                          className={`${Styles.sbSkype} ${Styles.socialBtn} ${Styles.sbStyle2} `}
                          href="#/"
                        >
                          <FaSkype className="fa fa-skype" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 mb-30 pb-2">
                  <div className={`${Styles.teamCardStyle3} mx-auto`}>
                    <div className={`${Styles.teamThumb}`}>
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                        alt="Author"
                      />
                    </div>
                    <h4 className={`${Styles.teamName}`}>Emma Johnson</h4>
                    <a
                      className={`${Styles.teamContactLink}`}
                      href="tel:+13907765843"
                    >
                      <FiPhone className="fe-icon-phone" />
                      &nbsp;+1 (390) 776 58 43
                    </a>
                    <a
                      className={`${Styles.teamContactLink}`}
                      href="mailto:info@example.com"
                    >
                      <FiMail className="fe-icon-mail" />
                      &nbsp;info@example.com
                    </a>
                    <div className={`${Styles.teamSocialBarWrap}`}>
                      <div className={`${Styles.teamSocialBar}`}>
                        <a
                          className={`${Styles.sbTwitter} ${Styles.socialBtn} ${Styles.sbStyle2} `}
                          href="#/"
                        >
                          <FaTwitter className="fa fa-twitter" />
                        </a>
                        <a
                          className={`${Styles.sbGithub} ${Styles.socialBtn} ${Styles.sbStyle2} `}
                          href="#/"
                        >
                          <FaGithub className="fa fa-github" />
                        </a>
                        <a
                          className={`${Styles.sbStyle2} ${Styles.socialBtn}  ${Styles.sbLinkedin}`}
                          href="#/"
                        >
                          <FaLinkedinIn className="fa fa-linkedin" />
                        </a>
                        <a
                          className={`${Styles.sbSkype} ${Styles.socialBtn} ${Styles.sbStyle2} `}
                          href="#/"
                        >
                          <FaSkype className="fa fa-skype" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 mb-30 pb-2">
                  <div className={`${Styles.teamCardStyle3} mx-auto`}>
                    <div className={`${Styles.teamThumb}`}>
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar3.png"
                        alt="Author"
                      />
                    </div>
                    <h4 className={`${Styles.teamName}`}>William Smith</h4>
                    <a
                      className={`${Styles.teamContactLink}`}
                      href="tel:+72056557984"
                    >
                      <FiPhone className="fe-icon-phone" />
                      &nbsp;+7 (205) 655 79 84
                    </a>
                    <a
                      className={`${Styles.teamContactLink}`}
                      href="mailto:info@example.com"
                    >
                      <FiMail className="fe-icon-mail" />
                      &nbsp;info@example.com
                    </a>
                    <div className={`${Styles.teamSocialBarWrap}`}>
                      <div className={`${Styles.teamSocialBar}`}>
                        <a
                          className={`${Styles.sbTwitter} ${Styles.socialBtn} ${Styles.sbStyle2} `}
                          href="#/"
                        >
                          <FaTwitter className="fa fa-twitter" />
                        </a>
                        <a
                          className={`${Styles.sbGithub} ${Styles.socialBtn} ${Styles.sbStyle2} `}
                          href="#/"
                        >
                          <FaGithub className="fa fa-github" />
                        </a>
                        <a
                          className={`${Styles.sbStyle2} ${Styles.socialBtn}  ${Styles.sbLinkedin}`}
                          href="#/"
                        >
                          <FaLinkedinIn className="fa fa-linkedin" />
                        </a>
                        <a
                          className={`${Styles.sbSkype} ${Styles.socialBtn} ${Styles.sbStyle2} `}
                          href="#/"
                        >
                          <FaSkype className="fa fa-skype" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthorsCard;
