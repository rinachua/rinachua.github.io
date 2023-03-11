import React from 'react';
import classNames from 'classnames';

import styles from './card.module.scss';

const Card = ({children, className}) => (
  <div className={classNames(styles.card, className)}>
    {children}
  </div>
);

export default Card;
