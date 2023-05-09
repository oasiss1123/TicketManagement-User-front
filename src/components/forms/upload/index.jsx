import React from 'react';
import { Upload, Button, Row } from 'antd';
import { TextLarge } from '../../text';
import style from './style.css';

export const UploadImage = React.memo(
  ({ item, errors, clearErrors, control }) => {
    return (
      <>
        <Row>{item.label && <TextLarge text={item.label} />}</Row>
        <Upload>
          <Button className={style.uploadButton}>Upload</Button>
        </Upload>
      </>
    );
  },
);
