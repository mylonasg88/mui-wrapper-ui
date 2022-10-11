import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import { Chip, IButtonProps } from './Chip';

export default {
  title: 'Chip',
  component: Chip,
  argTypes: { onClick: { action: 'clicked' } },
  parameters: {
    actions: {
      handles: ['click.btn'],
    },
  },
} as Meta<IButtonProps>;

export const Default: FC = () => {
  return <Chip onClick={() => console.log('click')}>hello Chip</Chip>;
};
