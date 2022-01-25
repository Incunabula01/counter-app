import React, { useState, useEffect, Fragment } from 'react';
import {Button, Card, Container, Row, Col} from 'react-bootstrap';
import countapi from 'countapi-js';
import axios from 'axios';

import styles  from './Counter.module.css';

const API_KEY = '1ccb732e-b55a-4404-ad3f-0f99c02fe44e';

const Counter = (props) => {
    const [count, setCount] = useState(0);
    const [displayCount, setDisplayCount] = useState(0);

    const handleCounterClick = (e) => {
        setDisplayCount(count);
    }
    
    useEffect(() => {
        const axiosConfig = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        const getUrl = `https://api.countapi.xyz/hit/namespace/${API_KEY}`;
        axios.get(getUrl, axiosConfig).then(res => {
                if (res) {
                    setCount(res.data);
                }
            })
            .catch(error => {
                console.log(error.message);
            });

    }, []);
    
    return (
        <Fragment>
            <Card className={styles.card}>
                <div className={styles['center-content']}>
                    <h1 className={styles.counter}>
                        {displayCount}
                    </h1>
                </div>
                
                 <div className={[styles['button-container'], styles['center-content']].join(' ')}>
                    
                    <Button variant="outline-primary" date-type="get" onClick={handleCounterClick}>
                        Get Count
                    </Button>
                    
                </div>
                
            
            </Card>
        </Fragment>
    )
}

export default Counter;