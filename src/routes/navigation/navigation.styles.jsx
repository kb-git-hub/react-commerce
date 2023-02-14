import styled from "styled-components";
import { Link } from "react-router-dom";
import ImgSrc from "../../assets/commerce_logo.png";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`

export const LogoContainer = styled(Link)`
  width: 70px;
  height: 70px;
  padding: 25px;
  border: 3px solid rgb(100,100,100);
  border-radius: 6px;
  background-image: url(${ImgSrc});
  background-size: contain;
  background-position: center;

`

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`



