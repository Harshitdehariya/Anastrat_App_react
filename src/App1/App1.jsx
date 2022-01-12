import React from 'react';
import './App1.css';
import image from '../download.png';

const App1 = () => {
    return(
        <div className='_container'>
            <div className='_header'>
                <div className='_header1'>
                    <div className='_header1-1'>
                        <div>circle</div>
                    </div>
                    <div className='_header1-2'>A&nbsp;N&nbsp;A&nbsp;S&nbsp;T&nbsp;R&nbsp;A&nbsp;T</div>
                </div>
                <div className='_header2'></div>
                <div className='_header3'>
                    <div className='_header3-1'>&nbsp;&nbsp;&emsp;Sync</div>&emsp;
                    <div className='_header3-2'>&emsp;Log out&nbsp;&gt;</div>
                </div>
            </div>
            <div className='_content'>
                <div className='_navbar'>
                    <div className='_nav1'></div>
                    <div className='_nav2'>   
                        <div className='_nav2-1'>
                        <div className='Reports'>Reports Snapshots</div>
                        <div className='Overview'>Overview</div>
                        <div className='Day-Time'>Day-Time Analytics</div>
                        <div className='Trade'>Trade breakdowns</div>
                        <div className='Traits'>Traits & Insights (Beta)</div>
                        <br/>
                         <div className='Trading'>Trading Journal</div>
                        <div className='My'>My Journal</div>
                        <div className='Tag'>Tag Analytics</div>
                        </div>
                        <div className='_nav2-2'></div>
                    </div>
                    <div className='_nav3  '>  
                      <div>                  
                        <div className='Shubham'>Shubham Gandhi</div>
                        <div className='FG0319'>FG0319</div>
                      </div> 
                      <div>
                          <img className='image' src={image}/>
                      </div> 
                    </div>
                </div>
                <div className='_main'>
                <div className='_main1'>
                    <div className='reports_snapshot'><span className='reports'>Reports Snapshot</span><span> &gt; Overview</span></div>
                </div>
                <div className='_main2'>
                    <div className='_main2-1'>
                        <div>Filter by:</div>&nbsp;&nbsp;
                        <div className='Time'>Time Period</div>&nbsp;&nbsp;
                        <div className='Segment'>Segment</div>
                    </div>
                    <div className='_main2-2'>
                        <div className='Applied'>Applied filters:</div>&nbsp;&nbsp;
                        <div className='_Time'>Time Period</div>&nbsp;&nbsp;
                        <div className='_Segment'>Segment</div>
                    </div>
                </div> 
                <div className='_main3'>
                    <div className='_one'>
                        <div className='_one-one'></div>
                        <div className='_one-two'></div>
                    </div>
                    <div className='_two'></div>
                    <div className='_three'></div>
                    <div className='_four'></div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default App1;