import React, { PureComponent, Fragment } from 'react';

export default class DocumentsApproval extends PureComponent{
  render() {
     
   return (
      <Fragment>
          
                <div className="card">
                  <div className="card-header" role="tab" id="headingTwo2">
                    <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
                      aria-expanded="false" aria-controls="collapseTwo2">
                      <h5 className="mb-0">
                        Document Approvals (624) <i className="fas fa-angle-down rotate-icon"></i>
                      </h5>
                    </a>
                  </div>
                  <div id="collapseTwo2" className="collapse" role="tabpanel" aria-labelledby="headingTwo2" data-parent="#accordionEx">
                    <div className="card-body">
                      <div className="custom-scrollbar-css p-2">
                       <div className="table-responsive">
                    <table id="recent-purchases-listing" className="table" border="0">
                      <thead>
                        <tr>
                            <th>Title</th>
                            <th>Uploaded by</th>
                            <th>Upload date</th>
                            <th>Action</th>
                            <th>Status</th>
                          
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                            <td>Entry Level Sales Position</td>
                            <td>Admin</td>
                            <td>08/03/2021</td>
                            <td><a href="#">Resume</a></td>
                            <td><button type="button" className="btn btn-warning pending">Pending</button></td>
                           
                        </tr>
                        <tr>
                            <td>Entry Level Sales Position</td>
                            <td>Admin</td>
                            <td>08/03/2021</td>
                             <td><a href="#">Resume</a></td>
                            <td><button type="button" className="btn btn-warning pending">Pending</button></td>
                           
                        </tr>
                        <tr>
                            <td>Entry Level Sales Position</td>
                            <td>Admin</td>
                            <td>08/03/2021</td>
                             <td><a href="#">Resume</a></td>
                            <td><button type="button" className="btn btn-warning pending">Pending</button></td>
                           
                        </tr>
                        <tr>
                            <td>Entry Level Sales Position</td>
                            <td>Admin</td>
                            <td>08/03/2021</td>
                             <td><a href="#">Cancel</a></td>
                            <td><button type="button" className="btn btn-success pending">Approved</button></td>
                           
                        </tr>
                        <tr>
                            <td>Entry Level Sales Position</td>
                            <td>Admin</td>
                            <td>08/03/2021</td>
                             <td><a href="#">Re-Submit</a></td>
                            <td><button type="button" className="btn btn-danger pending">Rejected</button></td>
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
