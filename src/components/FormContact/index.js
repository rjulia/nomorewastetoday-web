import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Input,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
  TextField,
  FormHelperText,
} from '@material-ui/core';
import { Paragraph } from '../index';
import './FormContact.scss';
import { useTranslation } from 'react-i18next';

const FormContact = () => {
  const { t } = useTranslation();
  const [message, setMessage] = useState('');
  function sendFeedback(templateId, variables) {
    window.emailjs
      .send('gmail', templateId, variables)
      .then((res) => {
        setMessage(t('contact.message.success'));
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) => {
        setMessage(t('contact.message.error'));
        console.error(' that occured:', err.text);
      });
  }

  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const templateId = 'template_e2PZkKnU';
    const { name, company, email, phone, type, message } = data;
    sendFeedback(templateId, {
      reply_to: 'reply_to_value',
      from_name: name,
      company_name: company,
      email,
      phone,
      type,
      message_html: message,
    });
  };

  return (
    <form className="form-contact__container" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-md-4">
          <FormControl className={'form__control'} error={Boolean(errors.name)}>
            <InputLabel htmlFor="name">{t('contact.form.name')} *</InputLabel>
            <Controller
              as={Input}
              name="name"
              control={control}
              defaultValue=""
              rules={{ required: t('contact.form.required') }}
            />
            <FormHelperText>{errors.name && errors.name.message}</FormHelperText>
          </FormControl>
        </div>
        <div className="col-md-4">
          <FormControl className={'form__control'}>
            <InputLabel htmlFor="company">{t('contact.form.company')}</InputLabel>
            <Controller as={Input} name="company" control={control} defaultValue="" />
          </FormControl>
        </div>
        <div className="col-md-4">
          <FormControl className={'form__control'} error={Boolean(errors.email)}>
            <InputLabel htmlFor="email">{t('contact.form.email')} *</InputLabel>
            <Controller
              as={Input}
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: t('contact.form.required') }}
            />
            <FormHelperText>{errors.email && errors.email.message}</FormHelperText>
          </FormControl>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <FormControl className={'form__control'}>
            <InputLabel htmlFor="age-native-simple">{t('contact.form.tel')}</InputLabel>
            <Controller as={Input} name="phone" control={control} defaultValue="" />
          </FormControl>
        </div>
        <div className="col-md-4">
          <FormControl className={'form__control'}>
            <InputLabel htmlFor="age-native-simple">{t('contact.form.type')} </InputLabel>
            <Controller
              as={
                <Select>
                  <MenuItem value="particular">{t('contact.form.individual')}</MenuItem>
                  <MenuItem value="company">{t('contact.form.company')}</MenuItem>
                  <MenuItem value="ong">{t('contact.form.ngo')}</MenuItem>
                  <MenuItem value="shop">{t('contact.form.shop')}</MenuItem>
                </Select>
              }
              name="type"
              control={control}
              defaultValue="particular"
            />
          </FormControl>
        </div>
        <div className="col-md-4"></div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <FormControl className={'form__control text-area'} error={Boolean(errors.message)}>
            <Controller
              as={
                <TextField
                  label={t('contact.form.message')}
                  id="multiline"
                  multiline
                  rowsMax="4"
                  placeholder={t('contact.form.message')}
                />
              }
              name="message"
              control={control}
              defaultValue=""
              rules={{ required: t('contact.form.required') }}
            />
            <FormHelperText>{errors.message && errors.message.message}</FormHelperText>
          </FormControl>
        </div>
        <div className="col-md-4"></div>
      </div>

      <Paragraph text={t('contact.form.required')} />
      <button className="btn__submint" type="submit">
        {t('contact.form.submit')}
      </button>
      {message && <span className="form-contact__message">{message}</span>}
    </form>
  );
};

export default FormContact;
