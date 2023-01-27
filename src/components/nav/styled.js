import styled from "styled-components";
import { infoColor } from "../../config/colors";

export const Nav = styled.nav`
    background-color: ${infoColor};
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
        color: black;
        text-decoration: none;
    }
`;