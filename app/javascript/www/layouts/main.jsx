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
                <div>
                    <Tabs
                      //tabStyle={tabStyle}
                      //style={baseStyle}
                      tabTitleStyle={{ marginRight: 40 }}
                      useAnimate={true}
                    >
                      <Tab title="Home">
                        <Route exact match='/' component={Home} />    
                      </Tab>
            
                      <Tab title="Our Services">
                        <Route match='/services' component={OurServices} />
                      </Tab>
            
                      <Tab title="Our Business">
                        <Route match='/business' component={OurBusiness} />
                      </Tab>
            
                      <Tab title="Contact Us">
                        <Route match='/contact' component={ContactUs} />
                      </Tab>
                    </Tabs>
                </div>
            </Router>
        </div>
            
    )
}

export default Main