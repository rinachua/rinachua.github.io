import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Card from 'components/card';

import { profile } from 'config/profile';
import { images } from 'config/image';

import styles from './projects.module.scss';

const Projects = () => {
  return (
    <Container fluid className={styles.wrapper}>
      <Row>
        <Col md={10} offset={{md: 1}}>
          <h1 id='projects' className={styles.title}>Things that I have built</h1>
        </Col>
      </Row>
      <Row align='center' className={styles.projectWrapper}>
        <Col md={5} offset={{md: 1}}>
          <img
            className={styles.img}
            src={images[0].duke} 
            alt='Duke Chatbot'
            height='350px'
          />
        </Col>
        <Col md={5}>
          <Card className={styles.projectDetailsWrapper}>
            <h5>{profile[0].projects[0].title}</h5>
            <p>{profile[0].projects[0].description}</p>
            <p>{profile[0].projects[0].stack}</p>
          </Card>
        </Col>
      </Row>
      <Row align='center' className={styles.projectWrapper}>
        <Col md={5} offset={{md: 1}}>
          <Card className={styles.projectDetailsWrapper}>
            <h5>{profile[0].projects[1].title}</h5>
            <p>{profile[0].projects[1].description}</p>
            <p>{profile[0].projects[1].stack}</p>
          </Card>
        </Col>
        <Col md={5}>
          <img
            className={styles.img}
            src={images[0].spa} 
            alt='SPA'
            height='350px'
          />
        </Col>
      </Row>
      <Row align='center' className={styles.projectWrapper}>
        <Col md={5} offset={{md: 1}}>
          <img
            className={styles.img}
            src={images[0].marketplace} 
            alt='Marketplace'
            height='350px'
          />
        </Col>
        <Col md={5}>
          <Card className={styles.projectDetailsWrapper}>
            <h5>{profile[0].projects[2].title}</h5>
            <p>{profile[0].projects[2].description}</p>
            <p>{profile[0].projects[2].stack}</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
