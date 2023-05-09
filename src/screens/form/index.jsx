import { StyledContainer } from '../../components/container/styled';
import { RenderForm } from '../../components/forms';
import { useForm } from 'react-hook-form';
import { FORM_INPUT } from './forms/demo';
import { Icon } from '../../resources';
import { POST_LARK } from '../../services';
import { useFormState } from './hook/useFormState';
import WrapperComponent from '../../components/hoc/Wrapper-component';
import { useGetOptions } from './hook/useGetOptions';
import { ButtonTheme } from '../../components/buttons';
import { useState } from 'preact/hooks';
import { TextLarge } from '../../components/text';
import React from 'react';
import { CardTheme } from '../../components/card';
import { ContainerButton } from '../../styles/global-style';
import { notification } from 'antd';

const Forms = () => {
  const { defaultValues } = useFormState();

  const { control, setValue, getValues, handleSubmit, reset } = useForm({
    defaultValues,
  });
  const {
    optionsType,
    optionsHardware,
    optionsSoftware,
    optionsMaintain,
    optionsSelect,
    optionValue,
  } = useGetOptions();
  const [inputSelect, setInputSelect] = useState([]);

  const submit = async () => {
    try {
      const data = getValues();
      console.log(data);
      const date = data.dateHw ? data.dateHw : data.dateSw;
      const objarr = [
        {
          custom_id: 'text',
          id: 'widget16365401463290001',
          name: 'วันที่ต้องการ',
          value: date ? date : data.date,
          type: 'date',
        },
        {
          id: 'widget16365398864230001',
          name: 'ประเภทที่ต้องการ',
          value: data.categories,
          type: 'checkboxV2',
        },
        data.categories.includes('$i18n-kvtda0ui-ep5pps8pq8l-45')
          ? {
              id: 'widget16365394804160001',
              name: 'อุปกรณ์ที่ต้องการ-HW',
              value: data.hardware,
              type: 'checkboxV2',
            }
          : null,
        data.categories.includes('$i18n-kvtda0ui-ep5pps8pq8l-45')
          ? {
              id: 'widget16365404380580001',
              name: 'จำนวนชิ้น',
              type: 'number',
              value: data.qtyhw,
            }
          : null,
        data.categories.includes('$i18n-kvtda0ui-ep5pps8pq8l-45') &&
        data.categories.includes('l9dxvau9-iqhemfbwyw-3')
          ? {
              id: 'widget16660819336040001',
              name: 'ลักษณะ',
              type: 'radioV2',
              value: data.nature,
            }
          : null,
        {
          id: 'widget16365403711560001',
          name: 'หมายเหตุ',
          value: data.remark,
          type: 'input',
        },
        data.categories.includes('kvtdlle8-k8sy6ukq0v-1')
          ? {
              id: 'widget16365398272060001',
              name: 'อุปกรณ์ที่ต้องการเบิก-SW',
              value: data.software,
              type: 'checkboxV2',
            }
          : null,
        {
          id: 'widget16366934605940001',
          name: 'รายละเอียดที่ขอ',
          value: data.detail,
          type: 'textarea',
        },
        {
          id: 'widget16461033480680001',
          name: 'หมายเหตุไอที',
          value: data.remarkit,
          type: 'input',
        },
        data.categories.includes('kvvwytcz-7bscrhow9p-1')
          ? {
              id: 'widget16660831056360001',
              name: 'ปรับปรุงแก้ไขระบบต่าง ๆ',
              value: data.adjustsystem,
              type: 'radioV2',
            }
          : null,
        data.categories.includes('kwkfwqxv-stze4twqijl-1')
          ? {
              id: 'widget16384154743410001',
              name: 'สิทธิ์การใช้งานระบบ',
              value: data.permission,
              type: 'checkboxV2',
            }
          : null,
        data.categories.includes('kwndse0x-42537t5e30b-1')
          ? {
              id: 'widget16384156447490001',
              name: 'ขอ Import - Export ข้อมูล',
              value: data.iedata,
              type: 'checkboxV2',
            }
          : null,
      ];

      const newForm = objarr.filter(function (el) {
        return el != null;
      });

      const obj = {
        approval_code: '05D4A0EC-2BB5-4686-B222-DE1A10DF1771',
        approval: [
          {
            id: '3c4ce3507ea8fa45bf77ee062f81726b',
            value: 'mobileapp@dplusonline.net',
          },
        ],
        user: 'nathanon58@gmail.com',
        form: newForm,
        cc: ['tuey-22@hotmail.com'],
      };
      console.log(obj);

      const res = await POST_LARK(
        'https://devlark-api.zetta-system.com/lark/api/v1/approval/create',
        obj,
      );

      if (res.success) {
        Modal.success({
          title: 'OK!',
          content: 'OKAY',
          afterClose: () => {
            reset();
            location.reload();
          },
        });
      }
    } catch (err) {
      console.log('มีข้อผิดพลาดเกิดขึ้น', err);
      const { message } = err;
      notification['error']({
        message: 'NOT OK :(',
        description: `${message}`,
      });
    } finally {
      // setLoading(false)
    }
  };

  const onChangeSuccess = (e, item) => {
    if (item.name === 'categories') {
      setInputSelect(e);
    }
  };
  console.log('log values', getValues('type'));
  return (
    <div
      style={{
        padding: '1%',
        backgroundColor: '#f3f9fd',
        width: '100%',
        height: '100%',
        borderRadius: '15px',
      }}
    >
      <CardTheme
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {<Icon.labtop />}
            &nbsp;
            <TextLarge text={'ขออุปกรณ์ซอฟต์แวร์ไอที'} />
          </div>
        }
        content={
          <StyledContainer>
            <form onSubmit={handleSubmit(submit)}>
              <RenderForm
                control={control}
                forms={FORM_INPUT({
                  optionsType,
                  inputSelect,
                  optionsHardware,
                  optionsSoftware,
                  optionsMaintain,
                  optionsSelect,
                  optionValue,
                })}
                setValue={setValue}
                getValues={getValues}
                onChange={onChangeSuccess}
              />
              <ContainerButton right>
                <ButtonTheme useFor="SUBMIT" htmlType="submit" />
              </ContainerButton>
            </form>
          </StyledContainer>
        }
      />
    </div>
  );
};

export default WrapperComponent('FormScene')(Forms);
