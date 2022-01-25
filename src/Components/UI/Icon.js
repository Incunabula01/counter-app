import React from 'react';

import styles from './Icon.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMousePointer, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const Icon = (props) => {
    library.add(faMousePointer, faExclamationTriangle);
    return (
        <FontAwesomeIcon icon={props.name} size={props.size} className={styles[props.color]}/>
    );
}

export default Icon;