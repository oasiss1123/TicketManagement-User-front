import dayjs from 'dayjs';

export const FORM_INPUT = ({
  optionsHardware,
  optionsType,
  inputSelect,
  optionsSoftware,
  optionsMaintain,
  optionsSelect,
  optionValue,
}) => {
  console.log('log demo', inputSelect);
  return [
    {
      ref: 'categories',
      name: 'categories',
      label: 'ประเภทที่ต้องการ',
      type: 'DROPDOWN',
      placeholder: 'เลือกประเภทที่ต้องการ',
      mode: 'multiple',
      span: 6,
      properties: {
        options: optionsType || [],
      },
      rules: {
        required: {
          value: true,
          message: 'จำเป็นต้องกรอก',
        },
      },
    },
    {
      ref: 'date',
      name: 'date',
      label: 'วันที่ต้องการใช้',
      type: 'DATE_PICKER',
      hidden:
        inputSelect.includes(optionValue.requestProblem) ||
        inputSelect.includes(optionValue.requestEditReport) ||
        inputSelect.includes(optionValue.requestGroupEmail) ||
        inputSelect.includes(optionValue.requestMaintenanceSystem) ||
        inputSelect.includes(optionValue.requestSystemPermission) ||
        inputSelect.includes(optionValue.requestRequestData)
          ? false
          : true,
      disabledDate: (current) =>
        current && current < dayjs().subtract(1, 'days'),
      span: 6,
    },
    {
      ref: 'dateHw',
      name: 'dateHw',
      label: 'วันที่ต้องการใช้-HW',
      type: 'DATE_PICKER',
      hidden: inputSelect.includes(optionValue.requestDevices) ? false : true,
      disabledDate: (current) => current && current < dayjs().add(10, 'days'),
      span: 6,
      rules: {
        required: {
          value: true,
          message: 'โปรดเลือก',
        },
      },
    },
    {
      ref: 'dateSw',
      name: 'dateSw',
      label: 'วันที่ต้องการใช้-SW',
      type: 'DATE_PICKER',
      hidden: inputSelect.includes(optionValue.requestInstallSoftware)
        ? false
        : true,
      disabledDate: (current) => current && current < dayjs().add(3, 'days'),
      span: 6,
      rules: {
        required: {
          value: true,
          message: 'จำเป็นต้องกรอก!',
        },
      },
    },
    {
      ref: 'software',
      name: 'software',
      label: 'Software ที่ต้องการ',
      hidden: inputSelect.includes(optionValue.requestInstallSoftware)
        ? false
        : true,
      type: 'DROPDOWN',
      mode: 'multiple',
      properties: {
        options: optionsSoftware || [],
      },
      placeholder: 'โปรดเลือก',
      span: 6,
      rules: {
        required: {
          value: true,
          message: 'จำเป็นต้องกรอก',
        },
      },
    },
    {
      ref: 'hardware',
      name: 'hardware',
      label: 'Hardware ที่ต้องการ',
      placeholder: 'โปรดเลือก',
      type: 'DROPDOWN',
      mode: 'multiple',
      properties: {
        options: optionsHardware || [],
      },
      hidden: inputSelect.includes(optionValue.requestDevices)
        ? false
        : inputSelect.includes(optionValue.requestProblem)
        ? false
        : true,
      span: 6,
      rules: {
        required: {
          value: true,
          message: 'จำเป็นต้องกรอก',
        },
      },
    },
    {
      ref: 'permission',
      name: 'permission',
      label: 'สิทธิ์การใช้งานระบบ',
      type: 'DROPDOWN',
      mode: 'multiple',
      properties: {
        options: optionsMaintain || [],
      },
      hidden: inputSelect.includes(optionValue.requestSystemPermission)
        ? false
        : true,
      span: 6,
    },
    {
      ref: 'iedata',
      name: 'iedata',
      label: 'Import - Export ข้อมูล',
      type: 'DROPDOWN',
      mode: 'multiple',
      properties: {
        options: optionsMaintain || [],
      },
      hidden: inputSelect.includes(optionValue.requestRequestData)
        ? false
        : true,
      span: 6,
    },
    {
      ref: 'adjustsystem',
      name: 'adjustsystem',
      label: 'ปรับปรุงแก้ไขระบบต่าง ๆ',
      type: 'DROPDOWN',
      mode: 'multiple',
      properties: {
        options: optionsMaintain || [],
      },
      hidden: inputSelect.includes(optionValue.requestMaintenanceSystem)
        ? false
        : true,
      span: 6,
    },
    {
      ref: 'qtyhw',
      name: 'qtyhw',
      label: 'จำนวนชิ้น',
      hidden: inputSelect.includes(optionValue.requestDevices) ? false : true,
      type: 'INPUT',
      placeholder: 'โปรดระบุ',
      span: 6,
      rules: {
        required: {
          value: true,
          message: 'จำเป็นต้องกรอก',
        },
      },
    },
    {
      ref: 'detail',
      name: 'detail',
      label: 'รายละเอียดที่ขอ',
      type: 'INPUT',

      placeholder: 'โปรดระบุ',
      span: 6,
    },
    {
      ref: 'remark',
      name: 'remark',
      label: 'หมายเหตุ',
      placeholder: 'โปรดระบุ',
      type: 'INPUT',
      span: 6,
    },
    {
      ref: 'remarkit',
      name: 'remarkit',
      label: 'หมายเหตุไอที',

      type: 'INPUT',
      placeholder: 'โปรดระบุ',
      span: 6,
    },
    {
      ref: 'nature',
      name: 'nature',
      label: 'ลักษณะ',
      placeholder: 'Select',
      type: 'DROPDOWN',
      hidden: !(
        inputSelect.includes(optionValue.requestDevices) &&
        inputSelect.includes(optionValue.requestProblem)
      ),
      properties: {
        options: optionsSelect || [],
      },
      span: 6,
      rules: {
        required: {
          value: true,
          message: 'This field is required',
        },
      },
    },
    {
      ref: 'image',
      name: 'image',
      label: 'แนบรูป',
      type: 'IMAGE_UPLOAD',
      placeholder: 'อัพโหลด',
      span: 6,
    },
    {
      ref: 'file',
      name: 'file',
      label: 'File Attachment',
      type: 'IMAGE_UPLOAD',
      placeholder: 'อัพโหลด',
      span: 6,
    },
  ];
};
