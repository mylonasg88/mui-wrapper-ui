import React, { ReactNode } from 'react';
import Button from '@mui/material/Button';

export interface Props {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  label: string;
  children?: ReactNode;
}

export const ZinButton: React.FC<Props> = ({ label }) => {
  // return <Button variant="contained">{label}</Button>;
  return (
    <>
      {/* <button>{label}s</button> */}
      <Button>{label}sdfsdf</Button>
    </>
  );
};
