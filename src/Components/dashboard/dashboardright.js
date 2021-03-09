import React, { PureComponent, Fragment } from 'react';
import MyJobs from './myjobs';
import UpcomingEvents from './upcomingevents';
import MySchedule from './myschedule';
import ActivityStream from './activitystream';

export default class Sidebar extends PureComponent{
  render() {
     
   return (
      <Fragment>
            <div className="col-md-4">
              <MyJobs />
              <UpcomingEvents />
              <MySchedule />
              <ActivityStream />
            </div>
 
      </Fragment>
    );
  }
}
