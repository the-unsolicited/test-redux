import React from 'react';

const AlertList: React.FC = () => {
  return (
    <div className="list-group list-group-flush">
      <button type="button" className="list-group-item list-group-item-action active d-flex justify-content-between align-items-center">
        Cras justo odio
        <span className="badge badge-primary badge-pill">*</span>
      </button>
      <button type="button" className="list-group-item list-group-item-action">...</button>
      <button type="button" className="list-group-item list-group-item-action">...</button>
      <button type="button" className="list-group-item list-group-item-action">...</button>
      <button type="button" className="list-group-item list-group-item-action" disabled>...</button>
      <button type="button" className="list-group-item list-group-item-action">...</button>
      <button type="button" className="list-group-item list-group-item-action">▩▩▩</button>
      <button type="button" className="list-group-item list-group-item-action">▦▦▦</button>
      <button type="button" className="list-group-item list-group-item-action" disabled>...</button>
      <button type="button" className="list-group-item list-group-item-action">000▒CHARITY▒DONATION▒▒▒▒▒▒▒</button>
      <button type="button" className="list-group-item list-group-item-action">▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒</button>
    </div>
  );
}

export default AlertList;
