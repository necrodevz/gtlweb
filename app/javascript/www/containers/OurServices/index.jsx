import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Link,
  Menu,
  Tab,
  Segment,
  Visibility,
} from 'semantic-ui-react'

const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
]
const ourServices = () => {

    return (
        <div>
            <Grid>
                <Grid.Row>
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
                </Grid.Row>
                <Grid.Row>
                    <Tab menu={{ pointing: true }} panes={panes} />
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default ourServices