/* System imports*/
import React from 'react'
import { Route } from 'react-router-dom'

/*Container Imports*/
import Home from '../containers/Home'
import OurServices from '../containers/OurServices'
import OurBusiness from '../containers/OurBusiness'
import ContactUs from '../containers/ContactUs'


/*UI Imports*/
import Tabs, {Tab} from 'react-uwp/Tabs'

/*Code*/
const urls = ['/', '/services', '/business', '/contact']
const Main =(props, {theme}) => {
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
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
                            
                                <Route exact path='/' component={Home} />
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
                                <Route path='/services' component={OurServices} />
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
                                <Route path='/business' component={OurBusiness} />
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
                                <Route path='/contact' component={ContactUs} />
                            </div>
                        </div>
                        
                      </Tab>
                    </Tabs>
                </div>
           
        </div>
            
    )
}

export default Main