import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import { ZinButton } from './ZinButton';
import type { Props } from './ZinButton';

export default {
  title: 'ZinButton',
  component: ZinButton,
} as Meta<Props>;

export const Default: FC = () => {
  return (
    <ZinButton onClick={() => console.log('click')} label="Hello George">
      hello world
    </ZinButton>
  );
};
