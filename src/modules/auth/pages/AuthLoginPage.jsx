// React
import { useState } from 'react';
// React Hook Form
import { useForm } from 'react-hook-form';
// Layouts
import { AuthLayout } from '../ui/layouts';
// Views
import { AuthLoginView } from '../ui/views';


const resetForm = () => {
  return {
    email: '',
    password: ''
  }
}

export const AuthLoginPage = () => {
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

  const [ isSubmitting, setIsSubmitting ] = useState( false );


  const onSubmitForm = async ( formData ) => {
    console.log( formData );
  }

  return (
    <AuthLayout>
      <AuthLoginView
        onSubmitForm={ onSubmitForm }
        register={ register }
        handleSubmit={ handleSubmit }
        errors={ errors }
        reset={ reset }
        history
      />
    </AuthLayout>
  );
}
