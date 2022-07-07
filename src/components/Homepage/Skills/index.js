import React from 'react';
import './skills.scss';

import Icon from 'assets/images/nav-logo.svg'
import Button from 'elements/Button';

export default function index() {
  return (
    <div className='container-fluid p-0 based-skill-container'>
        <header className='skill-bg'>
            <div className='container'>
                <p className="skill-title">The Services I Provide</p>
                <p className='skill-subtitle'>Here is the detail things I will provide to you.</p>
                <div className='row justify-content-center'>

                    <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4'>
                        <div className='skill-container-1 d-flex flex-column'>
                            <div className='frame-skill-icon'>
                                <img className='skill-icon' src={Icon} alt='dont-think' />
                            </div>
                            <p className='service-name'>UX Design</p>
                            <p className='delieverables-name'>Deliverables Include:</p>
                            <ul className='deliverables-list'>
                                <li className='deliverables-item'>Business Goals and Technical Specifications</li>
                                <li className='deliverables-item'>UX Research report</li>
                                <li className='deliverables-item'>User Persone, User Journey dan User Maps</li>
                                <li className='deliverables-item'>Sketch and Wireframe</li>
                                <li className='deliverables-item'>Interactive Prototoype</li>
                            </ul>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4'>
                        <div className='skill-container-2 d-flex flex-column'>
                            <div className='frame-skill-icon'>
                                <img className='skill-icon' src={Icon} alt='dont-think' />
                            </div>
                            <p className='service-name'>UX Design</p>
                            <p className='delieverables-name'>Deliverables Include:</p>
                            <ul className='deliverables-list'>
                                <li className='deliverables-item'>Business Goals and Technical Specifications</li>
                                <li className='deliverables-item'>UX Research report</li>
                                <li className='deliverables-item'>User Persone, User Journey dan User Maps</li>
                                <li className='deliverables-item'>Sketch and Wireframe</li>
                                <li className='deliverables-item'>Interactive Prototoype</li>
                            </ul>
                        </div>
                    </div>

                    <p className='skill-subtitle mt-5'>Wanna know the service detail? Just hit the button below!</p>
                    <div className='frame-skill-btn text-center'>
                    <Button
                        type="button"
                        className="btn btn-outline-light btn-outline-custom"
                        onClick={"/detail-case-study"}
                        style={{ paddingLeft: 20, paddingRight: 20 }}
                      >
                        Check It Now
                      </Button>
                      </div>

                </div>
            </div>
        </header>
    </div>
  )
}
