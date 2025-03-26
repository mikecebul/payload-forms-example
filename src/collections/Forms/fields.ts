import type { Block, Field } from 'payload'
import { PaymentFieldConfig } from '@payloadcms/plugin-form-builder/types'















const Message: Block = {
  slug: 'message',
  fields: [
    {
      name: 'message',
      type: 'richText',
      localized: true,
    },
  ],
  labels: {
    plural: 'Message Blocks',
    singular: 'Message',
  },
}

const Phone: Block = {
  slug: 'phone',
  interfaceName: 'PhoneFormField',
  fields: [
    {
      type: 'row',
      fields: [
        {
          ...name,
          admin: {
            width: '50%',
          },
        },
        {
          ...label,
          admin: {
            width: '50%',
          },
        },
      ],
    },
    width,
    required,
  ],
  labels: {
    plural: 'Phone Fields',
    singular: 'Phone',
  },
}

export const ArrayBlock: Block = {
  slug: 'array',
  interfaceName: 'ArrayFormField',
  fields: [
    {
      type: 'row',
      fields: [
        {
          ...name,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'label',
          type: 'text',
          label: 'Array Item Label',
          required: true,
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'title',
      type: 'text',
      label: 'Array Title',
      admin: {
        width: '50%',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Array Description',
    },
    {
      type: 'row',
      fields: [
        {
          ...width,
          defaultValue: 100,
          admin: {
            width: '33%',
          },
        },
        {
          name: 'minRows',
          type: 'number',
          label: 'Minimum Rows',
          required: true,
          defaultValue: 1,
          admin: {
            width: '33%',
          },
        },
        {
          name: 'maxRows',
          type: 'number',
          label: 'Maximum Rows',
          required: true,
          defaultValue: 4,
          admin: {
            width: '33%',
          },
        },
      ],
    },
    {
      type: 'blocks',
      name: 'fields',
      label: 'Fields',
      required: true,
      blocks: [Text, Textarea, Email, Number, Checkbox, Phone],
    },
  ],
}

export const Group: Block = {
  slug: 'group',
  interfaceName: 'GroupFormField',
  fields: [
    {
      type: 'row',
      fields: [
        {
          ...name,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      type: 'blocks',
      name: 'fields',
      label: 'Fields',
      required: true,
      blocks: [Text, Textarea, Email, Number, Checkbox, Phone, ArrayBlock, Select, State, Country],
    },
  ],
}

export type FormFields = keyof typeof fields

export const fields = {
  checkbox: Checkbox,
  country: Country,
  email: Email,
  message: Message,
  number: Number,
  payment: Payment,
  select: Select,
  state: State,
  text: Text,
  textarea: Textarea,
  phone: Phone,
  array: ArrayBlock,
  group: Group,
}
