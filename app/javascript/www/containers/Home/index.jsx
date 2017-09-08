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
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import bg from '../../img/bg.jpg'


export default class Home extends Component {
  
  render() {
    const { visible } = this.props
    const { history } = this.props

    return (
      <div>
        { visible ? <FixedMenu /> : null }
        <Visibility
          onBottomPassed={this.props.showFixedMenu}
          onBottomVisible={this.props.hideFixedMenu}
          once={false}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item>
                  <Link to='/'>
                    Home
                  </Link>
                </Menu.Item>
                <Menu.Item ><Link to='/services'>Our Services</Link></Menu.Item>
                <Menu.Item ><Link to='/business'>Our Business</Link></Menu.Item>
                <Menu.Item ><Link to='/contact'>Contact Us</Link></Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted size='small'>Staff Log in</Button>
                </Menu.Item>
              </Menu>
            </Container>

            <Container text >
              <Header
                as='h1'
                content='Geoland Title Ltd'
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
              />
              <Header
                as='h2'
                content='providers of LAMP services'
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
              <Button primary size='huge'>
                Watch Video
                <Icon name='caret right' />
              </Button>
            </Container>
          </Segment>
        </Visibility>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>Trust the Experts</Header>
                <p style={{ fontSize: '1.33em' }}>
                  GeoLand Title Limited is a full service land management company 
                  whose main function is the delivery and collection of services 
                  related to obtaining Registered Titles 
                  (also called a Certificate of Title) for our customers. 
                  We offer the most affordable prices, which combined with our 
                  payment options expedites the achievement of your goal.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>Achieve Your Goals</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Use your Certificate of Title or proof of land ownership to 
                  access the value in your land by obtaining loans from financial 
                  institutions or for simple peace of mind for you and your family.
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image
                  bordered
                  shape='rounded'
                  size='large'
                  src=''
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button size='huge'>Learn More</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>"I love Geoland Title Ltd"</Header>
                <p style={{ fontSize: '1.33em' }}><Icon name='user' />G. Knight</p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>""I started my tenure with LAMP...because I was unable to get a title before for my land based on certain drawbacks we had, since then we’ve made progress and I think I’m almost at the end of my journey today...and I am grateful to LAMP, everything went...fairly easy, once we had all the requirements that they’d ask for in place"."</Header>
                <p style={{ fontSize: '1.33em' }}>
                  <Icon name='user' />
                  <b>Nan</b> Margaret Isaacs
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as='h3' style={{ fontSize: '2em' }}>Who are we, exactly? </Header>
            <p style={{ fontSize: '1.33em' }}>
              Our business is Land Management, Cadastral Mapping Services and Products. 
              Our goal is to ensure that you receive a registered land title with your name on it.
            </p>
            <Button as='a' size='large'>Find Us</Button>
            <Divider
              as='h3'
              className='header'
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <a href='#'>We'll Help</a>
            </Divider>
            
            <Segment style={{ padding: '0em' }} vertical>
            
            <Grid celled='internally' columns='equal' stackable>
              <Grid.Row textAlign='center'>
                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                  <Header as='h4' style={{ fontSize: '2em' }}>Land Title Registration </Header>
                  <p>If you own land and do not have a Registered Title, GeoLand will apply to the Office of Titles at the National Land Agency, to obtain a Certificate of Title for your property and deliver to you when obtained...</p>
                  <Button as='a'>Learn More</Button>
                </Grid.Column>
                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                  <Header as='h4' style={{ fontSize: '2em' }}>Estates and Estate Planning </Header>
                  <p>Have you inherited land? In order to secure ownership of the property, you may be required to obtain a Grant of Probate or a Grant of Letters of Administration. GeoLand will apply to the courts on your behalf so you can finalize your ownership....</p>
                  <Button as='a'>Learn More</Button>
                </Grid.Column>
                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                  <Header as='h4' style={{ fontSize: '2em' }}>Specialised Land Management Services </Header>
                  <p>We do land parcel mapping, easements, gis special projects... If you are not in possession of one or more of the above items please contact us for assistance...</p>
                  <Button as='a'>Learn More</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          </Container>
        </Segment>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Sitemap</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                    <List.Item as='a'>Religious Ceremonies</List.Item>
                    <List.Item as='a'>Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Services' />
                  <List link inverted>
                    <List.Item as='a'>Land Title Registration </List.Item>
                    <List.Item as='a'>Estates and Estate Planning</List.Item>
                    <List.Item as='a'>Specialised Land Management Services</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>Footer Header</Header>
                  <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
}