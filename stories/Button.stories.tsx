import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { TestButton, TestButtonTypesEnum } from '../src/components/button/Button';

const meta: Meta<typeof TestButton> = {
  title: 'components/Button',
  component: TestButton,
  args: {
    children: 'my nice little button, Bewaren',
  },
  decorators: [Story => <Story />],
};

export default meta;
type Story = StoryObj<typeof TestButton>;

export const Primary: Story = {};


export const Secondary: Story  = {
    args: {
        buttontype:  TestButtonTypesEnum.Secondary,
        children: "Hello World!"
    }
}