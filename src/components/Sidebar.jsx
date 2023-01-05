import React from 'react'
import styled from 'styled-components'
import { AiOutlineAppstore } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlinePieChart } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { AiFillCodeSandboxCircle } from "react-icons/ai";


function Sidebar() {
    return (
        <Section>
            <div className="top">
                    <div className="brand">
                        <AiFillCodeSandboxCircle />
                        <span>AARA</span>
                    </div>
                    <div className="links">
                        <ul>
                            <li >
                                <a href="abc">
                                    <AiOutlineAppstore />
                                    <span className="border"></span>
                                </a>
                            </li>
                            <li   >
                                <a href="def">
                                    <AiOutlineShoppingCart />
                                    <span className="border"></span>
                                </a>
                            </li>
                            <li  >
                                <a href="kl">
                                    <AiOutlineShopping />
                                    <span className="border"></span>
                                </a>
                            </li>
                            <li >
                                <a href="jk">
                                    <AiOutlinePieChart />
                                    <span className="border"></span>
                                </a>
                            </li>
                            <li  >
                                <a href="uy">
                                    <AiOutlineUsergroupAdd />
                                    <span className="border"></span>
                                </a>
                            </li>
                            <li >
                                <a href="er">
                                    <AiOutlineMessage />
                                    <span className="border"></span>
                                </a>
                            </li>
                            <li>
                                <a href="oi">
                                    <AiOutlineSetting />
                                    <span className="border"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
            </div>
        </Section>
    )
}

export default Sidebar
const Section = styled.section`
position: fixed;
left: 0;
background-color: #F8F9EF;
height: 100vh;
width: 18vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 2rem 0;
gap: 2rem;
.top{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    .brand {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.3rem 0;
        svg {
            color: blue;
            font-size: 2rem;
        }
        span {
            font-size: 1.5rem;
            font-weight: bold;
            color: black;
        }
    }
    .links {
        display: flex;
        justify-content: center;
        ul {
            list-style-type: none;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            li{
                padding: 0.6rem 2rem;
                border-radius: 0.3rem;
                &:hover {
                    background-color: black;
                    a{
                        color: white;
                    }
                }
                a {
                    text-decoration: none;
                    display: flex;
                    gap: 1rem;
                    color: grey;
                    svg {
                        font-size: 1.4rem;
                    }
                    span {
                        display: flex;
                        gap: 2rem;
                    }
                }
            }
            .active {
                background-color: black;
                a {
                    color: white;
                }
            }
        }
    }
}
.map {
    width: 90%;
    display: flex;
    background-color:#EBECF1;
    padding-top: 10px;
    padding-bottom: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: -25px;
    border-radius: 0.5rem;
    svg {
        color: blue;
        font-size: 2rem;
    }
}
.logout {
    padding: 0.6rem 3rem;
    margin-left: -2rem;
    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        color: black;
        gap: 1rem;
        svg {
            font-size:1.4rem;
        }
        span {
            display: flex;
        }
    }
}
`
