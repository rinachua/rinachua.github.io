import React from 'react';
import { SlArrowDown } from 'react-icons/sl';

import styles from './hello-world.module.scss';

const HelloWorld = () => {
  return (
    <div className={styles.backgroundWrapper}>
      <div className={styles.particles}>
        <h1 className={styles.title}>Hello World!</h1>
        <h5 className={styles.subTitle}>Rina who?
          <label className={styles.icon}><SlArrowDown size={12}/></label>
        </h5>
      </div>
    </div>
  )
};

export default HelloWorld;
