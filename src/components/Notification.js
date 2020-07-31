import React from "react";
import PropTypes from "prop-types";

const Notification = (prop) => <h2>{prop.message}</h2>;
export default Notification;
Notification.propTypes = {
  message: PropTypes.string,
};
