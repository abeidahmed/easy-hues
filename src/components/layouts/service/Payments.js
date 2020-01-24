import React from "react";

const Payment = () => {
  return (
    <div className="service-inner-right payment-inner-right order-1">
      <div className="payment-info">
        <div className="payment-details">
          <img
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
            alt=""
          />
          <div className="payment-details-wrapper">
            <h5>Payment to Courtland Fenning</h5>
            <span className="payment-amount">
              <span className="payment-currency">$20,000</span> USD
            </span>
          </div>
        </div>
        <div className="payment-status payment-status-success">
          <span className="payment-status-dot"></span>
          <span className="payment-status-type">Success</span>
        </div>
      </div>
      <div className="payment-info">
        <div className="payment-details">
          <img
            src="https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
            alt=""
          />
          <div className="payment-details-wrapper">
            <h5>Payment to Jacob Chander</h5>
            <span className="payment-amount">
              <span className="payment-currency">$15,000</span> USD
            </span>
          </div>
        </div>
        <div className="payment-status payment-status-processing">
          <span className="payment-status-dot"></span>
          <span className="payment-status-type">Processing</span>
        </div>
      </div>
      <div className="payment-info">
        <div className="payment-details">
          <img
            src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
            alt=""
          />
          <div className="payment-details-wrapper">
            <h5>Payment to George Mills</h5>
            <span className="payment-amount">
              <span className="payment-currency">$25,400</span> USD
            </span>
          </div>
        </div>
        <div className="payment-status payment-status-success">
          <span className="payment-status-dot"></span>
          <span className="payment-status-type">Success</span>
        </div>
      </div>
      <div className="payment-info">
        <div className="payment-details">
          <img
            src="https://images.unsplash.com/photo-1495516372021-9c815fa7e668?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
            alt=""
          />
          <div className="payment-details-wrapper">
            <h5>Payment to Rebecca Heart</h5>
            <span className="payment-amount">
              <span className="payment-currency">$17,300</span> USD
            </span>
          </div>
        </div>
        <div className="payment-status payment-status-failed">
          <span className="payment-status-dot"></span>
          <span className="payment-status-type">Failed</span>
        </div>
      </div>
    </div>
  );
};

export default Payment;
