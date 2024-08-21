import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';

export const Layout = ({ children }) => {
  return (
    <div style={{ margin: '0 auto', padding: '0 16px', textAlign: 'center' }}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
