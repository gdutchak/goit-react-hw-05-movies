import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";


export const Border = styled.div`
margin: 10px 15px;
`
export const Div = styled.div`
display: flex;
`

export const Img = styled.img`
margin-right: 15px
`
export const LinkActor = styled(NavLink)`
display: block;
width: 90px;
height: 25px;
border: 1px solid grey;
color: black;
text-decoration: none;
border-radius: 4px;
font-size: 20px;
font-weight: 500;
text-align: center;

&:active {
    border: 1px solid green;
    background-color: grey;
    color: white;
}

&:hover:not(:active), &:focus:not(:active) {
    border: 1px solid green;
    background-color: grey;
    color: white;
}
&:not(:last-child) {
    margin-bottom: 10px;
}
`

export const Button = styled(Link)`
width: 90px;
height: 20px;
border: 1px dashed black;
background-color: darkslategrey;
color: white;
text-decoration: none;
margin-left: 20px;
cursor: pointer;

&:hover, &:focus{
    border: 2px solid green;
}
`
