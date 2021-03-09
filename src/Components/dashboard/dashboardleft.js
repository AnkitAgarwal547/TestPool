import React, { PureComponent, Fragment } from 'react';
import JobPosting from './jobposting';
import DocumentsApproval from './documentsapproval';
import RequestApproval from './requestapproval';

export default class Sidebar extends PureComponent{
  render() {
     
   return (
      <Fragment>
           <div className="col-md-8 grid-margin stretch-card">
              <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                <JobPosting />
                <DocumentsApproval />
                <RequestApproval />
               
               </div>
             </div>

       
 
      </Fragment>
    );
  }
}
