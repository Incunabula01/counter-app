import React, {Fragment, useState} from 'react';
import {Container} from 'react-bootstrap';
import Counter from '../src/Components/Counter';
import styles from './App.module.css';
import axios from 'axios';

const API_KEY = '1ccb732e-b55a-4404-ad3f-0f99c02fe44e';

function App() {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

   const handleCounterClick = (e) => {
        setLoading(true);
        const axiosConfig = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        const getUrl = `https://api.countapi.xyz/hit/apple.com/${API_KEY}`;
        axios.get(getUrl, axiosConfig).then(res => {
                if (res) {
                    setCount(res.data.value);
                    setLoading(false);
                }
            })
            .catch(error => {
                console.log(error.message);
                setLoading(false);
                setError(true);
                setErrorMessage(error.message);
            });
    }

  return (
    <Fragment>
      <Container>
        <header className={styles['center-content']}>
          <h1>Project Purple Cow</h1>
        </header>
        <div className={styles['center-content']}>
          <Counter
            isError={error}
            errorMessage={errorMessage} 
            isLoading={loading} 
            displayCount={count} 
            onClick={handleCounterClick}/>
        </div>
      </Container>
    </Fragment>
  );
}

export default App;
