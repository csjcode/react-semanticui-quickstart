import React, { Component } from 'react';
import { Button, Container, Header, Image, List, Icon, Label, Menu, Table, Segment, Grid, Card } from 'semantic-ui-react';
import './App.css';

const SegmentExampleInverted = () => (
  <Segment inverted>
    Inverted content.
  </Segment>
)

const HeaderChris = () => (
  <Header as='h2'>
    <Image shape='circular' src='https://chris.api.cc/assets/chris.jpg' />
    {' '}Chris
  </Header>
)


const CardExampleIndividualCard = () => (
  <Card raised>
    <Image src='http://semantic-ui.com/images/avatar2/large/matthew.png' />
    <Card.Content>
      <Card.Header>
        Matthew
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Joined in 2015
        </span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)



const ListTree = () => (
  <List>
    <List.Item>
      <List.Icon name='folder' />
      <List.Content>
        <List.Header>src</List.Header>
        <List.Description>Source files for project</List.Description>
        <List.List>
          <List.Item>
            <List.Icon name='folder' />
            <List.Content>
              <List.Header>site</List.Header>
              <List.Description>Your site's theme</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='folder' />
            <List.Content>
              <List.Header>themes</List.Header>
              <List.Description>Packaged theme files</List.Description>
              <List.List>
                <List.Item>
                  <List.Icon name='folder' />
                  <List.Content>
                    <List.Header>default</List.Header>
                    <List.Description>Default packaged theme</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='folder' />
                  <List.Content>
                    <List.Header>my_theme</List.Header>
                    <List.Description>Packaged themes are also available in this folder</List.Description>
                  </List.Content>
                </List.Item>
              </List.List>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='file' />
            <List.Content>
              <List.Header>theme.config</List.Header>
              <List.Description>Config file for setting packaged themes</List.Description>
            </List.Content>
          </List.Item>
        </List.List>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='folder' />
      <List.Content>
        <List.Header>dist</List.Header>
        <List.Description>Compiled CSS and JS files</List.Description>
        <List.List>
          <List.Item>
            <List.Icon name='folder' />
            <List.Content>
              <List.Header>components</List.Header>
              <List.Description>Individual component CSS and JS</List.Description>
            </List.Content>
          </List.Item>
        </List.List>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='file' />
      <List.Content>
        <List.Header>semantic.json</List.Header>
        <List.Description>Contains build settings for gulp</List.Description>
      </List.Content>
    </List.Item>
  </List>
)


const TableExamplePagination = () => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>First</Label>
          </Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
      </Table.Body>

      <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='left chevron' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='right chevron' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
      </Table.Footer>
    </Table>
  )
}


const ContainerExampleText = () => (
  <Container text>

    <Header as='h3'>Header</Header>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>

    <p>
      <TableExamplePagination />
    </p>

    <p>
      <ListTree />
    </p>

  </Container>
)


const GridExampleDividedNumber = () => (
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <Image src='http://semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='http://semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='http://semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src='http://semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='http://semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='http://semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <SegmentExampleInverted />
        </div>
        <p className="App-intro">

        </p>
        <div>
          <HeaderChris />
        </div>
        <div>
          <ContainerExampleText />
        </div>
        <div className="myContainer">
          <div className="myCard">
            <CardExampleIndividualCard className="inlineblock"/>
          </div>
        </div>
        <div>
          <GridExampleDividedNumber />
        </div>

        <p>
        <Button>
          Click Here
        </Button>
        </p>
      </div>
    );
  }
}

export default App;
