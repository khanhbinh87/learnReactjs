import styled from "styled-components";


export const TextSpan = styled.span`
  ${(props) => props.isBold ? "font-weight: bold;" : ""}
  ${(props) => props.isUnderline ? "text-decoration: underline;" : ""}

  transition: all .3s ease;
`

export const TextLink = styled.a`
  ${(props) => props.isBold ? "font-weight: bold;" : ""}
  ${(props) => props.isUnderline ? "text-decoration: underline;" : ""}

  transition: all .3s ease;
`

export const TextParagraph = styled.p`
  ${(props) => props.isBold ? "font-weight: bold;" : ""}
  ${(props) => props.isUnderline ? "text-decoration: underline;" : ""}

  transition: all .3s ease;
`