import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from "elements/Button";

import './comingSoon.scss';

export default function ComingSoon() {
  const toHome = useNavigate();

  return (
    <div className='container-fluid p-0 comsoon-bg'>
        <div className='d-flex flex-column align-items-center justify-content-center' style={flexBg}>
            <p className='stay-tuned-text'>Stay tuned. I'm planning something big!</p>
            <Button
              className='btn btn-primary'
              style={styles}
              onClick={ () => toHome('/') }
            >Go to home</Button>
        </div>
    </div>
  )
}

const flexBg = {
  height: "100vh"
}

const styles = {
  paddingLeft: 30,
  paddingRight: 30,
  marginTop: 60
}
