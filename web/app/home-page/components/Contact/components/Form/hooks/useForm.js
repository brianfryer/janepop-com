import { useCallback } from 'react';
import { useForm as useFormHook } from 'react-hook-form';
import {
  EMAIL_INPUT,
  MESSAGE_INPUT,
  NAME_INPUT,
  OPTIONS_INPUTS,
  PHONE_INPUT,
} from '../constants';

const useForm = () => {
  const defaultValues = {
    [EMAIL_INPUT.name]: '',
    [MESSAGE_INPUT.name]: '',
    [NAME_INPUT.name]: '',
    [PHONE_INPUT.name]: '',
    ...OPTIONS_INPUTS.list.reduce((acc, { name }) => ({ ...acc, [name]: false }), {}),
  };

  const {
    formState,
    handleSubmit,
    register,
    setValue,
  } = useFormHook({
    defaultValues,
  });

  const onSubmit = useCallback(async (data) => {
    console.log(data);
  }, []);

  return {
    defaultValues,
    formState,
    handleSubmit,
    register,
    onSubmit,
    setValue,
  };
};

export default useForm;
