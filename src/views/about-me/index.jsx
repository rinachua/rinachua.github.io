  import React from 'react';
  import { Container, Row, Col } from 'react-grid-system';

  import { profile } from 'config/profile';
  import { images } from 'config/image';

  import styles from './about-me.module.scss';

  const AboutMe = () => {
  return (
    <Container fluid className={styles.wrapper}>
      <Row align='center'>
        <Col md={6} offset={{md: 1}}>
          <h2 id='aboutme' className={styles.title}>{profile[0].profile.header}</h2>
          <p className={styles.subTitle}>{profile[0].profile.subheader}</p>
          <p className={styles.bouncy}>
            <a href={profile[0].links.linkedin} className={styles.caption}>{profile[0].profile.caption}</a>
          </p>
      </Col>
        <Col md={4}>
          <img
            src={images[0].profile} 
            alt='Rina'
            height='500px'
          />
        </Col>
     </Row>
    </Container>
    );
  };

  export default AboutMe;
