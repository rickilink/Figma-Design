import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

export const Div = styled.div`
margin-bottom: 90px
`
export const Nav = styled.nav`
    display: flex;
    background-color: #232120;
    width: 100%;
    height: 72px;
    align-items: center;
    justify-content:space-around;
   
    @media(min-width:1023px)
        {
            display: flex;
            background-color: #232120;
            width: 100%;
            height: 72px;
            align-items: center;
            
            justify-content: space-between;
            padding: 0 40px;
        } 
`
export const Link1 = styled(Link)`

`
export const Navi = styled.div`
   

    @media(min-width:1023px)
        {
            display: flex;
            align-content: center;
            align-items: center;
            gap: 25px;
        } 
`

export const ToHide = styled.div`


@media(min-width:1023px) {
    display:none;
}

`
export const Hided = styled.div`
    display:flex;
    gap: 25px;
    color:white;

@media(max-width:1023px) {
    display:none;
}

`
export const Lik = styled(Link)`
    

`
export const Img = styled(Image)`

`
export const Img2 = styled(Image)`

@media(min-width:1023px) {
    display:none;
}

`

export const Div3 = styled.button`
    background-color: #f79901;
    border: none;
    height: 43px;
    border-radius: 5px;
    width: auto;
    color: white;
    letter-spacing: 1px;
    padding: 5px;

`
export const Div4 = styled.div`
    position:relative;
    width: 100%;
    height: 480px;
    background: linear-gradient(337deg, #f79901 15%, rgb(0 0 0 / 5%) 67%);
    mix-blend-mode: darken;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media(min-width:1023px)
        {
            display:flex;
            align-content: center;
            justify-content: space-around;
            align-items: center;
            background:linear-gradient(337deg, #f79901 15%, rgb(0 0 0 / 5%) 67%);
            mix-blend-mode: darken;
        } 

`
export const ImgContainer = styled.div`
       position: absolute;
    bottom: 0;
    left: calc(50% - 118px);
    /* background-color: red; */
    width: 233px;
    height: 145px;

 @media(min-width:1023px)
        {
            display: contents;
        } 
`
export const Img1 = styled(Image)`


 
`

export const Div5 = styled.div`
       display: flex;
    flex-direction: column;
    text-align:center;

    @media(min-width:1023px){
        flex-direction: column;
        text-align: left;
        max-width: 320px;
    }
    
`
export const H2 = styled.h2`
 font-size: 2rem;
    align-self: center;
    padding: 80px 19px;
    color: #252b42;

   
   `
export const Div6 = styled.div`
    position: absolute;
    background-image: url(../public/assets/cover.png);
    height: 200px;
    width: 250px;
    left: calc(50% - 125px);
    background-size: contain;
    background-repeat: no-repeat;
    bottom: -71px;

    @media(min-width:600px) {
        display:none
    }
`
