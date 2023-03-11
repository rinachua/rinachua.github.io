import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

import { profile } from 'config/profile';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <Container fluid className={styles.wrapper}>
      <Row align='center'>
        <Col md={6} align='left'>
          <p className={styles.listWrapper}>Connect with Me @ &nbsp;
            <li>
              <a href={profile[0].links.linkedin}><BsLinkedin size={25}/></a>
            </li>
            <li>
              <a href={profile[0].links.github}><BsGithub size={25}/></a>
            </li>
          </p>
        </Col>
        <Col md={6} align='right'>
          <p>This website is designed and built by Rina using ReactJS.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
