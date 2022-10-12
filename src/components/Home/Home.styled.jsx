import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
display: flex;
align-items: center;
margin: 10px 5px;
width: 100%;
height: 35px;
`
export const LayoutEl = styled(NavLink)`
height: 20px;
padding: 2px;
text-decoration: none;
border: 1px solid grey;
border-radius: 4px;
color: black;

&:active {
    color: green;
    border: 1px solid green;
    background-color: grey;
}

&:hover:not(:active), &:focus:not(:active) {
    color: green;
    border: 1px solid green;
    background-color: grey;
}
&:not(:last-child) {
    margin-right: 8px;
}
`