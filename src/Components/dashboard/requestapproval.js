import React, { PureComponent, Fragment } from 'react';

export default class RequestApproval extends PureComponent{
  render() {
     
   return (
      <Fragment>
          
                <div className="card">
                  <div className="card-header" role="tab" id="headingThree3">
                    <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3"
                      aria-expanded="false" aria-controls="collapseThree3">
                      <h5 className="mb-0">
                       Request Approvals (624) <i className="fas fa-angle-down rotate-icon"></i>
                      </h5>
                    </a>
                  </div>
                  <div id="collapseThree3" className="collapse" role="tabpanel" aria-labelledby="headingThree3" data-parent="#accordionEx">
                    <div className="card-body">
                      <div className="custom-scrollbar-css p-2">
                       <div className="table-responsive">
                    <table id="recent-purchases-listing" className="table" border="0">
                      <thead>
                        <tr>
                            <th>Title</th>
                            <th>Raised by</th>
                            <th>Raised Date</th>
                            <th>Status</th>
                          
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                            <td>Entry Level Sales Position</td>
                            <td>Admin</td>
                            <td>08/03/2021</td>
                            <td><button type="button" className="btn btn-primary pending">Assigned</button></td>
                           
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
