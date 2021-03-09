import React, { PureComponent, Fragment } from 'react';

export default class MySchedule extends PureComponent{
  render() {
     
   return (
      <Fragment>
         
              <div className="my_schedule">
                <p>My Schedule <strong>2</strong></p>
                <div className="data_list">
                 <div className="date_value odd">
                   <p>Mar <strong>08</strong></p>
                 </div>
                 <div className="text_value">
                   <p>Mega Career Fair <small>Mega Career Fair</small></p>
                 </div>
                </div>
                <div className="data_list">
                 <div className="date_value even">
                   <p>Mar <strong>07</strong></p>
                 </div>
                 <div className="text_value">
                   <p>Mega Career Fair Two <small>Mega Career Fair Two</small></p>
                 </div>
                </div>
              </div>

 
      </Fragment>
    );
  }
}
