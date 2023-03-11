import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import TextSphere from 'components/text-sphere';
import Card from 'components/card';

import { profile } from 'config/profile';

import styles from './skills.module.scss'

const Skills = () => {
  return (
    <Container fluid className={styles.wrapper}>
        <Row>
          <Col md={10} offset={{md: 1}}>
            <h1 id='experienceskills' className={styles.title}>Experience & skills</h1>
          </Col>
        </Row>
        <Row>
          <Col md={5} offset={{md: 1}}>
            {profile[0].experience.map(e => (
              <Card className={styles.jobWrapper}>
                <h5>{e.designation}</h5>
                <p>{e.company}</p>
                <p>{e.period}</p>
                <p>{e.description}</p>
              </Card>
              ))}
          </Col>
          <Col md={6}>
            <TextSphere tags={profile[0].skills} />
          </Col>
        </Row>
    </Container>
  );
};

export default Skills;
