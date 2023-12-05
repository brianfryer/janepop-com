import React from 'react';
import clsx from 'clsx';
import Link from '~/components/Link/Link';
import Wrapper from './components/Wrapper/Wrapper';
import styles from './Links.module.scss';

const Links = (props) => {
  const { className, data } = props;
  const { links = [] } = data || {};

  const allLinks = [
    ...links,
    // {
    //   id: 'packaging',
    //   className: 'text-y-base',
    //   label: 'Packaging',
    //   url: '/#packaging',
    // },
    // {
    //   id: 'marketing',
    //   className: 'text-c-base',
    //   label: 'Marketing',
    //   url: '/#marketing',
    // },
    // {
    //   id: 'advertising',
    //   className: 'text-m-base',
    //   label: 'Advertising',
    //   url: '/#advertising',
    // },
  ];

  if (!allLinks.length) return null;

  return (
    <Wrapper>
      <ul className={clsx(styles.Links, className)}>
        {allLinks.map((link) => {
          const {
            className: linkClassName,
            id,
            label,
            url,
          } = link || {};

          return (
            <li key={id}>
              <Link
                className={clsx(styles.Links__link, linkClassName)}
                href={url}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Links;
