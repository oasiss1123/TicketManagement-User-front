import { useEffect, useState } from 'preact/hooks';

export const useGetOptions = () => {
  const optionValue = {
    requestDevices: '$i18n-kvtda0ui-ep5pps8pq8l-45',
    requestProblem: 'l9dxvau9-iqhemfbwyw-3',
    requestInstallSoftware: 'kvtdlle8-k8sy6ukq0v-1',
    requestEditReport: 'l9dxvau9-uynamq1oj3k-1',
    requestGroupEmail: 'l9dy3zhn-wr47r74e8bl-1',
    requestMaintenanceSystem: 'kvvwytcz-7bscrhow9p-1',
    requestSystemPermission: 'kwkfwqxv-stze4twqijl-1',
    requestRequestData: 'kwndse0x-42537t5e30b-1',
  };
  const allOptionsSoftware = {
    softwareAx: 'kvtdk4cp-jv9jkefncz-0',
    softwareMicrosoftOffice: 'kvtdme9m-3fenj656ryq-1',
    softwareAdobeIllustrator: 'kvtdme9m-3336mumd3zl-3',
    softwareAdobePhotoshop: 'kvtdme9m-r9vbakvr557-5',
    softwareAdobePremierPro: 'kvtdme9m-ds5eq27y3l-7',
    softwareLine: 'kvtdme9m-c3f50bk0s3n-9',
    softwareLark: 'kyty54fd-qr35cmcfgv-1',
    softwareEmail: 'kvtdme9m-ugkva8mzhhe-11',
    softwareOther: 'kvtdme9m-m4bl90bl6wf-13',
  };
  const allOptionsHardware = {
    HardwarePC: 'kvtdcorp-ctoemvgpq9-0',
    HardwareMonitor: 'l0bw8q73-vsl1abikh4c-1',
    HardwareLaptop: 'kvtdff3r-g2uko3f1ijl-1',
    HardwareMobilePhone: 'kvtdff3r-6g50a6w3z18-3',
    HardwareTablet: 'kvtdff3r-udzit0ooyhi-5',
    HardwarePrinter: 'kvte2rin-wctdmb2m5xq-1',
    HardwareMouse: 'kvtdff3r-17jokky313kj-7',
    HardwareKeyboard: 'kvtdff3r-ee1t6994dci-9',
    HardwareBattery: 'l0bzaj85-ioczdagobza-1',
    HardwareCamera: 'kvtdff3r-1pv9p73gx32-11',
    HardwareLabtopCarryBag: 'kvtdff3r-tltclkvfd5e-13',
    HardwareLinkCable: 'kvtdff3r-wtpa2qmsk6-15',
    HardwarePlug: 'lavowrcj-p04ny2id72h-1',
    HardwareOther: 'kvtdff3r-13shc89ed7vb-17',
  };
  const allOptionMaintain = {
    MaintainAX: 'l9dyv3vp-4rahidjq93m-0',
    MaintainSale: 'l9dyvfbr-ckkm0u73bj4-1',
    MaintainHumanResource: 'l9dyvfbr-jfejea50a08-3',
    MaintainFactory: 'l9dyvpgy-vpn5vhxtzb-1',
    MaintainOffice: 'l9dzplpi-2lquvpkstrd-1',
    MaintainOther: 'l9dyvpgy-bofq8825n5a-3',
  };
  const allOptionAddon = {
    addOnNew: 'l9dy5zj9-0uy913qvkpo-0',
    addOnReplace: 'l9dy60j0-hkpcddoy3q-1',
  };

  const [optionsType, setOptionsType] = useState([]);
  const [optionsHardware, setOptionsHardware] = useState([]);
  const [optionsSoftware, setOptionsSoftware] = useState([]);
  const [optionsMaintain, setOptionsMaintain] = useState([]);
  const [optionsSelect, setOptionsSelect] = useState([]);

  useEffect(() => {
    onFetchOptionsType();
    onFetchOptionsHardware();
    onFetchOptionsSoftware();
    onFetchOptionsMaintain();
    onFetchOptionsSelect();
  }, []);

  const onFetchOptionsSoftware = () => {
    setOptionsSoftware([
      {
        label: 'AX',
        value: allOptionsSoftware.softwareAx,
      },
      {
        label: 'Microsoft Office',
        value: allOptionsSoftware.softwareMicrosoftOffice,
      },
      {
        label: 'Adobe Illustrator',
        value: allOptionsSoftware.softwareAdobeIllustrator,
      },
      {
        label: 'Adobe Photoshop',
        value: allOptionsSoftware.softwareAdobePhotoshop,
      },
      {
        label: 'Adobe Premier Pro',
        value: allOptionsSoftware.softwareAdobePremierPro,
      },
      {
        label: 'Line',
        value: allOptionsSoftware.softwareLine,
      },
      {
        label: 'Lark',
        value: allOptionsSoftware.softwareLark,
      },
      {
        label: 'Email',
        value: allOptionsSoftware.softwareEmail,
      },
      {
        label: 'Other',
        value: allOptionsSoftware.softwareOther,
      },
    ]);
  };

  const onFetchOptionsHardware = async () => {
    // CALL API
    setOptionsHardware([
      {
        label: 'Desktop Computer (PC)',
        value: allOptionsHardware.HardwarePC,
      },
      {
        label: 'Monitor',
        value: allOptionsHardware.HardwareMonitor,
      },
      {
        label: 'Laptop',
        value: allOptionsHardware.HardwareLaptop,
      },
      {
        label: 'Mobile Phone',
        value: allOptionsHardware.HardwareMobilePhone,
      },
      {
        label: 'Tablet',
        value: allOptionsHardware.HardwareTablet,
      },
      {
        label: 'Printer',
        value: allOptionsHardware.HardwarePrinter,
      },
      {
        label: 'Mouse',
        value: allOptionsHardware.HardwareMouse,
      },
      {
        label: 'Keyboard',
        value: allOptionsHardware.HardwareKeyboard,
      },
      {
        label: 'Battery',
        value: allOptionsHardware.HardwareBattery,
      },
      {
        label: 'Camera',
        value: allOptionsHardware.HardwareCamera,
      },
      {
        label: 'Labtop Carry Bag',
        value: allOptionsHardware.HardwareLabtopCarryBag,
      },
      {
        label: 'Link Cable',
        value: allOptionsHardware.HardwareLinkCable,
      },
      {
        label: 'Power Hub (Plug)',
        value: allOptionsHardware.HardwarePlug,
      },
      {
        label: 'Other',
        value: allOptionsHardware.HardwareOther,
      },
    ]);
  };

  const onFetchOptionsType = () => {
    // CALL API
    setOptionsType([
      {
        label: 'ขออุปกรณ์ต่างๆ',
        value: optionValue.requestDevices,
      },
      {
        label: 'แจ้งอุปกรณ์มีปัญหา',
        value: optionValue.requestProblem,
      },
      {
        label: 'ขอลงโปรแกรม',
        value: optionValue.requestInstallSoftware,
      },
      {
        label: 'ขอ / แก้ รายงาน (excel,powerbi)',
        value: optionValue.requestEditReport,
      },
      {
        label: 'ขอ / เข้า กลุ่มอีเมล',
        value: optionValue.requestGroupEmail,
      },
      {
        label: 'ปรับปรุงแก้ไขระบบต่าง ๆ',
        value: optionValue.requestMaintenanceSystem,
      },
      {
        label: 'สิทธิ์การใช้งานระบบ',
        value: optionValue.requestSystemPermission,
      },
      {
        label: 'ขอ Import - Export ข้อมูล',
        value: optionValue.requestRequestData,
      },
    ]);
  };
  const onFetchOptionsMaintain = async () => {
    setOptionsMaintain([
      {
        label: 'AX',
        value: allOptionMaintain.MaintainAX,
      },
      {
        label: 'Sale',
        value: allOptionMaintain.MaintainSale,
      },
      {
        label: 'Human Resource',
        value: allOptionMaintain.MaintainHumanResource,
      },
      {
        label: 'Factory',
        value: allOptionMaintain.MaintainFactory,
      },
      {
        label: 'Office',
        value: allOptionMaintain.MaintainOffice,
      },
      {
        label: 'Other (Please describe)',
        value: allOptionMaintain.MaintainOther,
      },
    ]);
  };

  const onFetchOptionsSelect = () => {
    setOptionsSelect([
      {
        label: 'ขอเพิ่ม',
        value: allOptionAddon.addOnNew,
      },
      {
        label: 'ขอทดแทนตัวเก่า',
        value: allOptionAddon.addOnReplace,
      },
    ]);
  };
  return {
    optionsType,
    optionsHardware,
    optionsSoftware,
    optionsMaintain,
    optionsSelect,
    optionValue,
  };
};
