import { memo } from 'react';
import { Fragment } from 'preact';
import { useController } from 'react-hook-form';
import { compareRender } from '../../../functions/form';
import { Row, Select as SelectAntd } from 'antd';
import { TextLarge, TextXSMall } from '../../text';
import { useMemo } from 'preact/hooks';
import { Required } from '../../../styles/global-style';

const { Option } = SelectAntd;

const Dropdown = ({ control, item, handleChange, handleClear }) => {
  const {
    ref,
    rules,
    name,
    defaultValue,
    placeholder,
    label,
    mode,
    disabled,
    properties,
  } = item;
  const { options, valueKey, labelKey } = properties;
  const { field, fieldState } = useController({
    control,
    name,
    rules,
    defaultValue,
  });
  const { error } = fieldState;
  const { value } = field;

  const opt = useMemo(() => {
    return options.map((e) => {
      const val = valueKey ? e[valueKey || 'value'] : e.value;
      const lab = labelKey ? e[labelKey || 'label'] : e.label;
      return <Option value={val}>{lab}</Option>;
    });
  }, [options]);

  return (
    <Fragment>
      <Row>
        {label && <TextLarge text={label} />}
        {rules && rules.required && <Required>*</Required>}
      </Row>
      <SelectAntd
        size={'large'}
        showSearch
        allowClear
        showArrow
        id={ref}
        value={value || []}
        placeholder={placeholder}
        optionFilterProp="children"
        onChange={(e) => handleChange(e, item)}
        onClear={() => handleClear({}, item)}
        style={{
          width: '100%',
          margin: '5px 0px',
          borderRadius: '10px !important',
        }}
        mode={mode || undefined}
        disabled={disabled}
      >
        {opt}
      </SelectAntd>
      {error && <TextLarge text={error.message} color="red" />}
    </Fragment>
  );
};

export const MemoizedDropdown = memo(
  Dropdown,
  (prev, next) =>
    compareRender(prev, next) &&
    JSON.parse(JSON.stringify(prev.item.properties.options)) ===
      JSON.parse(JSON.stringify(next.item.properties.options)) &&
    compareRender(prev, next, 'item.disabled'),
);
