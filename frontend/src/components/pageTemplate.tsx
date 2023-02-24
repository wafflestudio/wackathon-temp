import React from 'react';
import UserContainer from './user/userContainer';
import StatusContainer from './status/statusContainer';
import Nav from './nav/nav';
import styles from './pageTemplate.module.scss';

export default function PageTemplate({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className={styles.default}>
      <UserContainer></UserContainer>
      <div>{children}</div>
      <Nav></Nav>
    </div>
  );
}
