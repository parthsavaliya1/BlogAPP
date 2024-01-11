import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { facebookIcon, instagramIcon, twitterIcon, youtubeIcon } from '../utils/icon'
import Logo from '../assets/blogfooter.png'

const Footer = () => {
    return (
        <Container>
            <Row className='footer-section'>
                <div className='footer'>
                    <div className='footer-left'>
                        <div className='footer-logo'>
                            <img className='logo-img' src={Logo} />
                        </div>
                        <div className='footer-policy'>
                            <div className='privacy-policy privacy'>Privacy Policy</div>
                            <div className='privacy-policy'>Term & Conditions</div>
                            <div className='privacy-policy'>Phone:9909049699</div>

                        </div>
                        <div className='social-icon'>
                            <div className='icon'>
                                {facebookIcon()}
                            </div>
                            <div className='icon'>{instagramIcon()}</div>
                            <div className='icon'>{twitterIcon()}</div>
                            <div className='icon'>{youtubeIcon()}</div>
                        </div>
                    </div>
                    <div className='footer-right'>
                        <div>© 2024 BlogAPP. All Rights Reserved
                        </div>
                    </div>

                </div>
            </Row>
        </Container>
    )
}

export default Footer