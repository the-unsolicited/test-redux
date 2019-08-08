import React from 'react';

import AlertList from './screenDay/AlertList';
import AlertDetails from './screenDay/AlertDetails';
import SessionDisplay from './screenDay/SessionDisplay';
import FormCharity from './screenDay/FormCharity';
import FormPanel from './screenDay/FormPanel';
import FormFolder from './screenDay/FormFolder';

const App: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className="row no-gutters">
        <div className="col-3 section-alert">
          <div className="d-flex flex-column h-100">
            <div className="flex-grow-1-">
              <AlertList/>
            </div>
            <div className="flex-grow-1">
              <AlertDetails/>
            </div>
            <div>
              <SessionDisplay/>
            </div>
          </div>
        </div>
        <div className="col-9 section-form bg-light">
          <div className="row">
            <div className="col-9 p-5">
              <FormCharity/>
              <FormPanel/>
            </div>
            <div className="col-3">
              <FormFolder/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
