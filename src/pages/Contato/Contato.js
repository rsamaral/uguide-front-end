import React from "react";
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import { Header, MainContainer, FormContent, FormInput, FormMessage, FormBtn, ErrorMessage } from "../Contato/styles";

export const Contato = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const toastifySuccess = () => {
    toast('O seu e-mail de contato foi enviado com sucesso. Logo mais entraremos em contato com você. Equipe UGuide.', {
      position: 'top-center',
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,  
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };
  
  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;

    try{
      const templateParams = {
        name,
        email, 
        subject,
        message
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
      toastifySuccess();
    } catch(e) {
      console.log(e);
    }
    
    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Subject: ', subject);
    console.log('Message: ', message);
  };
  return (
    <MainContainer>
      <Header>
        Contato
      </Header>
      <FormContent>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <FormInput
            type='text'
            name='name'
            {...register('name', {
              required: { value: true, message: 'Por favor, insira o seu nome.'},
              maxLength: {
                value: 30,
                message: 'Por favor, insira 30 caracteres ou menos.'
              }
            })}
            placeholder='Nome' 
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
            <FormInput
              type='email'
              name='email'
              {...register('email', {
                required: true,
                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
              })}
              placeholder='Informe o seu e-mail.'
            />
            {errors.email && (
              <ErrorMessage>Por favor, insira um endereço de e-mail válido.</ErrorMessage>
            )}
            <FormInput
              type='text'
              name='subject'
              {...register('subject', {
                required: { value: true, message: 'Por favor, insira o assunto.'},
                maxLength: {
                  value: 75,
                  message: 'Assunto não pode exceder 75 caracteres.'
                }
              })}
              placeholder='Assunto'
            />
            {errors.subject && (
              <ErrorMessage>{errors.subject.message}</ErrorMessage>
            )}
            <FormMessage
              row={3}
              name='message'
              {...register('message', {
                required: true
              })}
              placeholder='Mensagem'
            />
            {errors.message && <ErrorMessage>Por favor, insira a mensagem.</ErrorMessage>}
            <FormBtn type='submit'>
              Enviar
            </FormBtn>
        </form>
      </FormContent>
      <ToastContainer  />
    </MainContainer>
  )
}

export default Contato