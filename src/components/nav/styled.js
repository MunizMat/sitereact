import styled from "styled-components";
import { primaryColor } from "../../config/colors";

export const Nav = styled.nav`
    background-color: ${primaryColor};
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
        color: white;
        text-decoration: none;
        margin: 0 60px;
    }
`;