import React, {Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Counter from '../src/Components/Counter';
import styles from './App.module.css';

function App() {
  return (
    <Fragment>
      <div className={styles['center-content']}>
         <Counter/>
      </div>
      {/* <Container fluid="md" >
        <Row>
          <Col>
            
          </Col>
        </Row>
      </Container> */}
    </Fragment>
  );
}

export default App;
