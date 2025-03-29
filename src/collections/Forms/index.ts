import { CollectionConfig } from 'payload'
import { fields } from './fields'

export const Forms: CollectionConfig = {
  slug: 'forms',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    group: 'Forms',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'formType',
      type: 'radio',
      options: [
        { label: 'Form Builder', value: 'dynamic' },
        { label: 'Pre Built', value: 'static' },
      ],
      defaultValue: 'dynamic',
      required: true,
    },
    {
      name: 'fields',
      type: 'blocks',
      blocks: Object.values(fields),
      admin: {
        condition: (_, siblingData) => siblingData.formType === 'dynamic',
      },
    },
    {
      name: 'form',
      type: 'select',
      options: [{ label: 'login', value: 'login' }],
      admin: {
        condition: (_, siblingData) => siblingData.formType === 'static',
      },
    },
    {
      name: 'submitButtonLabel',
      type: 'text',
      defaultValue: 'Submit',
    },
    {
      name: 'confirmationType',
      type: 'radio',
      admin: {
        description:
          'Choose whether to display an on-page message or redirect to a different page after they submit the form.',
        layout: 'horizontal',
      },
      defaultValue: 'message',
      options: [
        {
          label: 'Message',
          value: 'message',
        },
        {
          label: 'Redirect',
          value: 'redirect',
        },
      ],
    },
    {
      name: 'confirmationMessage',
      type: 'richText',
      admin: {
        condition: (_, siblingData) => siblingData?.confirmationType === 'message',
      },
      localized: true,
      required: true,
    },
    {
      name: 'redirect',
      type: 'group',
      admin: {
        condition: (_, siblingData) => siblingData?.confirmationType === 'redirect',
        hideGutter: true,
      },
      fields: [
        {
          name: 'type',
          type: 'radio',
          admin: {
            layout: 'horizontal',
          },
          defaultValue: 'reference',
          options: [
            {
              label: 'Internal link',
              value: 'reference',
            },
            {
              label: 'Custom URL',
              value: 'custom',
            },
          ],
        },
        {
          name: 'reference',
          type: 'relationship',
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'reference',
          },
          label: 'Document to link to',
          maxDepth: 2,
          relationTo: ['pages'],
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL to redirect to',
          required: true,
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'custom',
          },
        },
      ],
    },
  ],
}
