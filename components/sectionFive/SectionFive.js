import React from 'react'

import { Container, Div, Div2, Img, H6, Ul, FlexResponsive } from './style'

export const SectionFive = () => {
  return (
    <Container >
    <Div >
        <div>
            <Img width={80} height={18} src='/static/assets/img/LOGO.png'/>
            <Div2>
                <p>+51 999 999 999</p>
                <H6>Rockefeller PlazaNew York, NY 10112</H6>
            </Div2>
        </div>
       <div>
       <div>
            <Ul>
                <div>
                    <li><h3>Learn More</h3></li>
                    <li><H6>How It Works</H6></li>
                    <li><H6>Who We Are</H6></li>
                    <li><H6>Careers</H6></li>
                    <li><H6>Blog</H6></li>
                    <li><H6>FAQs</H6></li>

                </div>
                <div >
                    <li ><h3>Social</h3></li>
                    <li ><H6>Facebook</H6></li>
                    <li ><H6>Twitter</H6></li>
                    <li ><H6>Instagram</H6></li>
                    <li ><H6>Pinterest</H6></li>
                    <li ><H6>Linkedin</H6></li>
                </div>
            </Ul>
        </div>
       </div>
       <div>
        <h3>Downloads</h3>
            <FlexResponsive>
                    <Img width={160} height={75} src='/static/assets/img/google-play.png' />
                    <Img width={160} height={75} src='/static/assets/img/app-store.png'/>
            </FlexResponsive>
       </div>

    </Div>
</Container>

  )
}
