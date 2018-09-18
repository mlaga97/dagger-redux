// Library imports
import React from 'react';

// Styling
import '../style/dagger.css';

export default () => (
  <div class='footer panel panel-default panel-footer'>
    <div class='panel-body'>
      <div class='row'>
        <div class='col-sm-3 logo'>
          <img src='./images/sosw_368x140.png' alt='USM SOSW' class='footer-image' />
        </div>
        <div class='col-sm-6 flex credits'>
          <div>Dagger 2.0 (demo)</div>
          <div>&copy; 2013,2018 The University of Southern Mississippi</div>
          <div>Funded by the Gulf Region Health Outreach Program</div>
        </div>
        <div class='col-sm-3 logo'>
          <img src='./images/GRHOP.png' alt='G.R.H.O.P' class='footer-image' />
        </div>
      </div>
    </div>
  </div>
)
