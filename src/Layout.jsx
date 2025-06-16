import React from "react"
import ImgMb from "./assets/images/bg-header-mobile.svg"
import ImgDp from "./assets/images/bg-header-desktop.svg"
import styled from "styled-components"
import { Theme } from "./GlobalStyle"

const Section = styled.section`
background: ${Theme.colors.LightGrayishCyanBackground};
padding: 6rem 2rem 3rem;
position: relative;
min-height: 100vh;
`
const ContainerImgs = styled.div`
position: relative;
background: #5CA5A5;
height: 15.6rem;
`
const ImgMobile = styled.img`
position: absolute;
display: flex;
width: 100%;
@media (min-width: 1024px) {
  display: none;
}
`
const ImgDesktop = styled.img`
position: absolute;
display: none;
@media (min-width: 1024px) {
  display: flex;
  width: 100%;
}
`

const Layout = ({ children }) => {
  return (
    <>
      <ContainerImgs>
        <ImgMobile src={ImgMb} alt="image-background-mobile" />
        <ImgDesktop src={ImgDp} alt="image-background-mobile" />
      </ContainerImgs>
      <Section>
        {children}
      </Section>
    </>
  )
}

export { Layout };