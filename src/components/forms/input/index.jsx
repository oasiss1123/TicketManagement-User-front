import { Fragment } from 'preact';
import { memo } from 'react';
import { compareRender } from '../../../functions/form';
import { useController } from 'react-hook-form';
import { Input as InputAntd } from 'antd';
import { Required, RowComponent } from '../../../styles/global-style';
import { TextLarge, TextXSMall } from '../../text';

const InputLabel = ({ control, item, handleChange }) => {
  const {
    ref,
    rules,
    name,
    defaultValue,
    label,
    placeholder,
    disabled,
    onEnter,
    hidden,
  } = item;

  const { field, fieldState } = useController({
    control,
    name,
    rules,
    defaultValue,
  });
  const { error } = fieldState;
  const { value } = field;
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const { value: v } = event.target;
      onEnter && onEnter(v, true);
    }
  };

  return (
    <Fragment>
      <RowComponent>
        {label && <TextLarge text={label} />}
        {rules && rules.required && <Required>*</Required>}
      </RowComponent>
      <InputAntd
        id={ref}
        size="large"
        name={ref}
        value={value}
        disabled={disabled}
        onChange={(e) => handleChange(e, item)}
        onKeyDown={(e) => handleKeyDown(e)}
        placeholder={placeholder}
        autoComplete={'off'}
        style={{ margin: '5px 0px', borderRadius: '10px' }}
      />
      {error && <TextXSMall text={error.message} color="red" />}
    </Fragment>
  );
};

export const MemoizedInputLabel = memo(InputLabel, compareRender);
