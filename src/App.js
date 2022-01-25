import React, {Fragment, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Counter from '../src/Components/Counter';
import styles from './App.module.css';
import axios from 'axios';

const API_KEY = '1ccb732e-b55a-4404-ad3f-0f99c02fe44e';

function App() {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

   const handleCounterClick = (e) => {
        setLoading(true);
        const axiosConfig = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        const getUrl = `https://api.countapi.xyz/hit/namespace/${API_KEY}`;
        axios.get(getUrl, axiosConfig).then(res => {
                if (res) {
                    setCount(res.data.value);
                    setLoading(false);
                }
            })
            .catch(error => {
                console.log(error.message);
                setLoading(false);
            });
    }

  return (
    <Fragment>
      <Container>
        <header className={styles['center-content']}>
          <h1>Project Purple Cow</h1>
        </header>
        <div className={styles['center-content']}>
          <Counter isLoading={loading} displayCount={count} onClick={handleCounterClick}/>
        </div>
      </Container>
    </Fragment>
  );
}

export default App;
