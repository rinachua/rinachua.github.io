import React from 'react';
import classNames from 'classnames';
import {Container, Row, Col} from 'react-grid-system';
import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Container fluid>
        <Row align='center'>
          <Col md={6} align='left'>
            <a href='/' className={classNames(styles.link, styles.name)}>Rina Chua</a>
          </Col>
          <Col md={6} align='right'>
            <a href='/#aboutme' className={classNames(styles.link, styles.tab)}>About Me</a>
            <a href='/#experienceskills' className={classNames(styles.link, styles.tab)}>Experience & Skills</a>
            <a href='/#projects' className={classNames(styles.link, styles.tab)}>Projects</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
