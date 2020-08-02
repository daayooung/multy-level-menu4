import React, { useState } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Album from './routes/Album';

import './App.css';

function App() {
  const [isShown, setIsShown] = useState(false);

  const onMenuEnter = () => {
    console.log('mouse is over');
    setIsShown(true);
  };

  const onMenuLeave = (e) => {
    console.log('mouse is out');
    console.log(e.target.childNodes[1]);
    if (e.target.childNodes[1].classList.contains('clicked')) {
      return;
    }
    setIsShown(false);
  };

  const onMenuClick = (e) => {
    console.log('mouse click');

    setIsShown(true);
    e.target.classList.add('clicked');
  };

  return (
    <div className="App">
      <div className="sidebar">
        <div>
          <NavLink to="/" className="navlink" exact>
            Harry Potter
          </NavLink>
        </div>
        <ul>
          <li>
            <p className="menu">해리포터</p>
            <NavLink to="/about/harrypotter" className="navlink sub_menu ">
              해리포터 소개
            </NavLink>
            <NavLink to="/album" className="navlink sub_menu">
              해리포터 앨범
            </NavLink>
          </li>

          <li>
            <p className="menu">론위즐리</p>
          </li>
          <li onMouseEnter={onMenuEnter} onMouseLeave={onMenuLeave}>
            <p className="menu">헤르미온느</p>
            {isShown && (
              <NavLink
                to="/about/hermione"
                className="navlink sub_menu "
                onClick={onMenuClick}
              >
                헤르미온느 소개
              </NavLink>
            )}
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="about/:charactes" component={About} />
        <Route path={'/album'} component={Album} />
        <Route
          render={({ location }) => (
            <div className="contents">
              <h3>존재하지 않는 페이지 입니다.</h3>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
