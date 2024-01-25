// React
import { useState, useContext } from 'react';
// React Hook Form
import { useForm } from 'react-hook-form';
// Layouts
import { AuthLayout } from '../ui/layouts';
// Views
import { AuthLoginView } from '../ui/views';
// Context
import { AuthContext } from '../../../context';


const resetForm = () => {
  return {
    email: '',
    password: ''
  }
}

export const AuthLoginPage = () => {
  const [ isSubmitting, setIsSubmitting ] = useState( false );
  const { authLogin } = useContext( AuthContext );
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmitForm = ( formData ) => {
    authLogin( formData.email, formData.password );
  }

  return (
    <AuthLayout>
      <AuthLoginView
        onSubmitForm={ onSubmitForm }
        register={ register }
        handleSubmit={ handleSubmit }
        errors={ errors }
        reset={ reset }
      />
    </AuthLayout>
  );
}
