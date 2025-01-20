import React from 'react';
import { TbMessageCircleUser } from "react-icons/tb"; 
import { ImPower } from "react-icons/im"; 
import { TfiCommentsSmiley } from "react-icons/tfi"; 
import { LuMessageCircleHeart } from "react-icons/lu"; 
import { MdKeyboardCommandKey } from "react-icons/md";
import { TbSteam } from "react-icons/tb";

const FeaturesSection = () => {
  return (
    <div className="container text-center my-5">
      <h2 className="text-danger" style={{ fontSize: '1.5rem' }}>Features</h2>
      <h3 className="fw-bold">Analytics that feels like it’s from the future</h3>
      <p className="text-muted">
        Powerful, self-serve product and growth analytics to help you convert, engage,
        and retain more users. Trusted by over 4,000 startups.
      </p>
      <div className="row mt-5">
        <div className="col-md-4 mb-4">
          <div>
            <TbMessageCircleUser size={40} className="text mb-3" />
            <h5 className="fw-bold">Share team inboxes</h5>
            <p className="text-muted">
              Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page
              and in the loop.
            </p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div>
            <ImPower size={40} className="text mb-3" />
            <h5 className="fw-bold">Deliver instant answers</h5>
            <p className="text-muted">
              An all-in-one customer service platform that helps you balance everything your customers need to be happy.
            </p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div>
            <TbSteam size={40} className="text mb-3" />
            <h5 className="fw-bold">Manage your team with reports</h5>
            <p className="text-muted">
              Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.
            </p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div>
            <TfiCommentsSmiley size={40} className="text mb-3" />
            <h5 className="fw-bold">Connect with customers</h5>
            <p className="text-muted">
              Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.
            </p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div>
            <MdKeyboardCommandKey size={40} className="text mb-3" />
            <h5 className="fw-bold">Connect the tools you already use</h5>
            <p className="text-muted">
              Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.
            </p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div>
            <LuMessageCircleHeart size={40} className="text mb-3" />
            <h5 className="fw-bold">Our people make the difference</h5>
            <p className="text-muted">
              We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
