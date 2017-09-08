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
            alignItems: 'center', 
            justifyObjects: 'space-between'
        }}>
            <Route exact path='/' component={Home} />
            <Route path='/services' component={OurServices} />
            <Route path='/business' component={OurBusiness} />
            <Route path='/contact' component={ContactUs} />
        </div>
            
    )
}

export default Main