import styled from "styled-components";
import { Link, useNavigate } from "react-router";
import { IoIosChatbubbles } from "react-icons/io";
import Button from "../common/button/Button.tsx";
import { FaSun } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";

const HeaderContainer = styled.header`
    width: 100%;
    height: 64px;
    background-color: ${props => props.theme.color.background.paper};
    border-bottom: 1px solid ${props => props.theme.color.divider};
`;

const HeaderInner = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    height: 64px;
`;

const Logo = styled(Link)`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 24px;
    font-weight: 800;
    color: ${props => props.theme.color.primary};
`;

const NavGroup = styled.nav`
    display: flex;
    align-items: center;
    gap: 16px;
`;

const TextButton = styled.button`
    font-size: 14px;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 6px;
    color: ${props => props.theme.color.text.default};
    transition: all 0.5s;

    &:hover {
        background-color: ${props => props.theme.color.background.default};
    }
`;

const PrimaryButton = styled.button`
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
    background-color: ${props => props.theme.color.primary};
    padding: 8px 16px;
    border-radius: 6px;
    transition: all 0.5s;

    &:hover {
        filter: brightness(0.8);
    }
`;

function MainHeader() {
    return (
        <HeaderContainer>
            <HeaderInner>
                <Logo to={"/"}>
                    <IoIosChatbubbles size={28} />
                    토론대난투
                </Logo>
                <NavGroup>
                    <Button color={"secondary"} variant={"icon"} onClick={() => console.log("테마변경")}>
                        <IoMoon size={27}/>
                    </Button>
                    <Button as={Link} to={"/auth/signin"} color={"secondary"} variant={"text"}>
                        로그인
                    </Button>
                    <Button as={Link} to={"/auth/signup"} color={"primary"} variant={"contained"}>
                        회원가입
                    </Button>
                </NavGroup>
            </HeaderInner>
        </HeaderContainer>
    );
}

export default MainHeader;