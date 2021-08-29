import './App.css';
import  Fileupload  from './components/fileupload';
import PlayerList from './components/playerlist';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Fileupload />
      <Container fluid>
        <Row>
          <Col>
            <PlayerList />
          </Col>
          <Col>
            <p>Player Pool</p>
          </Col>
          <Col>
            <p>Line Ups</p>
          </Col>
        </Row>

      </Container>

      
      <footer>
        <p>A T-Nasty Production</p>
      </footer>
    </div>
  );
}

export default App;
