import styled from 'styled-components'

export const Container = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: flex-end;
    background-color: #232120;

    @media(min-width:1023px){
      flex-direction: row;
      justify-content: space-between;
      padding: 0 20px;
}
`

export const Div = styled.div`
display:flex;


`
export const Div2 = styled.div`
@media(min-width:1023px){
  display:flex;
}


`
export const P = styled.p`
  font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 24px;
padding-right:10px;


`
