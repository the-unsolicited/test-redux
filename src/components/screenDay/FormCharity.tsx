import React from 'react';

class FormCharity extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <form className="font-press p-4 shadow" style={{backgroundColor: '#f8d5ed', color: '#bb6a99'}}>
            <h5>Unfortunate Souls Charity Group</h5>
            <div className="custom-control-inline align-items-center">
              <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectFamily">To </label>
              <select className="custom-select custom-select-sm my-1 mr-sm-2" id="inlineFormCustomSelectFamily">
                <option selected>...</option>
                <option value="1">Borg Family</option>
                <option value="2">Castro Family</option>
                <option value="3">Janssen Family</option>
                <option value="4">Kozlovsky Family</option>
              </select>
            </div>
            <br/>
            <h1><em>MAKE A DIFFERENCE</em></h1>
            <p>We all struggle to make a difference.</p>
            <p>___________(Name)</p>
            <br/>
            <p>Your small donation of _______(Reword)</p>
            <p>will help to feed, clothe, and administer</p>
            <p>the less fortunate souls that desparately</p>
            <p>need your help.</p>
            <br/>
            <p>Get in touch today and feel letter about</p>
            <p>yourself. ___________(Phone)</p>
            <br/>
            <h4 className="font-vt"><em>Unfortunate Souls Charity Group</em></h4>
          </form>
        </div>
      </div>
    );
  }
}

export default FormCharity;
