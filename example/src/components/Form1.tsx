import { useExportControls } from '../hooks/useExportControls';
import type React from 'react';
import { useForm } from 'react-hook-form';

const Form1: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      example: '',
      exampleRequired: '',
    },
  });

  useExportControls('example-form-1', control);

  return (
    <form
      onSubmit={handleSubmit(() => {
        return;
      })}
    >
      <label>Example</label>
      <input {...register('example')} />
      <label>ExampleRequired</label>
      <input
        {...register('exampleRequired', { required: true, maxLength: 10 })}
      />
      {errors.exampleRequired && <p>This field is required</p>}
      <input type="submit" />
    </form>
  );
};

export default Form1;
