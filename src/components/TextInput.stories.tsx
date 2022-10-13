import { Meta, StoryObj } from '@storybook/react';
import { TextInput, TextInputRootProps } from "./TextInput";
import { Envelope } from 'phosphor-react';

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.icon>
        <Envelope />
      </TextInput.icon>,
      <TextInput.Input placeholder="exemplo@email.com" />
    ],
  },
  argTypes:{
    children: {
      table: {
        disable: true
      }
    },
  }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args:{
    children: <TextInput.Input placeholder="exemplo@email.com" />
  }
}
