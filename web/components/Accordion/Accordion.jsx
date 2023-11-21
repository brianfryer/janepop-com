import React from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import clsx from 'clsx';
import { faChevronDown } from '@fortawesome/sharp-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Markdown from '~/components/Markdown/Markdown';
import Prose from '~/components/Prose/Prose';
import styles from './Accordion.module.scss';

const Accordion = (props) => {
  const { className, items } = props;

  return (
    <RadixAccordion.Root
      className={clsx(styles.Accordion, className)}
      type="multiple"
    >
      {items.map((item, i) => {
        const { blurb, heading, id } = item;

        return (
          <React.Fragment key={id}>
            {i > 0 && <hr />}
            <RadixAccordion.Item
              className={styles.Accordion__item}
              value={id}
            >
              <Prose>
                <h2 className={styles.Accordion__trigger__wrapper}>
                  <RadixAccordion.Trigger className={styles.Accordion__trigger}>
                    <span>{heading}</span>
                    <span className={styles.Accordion__trigger__icon__wrapper}>
                      <FontAwesomeIcon
                        className={styles.Accordion__trigger__icon}
                        icon={faChevronDown}
                      />
                    </span>
                  </RadixAccordion.Trigger>
                </h2>
              </Prose>
              <RadixAccordion.Content className={styles.Accordion__content}>
                <Prose className={styles.Accordion__content__prose}>
                  <Markdown
                    className={styles.Accordion__content__prose__markdown}
                    options={{
                      forceBlock: true,
                      wrapper: React.Fragment,
                    }}
                  >
                    {blurb}
                  </Markdown>
                </Prose>
              </RadixAccordion.Content>
            </RadixAccordion.Item>
          </React.Fragment>
        );
      })}
    </RadixAccordion.Root>
  );
};

export default Accordion;
