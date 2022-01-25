import React, { Fragment } from 'react';
import {Row, Col, Button, Card, Spinner, Alert} from 'react-bootstrap';

import Icon from './UI/Icon';

import styles  from './Counter.module.css';

const Counter = (props) => {
    const handleClick = () => {
        props.onClick();
    }

    if(props.isError){
        return (
            <Fragment>
                <Card className={styles.card}>
                    <div className={[styles['content-container'], styles['center-content']].join(' ')}>
                        <Alert variant="danger">
                            <Row>
                                <Col sm="2"><Icon size="3x" name="exclamation-triangle" color="red" /></Col>
                                <Col sm="10"><p>Sorry there seems to be an unexpected error, please refresh!</p></Col>
                            </Row>
                            <hr />
                            <code>{props.errorMessage}</code>
                        </Alert>
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