import React, { PureComponent, Fragment } from 'react';
import Sidebar from '../Sidebar/sidebar';
import Header from '../Header/header';
import DashboardLeft from '../dashboard/dashboardleft';
import DashboardRight from '../dashboard/dashboardright';

export default class Home extends PureComponent{
  render() {
     
   return (
      <Fragment>
         <div className="container-scroller">
            <Header/>
            <div class="container-fluid page-body-wrapper">
              <Sidebar />
              <div class="main-panel">
              <div class="content-wrapper">
                  <div class="row">
                    <div class="col-md-12 grid-margin">
                      <div class="d-flex justify-content-between flex-wrap">
                        <div class="d-flex align-items-end flex-wrap">
                          <div class="mr-md-3 mr-xl-5">
                             <p class="mb-md-0">Dashboard</p>
                             <h2 class="heading">My Approval Queue</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <DashboardLeft />
                    <DashboardRight />
                  </div>
              </div></div>
            </div>

         </div>
      </Fragment>
    );
  }
}
