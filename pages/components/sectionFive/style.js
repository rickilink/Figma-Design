import styled from 'styled-components'
import Image from 'next/dist/client/image'

export const Container = styled.div`
  background-color: #232120;
    width: 100%;
    color: white;
   
`
export const Img = styled(Image)`
  object-fit:contain;
`
export const Div = styled.div`
 width: 80%;
    margin:0 auto;

    padding-top:70px;
    padding-bottom:41px;

    @media(min-width:1023px){
      
      width: 70%;
      margin:0 auto;
   
      display: flex;
      justify-content: space-between;
      align-content: center;
  }

`
export const FlexResponsive = styled.div`
 
  @media(min-width:1023px){
    display:flex;
    flex-direction: column;
  }
`

export const DivFlex = styled.div`
 
  @media(min-width:1023px){
    display:flex;
    flex-direction: column;
  }
`
export const Ul = styled.ul`
 padding: 0;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin: 0;
    @media(min-width:1023px){
      gap:100px;
    }

`
export const H6 = styled.h6`
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 24px;
/* or 171% */
@media(min-width:1023px){
  line-height:2px;
}

`
export const Div2 = styled.div`
margin-bottom: 50px;

`
