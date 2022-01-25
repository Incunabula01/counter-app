import React, { Fragment } from 'react';
import {Button, Card, Spinner} from 'react-bootstrap';

import Icon from './UI/Icon';

import styles  from './Counter.module.css';

const Counter = (props) => {
    const handleClick = () => {
        props.onClick();
    }
 
    if(props.isLoading){
        return (
            <Fragment>
                <Card className={styles.card}>
                    <div className={[styles['content-container'], styles['center-content']].join(' ')}>
                        <Spinner animation="border" role="status" size="lg" variant="primary">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                    
                    <div className={[styles['button-container'], styles['center-content']].join(' ')}>
                        
                        <Button variant="outline-primary" date-type="get" onClick={handleClick} disabled>
                            <Icon size="sm" name="mouse-pointer" color="blue" /> Get Count
                        </Button>
                        
                    </div>
                </Card>
            </Fragment>
        )
    }
    return (
        <Fragment>
            <Card className={styles.card}>
                <div className={[styles['content-container'], styles['center-content']].join(' ')}>
                    <h1 className={styles.counter}>
                        {props.displayCount}
                    </h1>
                </div>
                
                 <div className={[styles['button-container'], styles['center-content']].join(' ')}>
                    
                    <Button variant="outline-primary" date-type="get" onClick={handleClick}>
                        <Icon size="sm" name="mouse-pointer" color="blue" /> Get Count
                    </Button>
                    
                </div>
                
            
            </Card>
        </Fragment>
    )
}

export default Counter;