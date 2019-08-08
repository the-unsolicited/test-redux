import React from 'react';

const FormPanel: React.FC = () => {
  return (
    <div className="row no-gutters p-4">
      <div className="col px-1">
        <button type="button" className="btn btn-secondary btn-lg btn-block rounded-0">SIGN</button>
      </div>
      <div className="col px-1">
        <button type="button" className="btn btn-secondary btn-lg btn-block rounded-0">SEAL</button>
      </div>
      <div className="col px-1">
        <button type="button" className="btn btn-secondary btn-lg btn-block rounded-0">DELIVER</button>
      </div>
    </div>
  );
}

export default FormPanel;
