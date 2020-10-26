import { ValidationError } from 'yup';

interface ErrosProps {
  [key: string]: string;
}

export default function getErrors(errors: ValidationError): ErrosProps {
  const validationErrors: ErrosProps = {};

  errors.inner.forEach((error) => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
