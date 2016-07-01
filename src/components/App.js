import React from 'react';
import { Link } from 'react-router';
import { version } from '../../package.json';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

const App = ({ children }) => (
    <div>
      <Layout fixedHeader>
        <Header title={<span><span style={{ color: '#ddd' }}></span><strong>Noten {version}</strong></span>}>
          <Navigation>
            <Link to="/calc">Noten Berechnen</Link>
            <Link to="/poweredby">Powered by</Link>
          </Navigation>
        </Header>
        <Drawer title="Noten">
          <Navigation>
            <Link to="/calc">Noten Berechnen</Link>
            <Link to="/poweredby">Powered by</Link>
          </Navigation>
        </Drawer>
        <Content>
          {children || 'mini - noten rechner'}
        </Content>
      </Layout>
    </div>);

App.propTypes = { children: React.PropTypes.object };

export default App;
