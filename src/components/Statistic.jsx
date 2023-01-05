import React from 'react'
import styled from 'styled-components'
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
function Statistic() {
    return (
        <Section>
            <div className="analytic color1" style={{backgroundColor:"grey",color:"blue"}}>
                <div className="design">
                    <div className="logo">
                        OPEN CONCERNS
                    </div>
                    <div className="content">
                        <h5>100.00</h5>
                    </div>
                </div>
                <div className="total" style={{color:"blue"}}>
                    <h6 style={{color:"blue"}}>NEW CASES</h6>
                    <span className="t1" style={{color:"blue"}}>+18</span>
                      <AiOutlineArrowUp className="svg1" style={{color:"blue"}} />  
                </div>
            </div>
            <div className="analytic color2" style={{backgroundColor:"grey",color:"blue"}}>
                <div className="design">
                    <div className="logo">
                        CLOSED CONCERNS
                    </div>
                    <div className="content">
                        <h5  style={{color:"blue"}}>100.00</h5>
                    </div>
                </div>
                <div className="total">
                    <h6  style={{color:"blue"}}>CLOSED CASES</h6>
                    <span className="t2"  style={{color:"blue"}}>+15</span>
                    <AiOutlineArrowDown className="svg2"   style={{color:"blue"}}/>
                </div>
            </div>
        </Section>
    )
}

export default Statistic
const Section = styled.section `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    .color1 {
        background-color: #EEF4FF;
    }
    .color2{
        background-color: #FDF4F5;
    }
    .color3{
        background-color: #FFFCE4;
    }
    .analytic {
        padding: 1rem 2rem 1rem 2rem;
        border-radius: 1rem;
        color: black;
        justify-content: space-evenly;
        align-items: center;
        gap: 1rem;
        transition: 0.5s ease-in-out;
        &:hover {
            background-color: #D4E0FF;
            color: black;
            svg {
                color: black;
            }
        }
        .design{
            display: flex;
            align-items: center;
            gap: 1rem;
            .logo {
                background-color: white;
                border-radius: 1rem;
                border: 1px solid black;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 1.5rem;
                svg {
                    font-size: 1.5rem;
                }
            }
        }
        .total {
            display: flex;
            align-items: center;
            gap: 1rem;
            justify-content: space-evenly;
            margin-top: 20px;
            .svg1 {
                color: green;
            }
            .svg2 {
                color: red;
            }
            .t1 {
                color: green;
            }
            .t2{
                color: red;
            }
            h6{
                color: grey;
            }
        }
    }
`;
