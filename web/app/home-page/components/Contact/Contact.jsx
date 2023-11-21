import React from 'react';
import clsx from 'clsx';
import Container from '~/components/Container/Container';
import Markdown from '~/components/Markdown/Markdown';
import Prose from '~/components/Prose/Prose';
import styles from './Contact.module.scss';

const Contact = (props) => {
  const { className, data } = props;
  const { componentId, prose } = data?.contact || {};

  return (
    <div
      className={clsx(styles.Contact__root, className)}
      id={componentId}
    >
      <Container className={styles.Contact}>
        <Prose
          className={styles.Contact__prose}
          fontSize="lg"
        >
          <Markdown>
            {prose?.blurb}
          </Markdown>
          <hr />
          <div className="not-prose">
            {'<ContactForm />'}
          </div>
          <hr />
        </Prose>
      </Container>
    </div>
  );
};

export default Contact;
