import React from 'react';
import { DatePicker, Row } from 'antd';
import { Controller } from 'react-hook-form';
import { useEffect } from 'preact/hooks';
import { TextXSMall, TextLarge } from '../../text';
import { Required, RowComponent } from '../../../styles/global-style';

const { RangePicker } = DatePicker;

export const DatePickerForm = React.memo(
  ({ item, errors, clearErrors, control }) => {
    return (
      <>
        <Row>
          {item.label && <TextLarge text={item.label} />}
          {item.rules && item.rules.required && <Required>*</Required>}
        </Row>

        <Controller
          name={item.name}
          control={control}
          rules={item.rules}
          defaultValue={item.defaultValue}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              size={'large'}
              disabledDate={item.disabledDate}
              disabled={item.disabled}
              value={value}
              style={{ width: '100%', margin: '5px 0px', borderRadius: '10px' }}
              onChange={onChange}
              bordered={item.bordered}
              // onChange={(errors[item.name]) ? clearErrors(item.name) && onChange : onChange}
            />
          )}
        />
      </>
    );
  },
  false,
);

export const RangePickerForm = ({ item, control, setValue }) => {
  useEffect(() => {
    setValue(item.name, [item.defaultValue[0], item.defaultValue[1]]);
  }, [item.defaultValue]);

  return (
    <Controller
      name={item.name}
      control={control}
      rules={item.rules}
      defaultValue={
        item.defaultValue
          ? [item.defaultValue[0], item.defaultValue[1]]
          : item.value
      }
      render={({ field: { onChange, value } }) => {
        return (
          <RangePicker
            disabledDate={item.disabledDate}
            disabled={item.disabled}
            // defaultValue={item.defaultValue ? [item.defaultValue[0], item.defaultValue[1]] : value}
            value={value}
            style={{ width: '100%', marginTop: 5 }}
            onChange={onChange}
            format={item.format}
            allowClear={item.allowClear}
            placeholder={item.placeholder}
          />
        );
      }}
    />
  );
};
