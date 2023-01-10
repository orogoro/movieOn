import * as React from 'react';

import styles from './Container.module.scss';

interface AuxProps {
  children: React.ReactNode;
}

const Container: React.FC<AuxProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
