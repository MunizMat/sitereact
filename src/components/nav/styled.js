import styled from "styled-components";
import { infoColor } from "../../config/colors";

export const Nav = styled.nav`
    background-color: ${infoColor};
    margin-bottom: 30px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
        color: white;
        text-decoration: none;
    }
`;