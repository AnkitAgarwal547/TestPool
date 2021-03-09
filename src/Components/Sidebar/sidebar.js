import React, { PureComponent, Fragment } from 'react';

export default class Sidebar extends PureComponent{
  render() {
     
   return (
      <Fragment>
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">
                  <i className="fal fa-tachometer-alt"></i>
                    <span className="menu-title">Dashboard</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="announcements.html">
                  <i className="fal fa-megaphone"></i>
                    <span className="menu-title">Announcements</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                    <i className="fal fa-calendar-check"></i>
                    <span className="menu-title">Requests</span>
                    <i className="menu-arrow"></i>
                  </a>
                  <div className="collapse" id="ui-basic">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item"> <a className="nav-link" href="#"><i className="fal fa-calendar-check"></i>
                    <span className="menu-title">Requests</span></a></li>
                      <li className="nav-item"> <a className="nav-link" href="#"><i className="fal fa-calendar-check"></i>
                    <span className="menu-title">Requests</span></a></li>
                    </ul>
                  </div>
                </li>
                  <li className="nav-item">
                  <a className="nav-link" data-toggle="collapse" href="#Students" aria-expanded="false" aria-controls="Students">
                    <i className="fal fa-users-class"></i>
                    <span className="menu-title">Students</span>
                    <i className="menu-arrow"></i>
                  </a>
                  <div className="collapse" id="Students">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item"> <a className="nav-link" href="#"><i className="fal fa-users-class"></i>
                    <span className="menu-title">Students</span></a></li>
                      <li className="nav-item"> <a className="nav-link" href="#"><i className="fal fa-users-class"></i>
                    <span className="menu-title">Students</span></a></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="collapse" href="#Alumni" aria-expanded="false" aria-controls="Alumni">
                  <i className="fal fa-user-tag"></i>
                    <span className="menu-title">Alumni</span>
                    <i className="menu-arrow"></i>
                  </a>
                  <div className="collapse" id="Alumni">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item"> <a className="nav-link" href="#"><i className="fal fa-filter"></i> <span className="menu-title">My Favorites</span></a></li>
                      
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fal fa-users-cog"></i>
                    <span className="menu-title">Staff</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  <i className="fal fa-building"></i>
                    <span className="menu-title">Companies</span>
                  </a>
                </li>
                  <li className="nav-item">
                  <a className="nav-link" data-toggle="collapse" href="#Employers" aria-expanded="false" aria-controls="Employers">
                    <i className="fal fa-users"></i>
                    <span className="menu-title">Employers</span>
                    <i className="menu-arrow"></i>
                  </a>
                  <div className="collapse" id="Employers">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item"> <a className="nav-link" href="#"> <i className="fal fa-users"></i>
                    <span className="menu-title">Employers</span></a></li>
                      
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="collapse" href="#Jobs" aria-expanded="false" aria-controls="Jobs">
                <i className="fal fa-briefcase"></i>
                    <span className="menu-title">Jobs</span>
                    <i className="menu-arrow"></i>
                  </a>
                  <div className="collapse" id="Jobs">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item"> <a className="nav-link" href="#"> <i className="fal fa-briefcase"></i>
                    <span className="menu-title">Jobs</span></a></li>
                      
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  <i className="fal fa-user-tie"></i>
                    <span className="menu-title">Interviews</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  <i className="fal fa-calendar-day"></i>
                    <span className="menu-title">Events</span>
                  </a>
                </li>
            
                <li className="nav-item">
                  <a className="nav-link" href="#">
              <i className="fal fa-sign-in-alt"></i>
                    <span className="menu-title">Registrations</span>
                  </a>
                </li>
              </ul>
            </nav>
       
 
      </Fragment>
    );
  }
}
