import FieldState from './components/FieldState';
import FormIdSelector from './components/FormIdSelector';
import FormState from './components/FormState';
import Input from './components/Input';
import { useGetData } from './helpers/get-data';
import styles from './styles/Devtools.module.css';
import './styles/global.css';
import type React from 'react';
import { useState } from 'react';

const Devtools: React.FC = () => {
  const data = useGetData();

  const [formId, setFormId] = useState('');
  const [filteredFieldName, setFilteredFieldName] = useState('');

  if (Object.keys(data).length === 0) {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Oops.. No React Hook Form here!</h1>
        <div>
          <div>If your page have React Hook Form</div>
          <div>
            Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to
            reload the page.
          </div>
        </div>
      </div>
    );
  }

  if (!data[formId]) {
    return (
      <div className={styles.main}>
        <FormIdSelector
          ids={['Select a ID...', ...Object.keys(data)]}
          id={formId}
          onChange={setFormId}
        />
        <h1 style={{ textAlign: 'center' }}>Please Select a Form ID</h1>
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <FormIdSelector
          ids={Object.keys(data)}
          id={formId}
          onChange={setFormId}
        />
        <Input
          placeholder="Filter name..."
          value={filteredFieldName}
          onChange={setFilteredFieldName}
        />
      </div>
      <div className={styles.middle}>
        {Object.keys(data[formId].formValues)
          .filter((fieldName) =>
            fieldName.toLowerCase().includes(filteredFieldName.toLowerCase()),
          )
          .map((fieldName) => (
            <FieldState
              key={fieldName}
              name={fieldName}
              hasError={false}
              isNative
              state={{
                value: data[formId].formValues[fieldName],
                touched: !!data[formId].formState.touchedFields[fieldName],
                dirty: !!data[formId].formState.dirtyFields[fieldName],
                errorType: data[formId].formState.errors[fieldName]?.type,
                errorMessage: data[formId].formState.errors[fieldName]?.message,
              }}
            />
          ))}
      </div>
      <div>
        <FormState
          state={{
            count: data[formId].formState.submitCount,
            submitted: data[formId].formState.isSubmitted,
            submitting: data[formId].formState.isSubmitting,
            submitSuccessful: data[formId].formState.isSubmitSuccessful,
            valid: data[formId].formState.isValid,
            validating: data[formId].formState.isValidating,
            dirty: data[formId].formState.isDirty,
          }}
        />
      </div>
    </div>
  );
};

export default Devtools;
