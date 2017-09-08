/* System imports*/
import React, {Component} from 'react'
import { Route, Link } from 'react-router-dom'


/*Container Imports*/
import Home from '../containers/Home'
import OurServices from '../containers/OurServices'
import OurBusiness from '../containers/OurBusiness'
import ContactUs from '../containers/ContactUs'
//import VideoPlayer from '../components/VideoPlayer'



/*UI Imports*/
import bg from '../img/bg.jpg'
/*Code*/

const FixedMenu = ({history}) => (
  <Menu fixed='top' size='large'>
    <Container>
    <Menu.Menu>
      <Menu.Item  active ><Link to='/'>Home</Link></Menu.Item>
        <Menu.Item  ><Link to='/services'>Our Services</Link></Menu.Item>
        <Menu.Item   ><Link to='/business'>Our Business</Link></Menu.Item>
        <Menu.Item   ><Link to='/contact'>Contact Us</Link></Menu.Item>
        <Menu.Item className='item'>
          <Button as='a'>Staff Log in</Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)

const renderMenuCheck =(history)=> {
    if(history.location.pathname == '/'){
        ''
    }
    return(<FixedMenu history={history} />)
     
} 

class Main extends Component {
    state = {}
    
    hideFixedMenu = () => this.setState({ visible: false })
    showFixedMenu = () => this.setState({ visible: true })
    render() {
        return(
            <div>
                <Route exact path='/' render={(hideFixedMenu, showFixedMenu) => {return(<Home hideFixedMenu={this.hideFixedMenu.bind(this)} showFixedMenu={this.showFixedMenu.bind(this)} />)} } />
                <Route path='/services' component={OurServices} />
                <Route path='/business' component={OurBusiness} />
                <Route path='/contact' component={ContactUs} />
            </div>
                
        )
    }
}

export default Main