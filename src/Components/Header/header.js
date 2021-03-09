import React, { PureComponent, Fragment } from 'react';

export default class Header extends PureComponent{
  render() {
     
   return (
      <Fragment>
        <div>
           <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="navbar-brand-wrapper d-flex justify-content-center">
              <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">  
                <a className="navbar-brand brand-logo" href="index.html">Test Pool</a>
                <a className="navbar-brand brand-logo-mini" href="index.html">Test Pool</a>
                <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                  <span className="mdi mdi-sort-variant"></span>
                </button>
              </div>  
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
              <ul className="navbar-nav mr-lg-4 w-100">
                <li className="nav-item nav-search d-none d-lg-block w-100">
                  <div className="input-group">
                    <select>
                      <option>All areas</option>
                      <option>All areas</option>
                      <option>All areas</option>
                      <option>All areas</option>
                      <option>All areas</option>
                    </select>
                    <input type="text" className="form-control" placeholder="Search all areas" aria-label="search" aria-describedby="search" />
                    <div className="input-group-prepend">
                    <span className="input-group-text" id="search">
                        <i className="mdi mdi-magnify"></i>
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="navbar-nav navbar-nav-right user_details">
              
                <li className="nav-item nav-profile dropdown">
                  <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                  
                    <span className="nav-profile-name">Judy Strom Bernally (Staff) <small>Indian Standard Time</small></span>
                    <img src="images/faces/face5.jpg" alt="profile" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                    <a className="dropdown-item">
                      <i className="mdi mdi-settings text-primary"></i>
                      Settings
                    </a>
                    <a className="dropdown-item">
                      <i className="mdi mdi-logout text-primary"></i>
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
              <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                <span className="mdi mdi-menu"></span>
              </button>
            </div>
        </nav>
      </div>   
 
      </Fragment>
    );
  }
}
