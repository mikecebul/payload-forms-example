import { CollectionConfig } from 'payload'

export const Forms: CollectionConfig = {
  slug: 'forms',
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
    // {
    //   name: 'formBuilder',
    //   type: 'blocks',
    //   blocks: [],
    //   admin: {
    //     condition: (_, siblingData) => siblingData.formType === 'dynamic',
    //   },
    // },
    {
      name: 'staticForm',
      type: 'select',
      options: [{ label: 'login', value: 'login' }],
      admin: {
        condition: (_, siblingData) => siblingData.formType === 'static',
      },
    },
  ],
}
