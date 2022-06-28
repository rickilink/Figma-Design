import React from 'react'

import { Div, H2, Nav, Navi, Div3, Div4, Div5, Img, Img2, Img1, Link1, Lik, Hided, ToHide, ImgContainer } from './style'

export const Header = () => {
  return (
    <div>
        <Div >
            <Nav >
                <ToHide>
                    <Img2 width={20} height={20} src={'/static/assets/img/menu.png'}/>
                </ToHide>
                <div>
                    <Img width={100} height={23} src={'/static/assets/img/LOGO.png'}/>
                </div>
                <Navi>
                    <Hided>
                        <Lik href='#'><p>Home</p></Lik>
                        <Lik href='#Social'><p>Social</p></Lik>
                    </Hided>

                    <Div3 > <Link1 href='#'>Get Started  &gt;</Link1></Div3>
                </Navi>

            </Nav>
            <Div4 >
                <Div5 ><H2 >Your Strategy Is Only As Good As
                    You Execute It.</H2>
                </Div5>
                <ImgContainer>
                    <Img1 width={500} height={450} src={'/static/assets/img/Header-image.png'}/>
                </ImgContainer>
            </Div4>
        </Div>

    </div>
  )
}
