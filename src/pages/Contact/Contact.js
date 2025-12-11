import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import {
  Header,
  MainContainer,
  FormContent,
  FormInput,
  FormMessage,
  FormBtn,
  ErrorMessage,
} from './styles';

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const toastifySuccess = () => {
    toast(
      'Your contact email was sent successfully. We will get back to you soon. UGuide Team.',
      {
        position: 'top-center',
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        className: 'submit-feedback success',
        toastId: 'notifyToast',
      }
    );
  };

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;

    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }

    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Subject: ', subject);
    console.log('Message: ', message);
  };

  return (
    <MainContainer>
      <Header>Contact</Header>
      <FormContent>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <FormInput
            type='text'
            name='name'
            {...register('name', {
              required: {
                value: true,
                message: 'Please enter your name.',
              },
              maxLength: {
                value: 30,
                message: 'Please enter 30 characters or fewer.',
              },
            })}
            placeholder='  Name'
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

          <FormInput
            type='email'
            name='email'
            {...register('email', {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
            placeholder='  Enter your email'
          />
          {errors.email && (
            <ErrorMessage>Please enter a valid email address.</ErrorMessage>
          )}

          <FormInput
            type='text'
            name='subject'
            {...register('subject', {
              required: {
                value: true,
                message: 'Please enter a subject.',
              },
              maxLength: {
                value: 75,
                message: 'Subject cannot exceed 75 characters.',
              },
            })}
            placeholder='  Subject'
          />
          {errors.subject && (
            <ErrorMessage>{errors.subject.message}</ErrorMessage>
          )}

          <FormMessage
            row={3}
            name='message'
            {...register('message', {
              required: true,
            })}
            placeholder='  Message'
          />
          {errors.message && (
            <ErrorMessage>Please enter your message.</ErrorMessage>
          )}

          <FormBtn type='submit'>Send</FormBtn>
        </form>
      </FormContent>
      <ToastContainer />
    </MainContainer>
  );
};

export default Contact;
