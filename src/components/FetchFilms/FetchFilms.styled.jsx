import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
margin:0;
padding:0;
`

export const LinkEl = styled(NavLink)`
display: block;
width: 50%;
margin: 0 15px;
padding: 6px;
text-decoration: none;
border: 1px solid grey;
border-radius: 4px;
color: black;

&:not(:last-child) {
    margin-bottom: 8px;
}
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
`
