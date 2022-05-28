import React, { useEffect } from 'react';
import Styles from './ProductTracking.scss';

function ProductTracking() {
  useEffect(() => {
    document.body.classList.add('dashboard-body');

    return function cleanup() {
      document.body.classList.remove('body');
    };
  }, []);
  return (
    <div className="col-xl-4">
      <div className={`${Styles.card}`}>
        <div className="card-body">
          <h4 className="header-title mb-4">Product Traking</h4>
          <ul
            className={`${Styles.activityWid} ${Styles.listUnstyled} ${Styles.mb0}`}
          >
            <li className="activity-list activity-border">
              <div className="activity-icon avatar-sm">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  className="avatar-sm rounded-circle"
                  alt=""
                />
              </div>
              <div className={`${Styles.media}`}>
                <div className={`${Styles.me3}`}>
                  <h5 className="font-size-15 mb-1">Your Manager Posted</h5>
                  <p className={`text-muted font-size-14 ${Styles.mb0}`}>
                    James Raphael
                  </p>
                </div>

                <div className="media-body">
                  <div className="text-end d-none d-md-block">
                    <p
                      className={`text-muted font-size-13 mt-2  ${Styles.mb0}`}
                    >
                      <i className="fa fa-calendar font-size-15 text-primary" />
                      3 days
                    </p>
                  </div>
                </div>
              </div>
            </li>

            <li className="activity-list activity-border">
              <div className="activity-icon avatar-sm">
                <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                  <i className="fa fa-shopping-cart font-size-16" />
                </span>
              </div>
              <div className={`${Styles.media}`}>
                <div className={`${Styles.me3}`}>
                  <h5 className="font-size-15 mb-1">
                    You have 5 pending order.
                  </h5>
                  <p className={`text-muted font-size-14 ${Styles.mb0}`}>
                    America
                  </p>
                </div>

                <div className="media-body">
                  <div className="text-end d-none d-md-block">
                    <p
                      className={`text-muted font-size-13 mt-2  ${Styles.mb0}`}
                    >
                      <i className="fa fa-calendar font-size-15 text-primary" />
                      1 days
                    </p>
                  </div>
                </div>
              </div>
            </li>

            <li className="activity-list activity-border">
              <div className="activity-icon avatar-sm">
                <span className="avatar-title bg-soft-success text-success rounded-circle">
                  <i className="fa fa-user font-size-16" />
                </span>
              </div>
              <div className={`${Styles.media}`}>
                <div className={`${Styles.me3}`}>
                  <h5 className="font-size-15 mb-1">New Order Received</h5>
                  <p className={`text-muted font-size-14 ${Styles.mb0}`}>
                    Thank You
                  </p>
                </div>

                <div className="media-body">
                  <div className="text-end d-none d-md-block">
                    <p
                      className={`text-muted font-size-13 mt-2  ${Styles.mb0}`}
                    >
                      <i className="fa fa-calendar font-size-15 text-primary" />
                      Today
                    </p>
                  </div>
                </div>
              </div>
            </li>

            <li className="activity-list activity-border">
              <div className="activity-icon avatar-sm">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar6.png"
                  className="avatar-sm rounded-circle"
                  alt=""
                />
              </div>
              <div className={`${Styles.media}`}>
                <div className={`${Styles.me3}`}>
                  <h5 className="font-size-15 mb-1">Your Manager Posted</h5>
                  <p className={`text-muted font-size-14 ${Styles.mb0}`}>
                    James Raphael
                  </p>
                </div>

                <div className="media-body">
                  <div className="text-end d-none d-md-block">
                    <p
                      className={`text-muted font-size-13 mt-2  ${Styles.mb0}`}
                    >
                      <i className="fa fa-calendar font-size-15 text-primary" />
                      3 days
                    </p>
                  </div>
                </div>
              </div>
            </li>

            <li className="activity-list activity-border">
              <div className="activity-icon avatar-sm">
                <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                  <i className="fa fa-shopping-cart font-size-16" />
                </span>
              </div>
              <div className={`${Styles.media}`}>
                <div className={`${Styles.me3}`}>
                  <h5 className="font-size-15 mb-1">
                    You have 1 pending order.
                  </h5>
                  <p className={`text-muted font-size-14 ${Styles.mb0}`}>
                    Dubai
                  </p>
                </div>

                <div className="media-body">
                  <div className="text-end d-none d-md-block">
                    <p
                      className={`text-muted font-size-13 mt-2  ${Styles.mb0}`}
                    >
                      <i className="fa fa-calendar font-size-15 text-primary" />
                      1 days
                    </p>
                  </div>
                </div>
              </div>
            </li>

            <li className="activity-list">
              <div className="activity-icon avatar-sm">
                <span className="avatar-title bg-soft-success text-success rounded-circle">
                  <i className="fa fa-user font-size-16" />
                </span>
              </div>
              <div className={`${Styles.media}`}>
                <div className={`${Styles.me3}`}>
                  <h5 className="font-size-15 mb-1">New Order Received</h5>
                  <p className={`text-muted font-size-14 ${Styles.mb0}`}>
                    Thank You
                  </p>
                </div>

                <div className="media-body">
                  <div className="text-end d-none d-md-block">
                    <p
                      className={`text-muted font-size-13 mt-2  ${Styles.mb0}`}
                    >
                      <i className="fa fa-calendar font-size-15 text-primary" />
                      Today
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductTracking;
