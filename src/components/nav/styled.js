import styled from "styled-components";
import { primaryColor } from "../../config/colors";

export const Nav = styled.nav`
    background-color: ${primaryColor};
    height: 50px;
    display: flex;

    ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 40px;
        width: 50%;
    }

    .right-side {
        justify-content: flex-end;
        margin-right: 50px;
    }

    .left-side {
        justify-content: flex-start;
        margin-left: 50px;
    }

    a {
        color: white;
        text-decoration: none;
    }
`;