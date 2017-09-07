/* System imports*/
import React from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'

/*Container Imports*/
import Home from '../containers/Home'
import OurServices from '../containers/OurServices'
import OurBusiness from '../containers/OurBusiness'
import ContactUs from '../containers/ContactUs'


/*UI Imports*/
import Tabs, {Tab} from 'react-uwp/Tabs'

/*Code*/
const Main =(props, {theme}) => {
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Router>
                <div style={{
                    display:'flex',
                    flexDirection: 'row'
                }}>
                    <Tabs
                      //tabStyle={tabStyle}
                      //style={baseStyle}
                      tabTitleStyle={{display: 'flex'}}
                      useAnimate={true}
                    >
                      <Tab title="Home">
                        <div style={{
                           display:'flex',
                           flexDirection:'column'
                        }}>
                            <div style={{
                               display: 'flex',
                               flexDirection: 'row'
                            }}>
                                <Route exact match='/' component={Home} />
                            </div>
                        </div>
                      </Tab>
            
                      <Tab title="Our Services">
                        <div style={{
                           display:'flex',
                           flexDirection:'column'
                        }}>
                            <div style={{
                               display: 'flex',
                               flexDirection: 'row'
                            }}>
                                <Route match='/services' component={OurServices} />
                            </div>
                        </div>
                      </Tab>
            
                      <Tab title="Our Business">
                        <div style={{
                           display:'flex',
                           flexDirection:'column'
                        }}>
                            <div style={{
                               display: 'flex',
                               flexDirection: 'row'
                            }}>
                                <Route match='/business' component={OurBusiness} />
                            </div>
                        </div>
                        
                      </Tab>
            
                      <Tab title="Contact Us">
                        <div style={{
                           display:'flex',
                           flexDirection:'column'
                        }}>
                            <div style={{
                               display: 'flex',
                               flexDirection: 'row'
                            }}>
                                <Route match='/contact' component={ContactUs} />
                            </div>
                        </div>
                        
                      </Tab>
                    </Tabs>
                </div>
            </Router>
        </div>
            
    )
}

export default Main