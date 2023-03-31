import React from 'react';
import Chef from './chef/chef';
import './presentation.css';
import Resto from './resto/resto';

function Presentation() {
    return (
      <div className='presentation'>
        <Chef/>
        <Resto/>
      </div>
    );
  }

  export default Presentation;
