import React from 'react';
import UserContainer from './user/userContainer';
import Nav from './nav/nav';
import styles from './pageTemplate.module.scss';

export default function PageTemplate({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className={styles.default}>
      <div className={styles.marginTop}></div>
      <UserContainer></UserContainer>
      <div>{children}</div>
      <Nav></Nav>
      <div className={styles.marginBottom}></div>
    </div>
  );
}
