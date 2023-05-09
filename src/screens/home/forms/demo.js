export const FORM_INPUT = ({ optionsGender, optionsJob }) => {
  return [
    {
      ref: 'firstName',
      name: 'firstName',
      label: 'ชื่อ',
      type: 'INPUT',
      placeholder: 'กรอกชื่อ',
      span: 12,
      rules: {
        required: {
          value: true,
          message: 'This field is required',
        },
      },
    },
    {
      ref: 'lastName',
      name: 'lastName',
      label: 'นามสกุล',
      type: 'INPUT',
      placeholder: 'กรอกนามสกุล',
      span: 12,
      rules: {
        required: {
          value: true,
          message: 'This field is required',
        },
      },
    },
    {
      ref: 'gender',
      name: 'gender',
      label: 'เลือกเพศ',
      type: 'DROPDOWN',
      span: 12,
      properties: {
        options: optionsGender || [],
      },
      rules: {
        required: {
          value: true,
          message: 'This field is required',
        },
      },
    },
    {
      ref: 'job',
      name: 'job',
      label: 'เลือกอาชีพ',
      type: 'DROPDOWN',
      span: 12,
      properties: {
        options: optionsJob || [],
        valueKey: 'jobId',
        labelKey: 'jobName',
      },
      rules: {
        required: {
          value: true,
          message: 'This field is required',
        },
      },
    },
  ];
};
