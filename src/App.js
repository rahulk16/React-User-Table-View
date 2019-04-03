import React, { Component } from 'react';
import {Button, Container, Header, Icon, Menu} from 'semantic-ui-react';

import DemoList from './DemoList';

class App extends Component {
  render() {
    return (
      <Container style={{ padding: '2em 0em' }}>
        <Menu borderless secondary>
          <Menu.Item>
            <Header>
              React User Table 
            </Header>
          </Menu.Item>
          <Menu.Item position='right'>
            <iframe src="https://ghbtns.com/github-btn.html?user=rahulk16&repo=React-User-Table-View&type=star&count=true&size=large" scrolling="0" frameBorder="0" width="120px" height="30px"></iframe>

            <Button color='facebook' as='a' href='https://github.com/rahulk16/React-User-Table-View'>
              <Icon name='github' />
              Project Source
            </Button>
          </Menu.Item>
        </Menu>

        <DemoList />
      </Container>
    );
  }
}

export default App;
