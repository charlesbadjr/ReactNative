import React, { Component } from 'react';
import TimeAgo from 'react-timeago';
import Countdown from 'react-countdown-now';
import englishStrings from 'react-timeago/lib/language-strings/en';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';


  // react Time ago
  const formatter = buildFormatter(englishStrings)

  // Countdown Now
  const Completionist = () => 
    <span> 
      <TimeAgo date='July 20, 2019' formatter={formatter} /> 
    </span>;


    // 73 days in Miliseconds, added to May 8th count
  const charlie = 6307200000 + 1557352148834
                  //  8   -  20 
  const Lindsay = (charlie - Date.now() ); 
 


class Clock extends Component {  
  
  render(){
      return(
         <div className="clock" >
             <h1> 
               <Countdown date={ Date.now() + (Lindsay) }>
                  <Completionist />
               </Countdown>   
             </h1>
         </div>
      );
  }
}


export default Clock;
