import React from "react";
import styled from "styled-components";
import github from "../images/github.svg";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #464646;
  color: white;
  text-align: center;
  padding: 10px 0px 10px 0px;
`;

const Link = ({ url, children }) => (
  <a
    style={{ color: "inherit", textDecoration: "none" }}
    href={url}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <FooterContainer>
      <Link url="https://github.com/spyfall-ca/spyfall">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={github} alt="github" style={{ marginRight: "10px" }} />
          Checkout our source code
        </div>
      </Link>
      <div style={{ fontSize: "12px", marginTop: "5px" }}>
        <Link url="https://hwint.ru/portfolio-item/spyfall/">Spyfall</Link> is
        designed by Alexandr Ushan and published by{" "}
        <Link url="https://hwint.ru/">Hobby World</Link>
      </div>
    </FooterContainer>
  );
};

export default Footer;
