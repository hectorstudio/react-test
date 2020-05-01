import React from 'react';
import { Link } from "react-router-dom";
import './style.scss';

const MenuItem = ({url, title}) => {
  return (
    <li>
      <Link to={url}>{title}</Link>
    </li>
  )
}

export default MenuItem;
