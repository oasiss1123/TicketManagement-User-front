import React from 'react';
import { Col, Row } from 'antd';
import { MemoizedDropdown } from './dropdown';
import { MemoizedInputLabel } from './input';
import { DatePickerForm } from './datepicker';
import { UploadImage } from './upload';
import { Fragment } from 'preact';

export * from './input';
export * from './dropdown';

export const RenderForm = ({
  forms = [],
  setValue,
  getValues,
  control,
  styleRow,
  onChange,
  onClear,
}) => {
  function handleChange(e, item, option) {
    if (!e) {
      return;
    }

    switch (item.type) {
      case 'DROPDOWN':
      case 'SELECT':
      case 'SELECT_MULTI':
      case 'DATEPICKER':
        // console.log('log ', item.ref, e);
        setValue(item.ref, e);
        break;
      case 'FILE_UPLOAD':
      case 'IMAGE_UPLOAD':
        break;
      case 'SELECT_MODAL':
        setValue(item.ref, e);
        break;
      default:
        setValue(item.ref, e.target.value);
        break;
    }

    onChange && onChange(e, item, option);
  }

  function handleClear(e, item) {
    setValue(item.ref, '');
    onClear && onClear(e, item);
  }

  const rest = {
    control,
    setValue,
    getValues,
    handleChange,
    handleClear,
  };

  return (
    <Fragment>
      <Row gutter={[8, 8]} style={styleRow}>
        {forms.map((f, i) => {
          return f.hidden ? null : (
            <Col
              key={i}
              xs={{ span: 24 }}
              md={{ span: 24 }}
              xl={{ span: f.span }}
              lg={{ span: f.span }}
              style={{ ...f.style }}
            >
              {renderInputType(f, rest)}
            </Col>
          );
        })}
      </Row>
      <div style={{ marginBottom: '16px'}} />
    </Fragment>
  );
};

function renderInputType(item, globalProps) {
  const { type } = item;
  switch (type) {
    case 'INPUT':
      return <MemoizedInputLabel item={item} {...globalProps} />;
    case 'DROPDOWN':
      return <MemoizedDropdown item={item} {...globalProps} />;
    case 'DATE_PICKER':
      return <DatePickerForm item={item} {...globalProps} />;
    case 'IMAGE_UPLOAD':
      return <UploadImage item={item} {...globalProps} />;
    default:
      return <div />;
  }
}
