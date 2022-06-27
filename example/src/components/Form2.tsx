import { useExportControls } from '../hooks/useExportControls';
import React from 'react';
import { useForm } from 'react-hook-form';

const Form2: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      mobileNumber: '',
      gender: 'other',
    },
  });

  useExportControls('example-form-2', control);

  return (
    <form
      onSubmit={handleSubmit(() => {
        return;
      })}
    >
      <label>First Name</label>
      <input {...register('firstName')} defaultValue="test" />
      <label>Last Name</label>
      <input {...register('lastName')} />
      <label>Mobile Number</label>
      <input
        {...register('mobileNumber', {
          minLength: 6,
          maxLength: 13,
          required: true,
        })}
        type="tel"
      />
      {errors.mobileNumber && <p>{errors.mobileNumber.type}</p>}
      <label>Gender</label>
      <select {...register('gender')}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  );
};

export default Form2;
