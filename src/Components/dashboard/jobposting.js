import React, { PureComponent, Fragment } from 'react';

export default class JobPosting extends PureComponent{
  render() {
     
   return (
      <Fragment>
              <div className="card">
                  <div className="card-header" role="tab" id="headingOne1">
                    <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                      aria-controls="collapseOne1">
                      <h5 className="mb-0">
                        Job Posting Approvals (624) <i className="fas fa-angle-down rotate-icon"></i>
                      </h5>
                    </a>
                  </div>
                  <div id="collapseOne1" className="collapse show" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionEx">
                    <div className="card-body">
                      <div className="custom-scrollbar-css p-2">
                       <div className="table-responsive">
                    <table id="recent-purchases-listing" className="table" border="0">
                      <thead>
                        <tr>
                            <th>Title</th>
                            <th>Reported by</th>
                            <th>Post Date</th>
                            <th>Status</th>
                          
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                            <td>Entry Level Sales Position</td>
                            <td>Admin</td>
                            <td>08/03/2021</td>
                            <td><button type="button" className="btn btn-warning pending">Pending</button></td>
                           
                        </tr>
                        <tr>
                            <td>Entry Level Sales Position</td>
                            <td>Admin</td>
                            <td>08/03/2021</td>
                            <td><button type="button" className="btn btn-warning pending">Pending</button></td>
                           
                        </tr>
                        <tr>
                            <td>Entry Level Sales Position</td>
                            <td>Admin</td>
                            <td>08/03/2021</td>
                            <td><button type="button" className="btn btn-warning pending">Pending</button></td>
                           
                        </tr>
                        <tr>
                            <td>Entry Level Sales Position</td>
                            <td>Admin</td>
                            <td>08/03/2021</td>
                            <td><button type="button" className="btn btn-warning pending">Pending</button></td>
                           
                        </tr>
                        <tr>
                            <td>Entry Level Sales Position</td>
                            <td>Admin</td>
                            <td>08/03/2021</td>
                            <td><button type="button" className="btn btn-warning pending">Pending</button></td>
                           </tr> 
                          </tbody>
                      </table>
                     </div>
                    </div>
                    </div>
                   </div>
                  </div>

       
 
      </Fragment>
    );
  }
}
