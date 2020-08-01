import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './SideBar.css';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div>메뉴</div>
      <ul>
        <li>
          <p className="menu">해리포터</p>
          <p className="sub_menu">해리포터 안녕</p>
          <p className="sub_menu">해리포터 친구</p>
        </li>

        <li>
          <p className="menu">론위즐리</p>
        </li>
        <li>
          <p className="menu">헤르미온느</p>
          <p className="sub_menu">헤르미온느 안녕</p>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
