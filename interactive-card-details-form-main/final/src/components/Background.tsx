import React from 'react';
import desk from '../images/bg-main-desktop.png';
import { Stack } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

export const Background: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Stack direction={{ xs: 'column', sm: 'row' }}>
        <img src={desk} alt='purple gradient background' />
        {children}
        <h1>helllo</h1>
      </Stack>
    </>
  );
};
