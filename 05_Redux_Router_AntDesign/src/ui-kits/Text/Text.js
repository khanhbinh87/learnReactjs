import React from "react";
import {
  TextLink,
  TextSpan,
  TextParagraph,
} from "./Text.styled";

export default function Text({
  href,
  tag = "span",
  children,
  ...props
}) {
  // ...props => props { isBold: true, isUnderline: false }
  if (tag === "a" && href) {
    return (
      <TextLink {...props}>{children}</TextLink>
    )
  } else if (tag === "p") {
    return (
      <TextParagraph {...props}>{children}</TextParagraph>
    )
  }

  return (
    <TextSpan {...props}>{children}</TextSpan>
  )
}