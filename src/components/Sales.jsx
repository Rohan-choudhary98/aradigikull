// import React from 'react'
import styled from "styled-components";
import React ,{ useState,useEffect } from 'react';
// import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { AiOutlineCaretDown } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { Modalcom } from './Modalcom';


function Sales() {
    const [data, setData] = useState([]);

    useEffect(() => {
      const apiUrl = 'http://api.reward-dragon.com:8001/rewardadmin/concern-manage-admin/';
      const token = 'd401a31b50604523a1646aed428844c5';
      const userId = 1;
  
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify({
          user_id: userId
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setData(data.data);
      })
      .catch(error => {
        // console.error('Error:', error);
      });
    }, []);
    console.log(data)






    return (
        <Section>
        <div className="sales">
      <div className="sales__details">
        <div>
          <h4>CONCERN LIST</h4>
        </div>
        <div>
         
          <button>
          EXPORT
          <AiOutlineCaretDown />
          </button>
          <div className="date">
                    <AiOutlineCalendar />
                    <span>Jan 05, 2023</span>
                </div>
        </div>
      </div>
       <div >
       {data.map((e ,key)=>{
        return(
            <>
             {/* <Modalcom />  */}
             <div className="cards" style={{columns:"200px 2",columngap:"25px",padding:"25px"}}>
            <div className="card">
                <span>ID:{e.concern_id}</span><br/>
           <h5><span>ORG_ID:{e.organization_id}</span></h5>
           <h4> <span>CLIENT NAME:{e.client_name}</span></h4>
           <h6><span> CONCERN DETAIL:{e.concern_details}</span></h6>
            <h3><span> EMAIL:{e.user_email_id}</span></h3>
           <h1><span> TYPE:{e.concern_type}</span></h1>
           <Modalcom id={e.concern_id}  Type={e.concern_type} email={e.user_email_id} detail={e.concern_details}
           org={e.organization_id} name={e.client_name}/> 
           
            </div>
        </div>

            </>
        )

    })}
        
      </div> 
        </div>
        </Section>
    )
}

export default Sales
// const data = [];
  const Section = styled.section`
  .sales {
    color: black;
    width: 100%;
    .sales__details {
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;
      div {
        display: flex;
        gap: 1rem;
        button {
          border-radius: 0.5rem;
          padding: 0.4rem 1rem;
          border: none;
          cursor: pointer;
          background-color: #EEF4FF;
            color: black;
            svg {
                font-size: 0.6rem;
            }
        }
      }
    }
    .sales__graph {
      height: 10rem;
      width: 100%;
      .recharts-default-tooltip {
      background-color: black !important;
      border-color: black !important;
      color : white !important;
    }
    }
  }
  `