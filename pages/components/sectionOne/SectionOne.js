import React from 'react'
import { Container, Div, Ul, Ul2, Li, Br, Img, Flexed } from './style'

export const SectionOne = () => {
  return (
    <Container>
        <Div>
            <h2>Dream Big <Br/> Do Right<span></span></h2>

        </Div>

        <Flexed>

            <Ul2>
                <Li><Img width={37} height={38} src='/static/assets/img/audit.png' /><p>Audit Report</p></Li>
                <Li><Img width={37} height={38} src='/static/assets/img/house.png' /><p>Audit Report</p></Li>
                <Li><Img width={37} height={38} src='/static/assets/img/clarity_users-line.png' /><p>Audit Report</p></Li>
                <Li><Img width={37} height={38} src='/static/assets/img/tax.png' /><p>Audit Report</p></Li>

            </Ul2>

          <Ul>
              <Li><Img width={37} height={38} src='/static/assets/img/audit.png' /><p>Audit Report</p></Li>
              <Li><Img width={37} height={38} src='/static/assets/img/house.png' /><p>Audit Report</p></Li>
              <Li><Img width={37} height={38} src='/static/assets/img/clarity_users-line.png' /><p>Audit Report</p></Li>
              <Li><Img width={37} height={38} src='/static/assets/img/tax.png' /><p>Audit Report</p></Li>

          </Ul>
        </Flexed>

    </Container>

  )
}
