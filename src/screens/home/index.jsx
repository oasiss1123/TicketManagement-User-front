import { Button } from 'antd';

import { useForm } from 'react-hook-form';
import { StyledContainer } from '../../components/container/styled';
import { RenderForm } from '../../components/forms';
import WrapperComponent from '../../components/hoc/Wrapper-component';
import { FORM_INPUT } from './forms/demo';
import { useFormState } from './hook/useFormState';
import { useGetOptions } from './hook/useGetOptions';

const HomeScene = () => {
  const { defaultValues } = useFormState();
  const { control, setValue, getValues, handleSubmit } = useForm({
    defaultValues,
  });
  const { optionsGender, optionsJob } = useGetOptions();

  const onSubmitSuccess = () => {
    console.log('test');
    console.log(getValues());
  };

  return (
    <StyledContainer>
      erer
      <RenderForm
        control={control}
        forms={FORM_INPUT({ optionsGender, optionsJob })}
        setValue={setValue}
        getValues={getValues}
      />
      <Button type="primary" onClick={handleSubmit(onSubmitSuccess)}>
        Primary Button
      </Button>
    </StyledContainer>
  );
};

export default WrapperComponent('HomeScene')(HomeScene);
