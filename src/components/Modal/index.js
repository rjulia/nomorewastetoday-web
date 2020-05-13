import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useMutation } from '@apollo/react-hooks';
import { useForm, Controller } from 'react-hook-form';
import { BsX } from 'react-icons/bs';
import { Input, InputLabel, FormControl, FormHelperText } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Title, Paragraph, Button } from '..';
import { ADD_EMAIL } from '../../services/apollo/mutations';
import Img from '../../assets/images/modal-subscribe.jpg';
import './Modal.scss';
import { withCookies, useCookies } from 'react-cookie';
import moment from 'moment';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(255,255,255,.80)',
    zIndex: 1000000,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    backgroundImage: `url(${Img})`,
    backgroundRepeat: 'no-repeat',
    backgroundOrigin: 'content-box',
    borderRadius: '20px',
    backgroundPosition: '50% -450%',
    height: 490,
  },
};

function ModalNMW() {
  const { t } = useTranslation();
  const { control, handleSubmit, errors } = useForm();
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [addEmail, { data }] = useMutation(ADD_EMAIL);
  const [message, setMessage] = useState([]);
  const [cookies, setCookie] = useCookies(['cookie-subcription']);
  const noCookieSubcription = _.isEmpty(_.get(cookies, 'cookie-subcription'));

  function onSubmit(data) {
    console.log(data.email_address);
    const input = {
      email_address: data.email_address,
      status: 'pending',
    };
    addEmail({
      variables: { input },
    })
      .then(({ data }) => {
        if (data.addEmailCampaing.status === 'error') {
          const message = JSON.parse(data.addEmailCampaing.res);
          const result = [
            {
              message: message.title,
              status: data.addEmailCampaing.status,
            },
          ];
          setMessage(result);
        } else {
          setMessage([
            {
              message: `Please check you email ${data.addEmailCampaing.res} for confirmation`,
              status: data.addEmailCampaing.status,
            },
          ]);
          setTimeout(() => closeModal('done'), 1000);
          const expires = moment().add(365, 'day').toDate();
          setCookie('cookie-subcription', 'agree', {
            path: '/',
            expires,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (noCookieSubcription) {
      console.log('hello');
      setModalIsOpen(true);
    } else {
      setModalIsOpen(false);
      console.log('bye');
    }
    console.log(cookies);
  }, []);

  function closeModal(done) {
    setModalIsOpen(false);
    if (!done) {
      const expires = moment().add(1, 'day').toDate();
      setCookie('cookie-subcription', 'agree', {
        path: '/',
        expires,
      });
    }
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <div className={'modal-subscriber__content'}>
        <span className={'modal-subscriber__arrow'} onClick={closeModal}>
          <BsX size={40} />
        </span>
        <Title variable={'modal-subscriber__title'} tag={'h2'} text={'Join Us'} />
        <Paragraph
          variable={'modal-subscriber__text'}
          text={'Subscripe our newslatter and get notifications to stya update'}
        />
        <form className="form-contact__container" onSubmit={handleSubmit(onSubmit)}>
          <FormControl className={'form__control'} error={Boolean(errors.name)}>
            <InputLabel htmlFor="name">{t('contact.form.email')} *</InputLabel>
            <Controller
              as={Input}
              name="email_address"
              control={control}
              defaultValue=""
              rules={{ required: t('contact.form.required') }}
            />
            <FormHelperText>{errors.name && errors.name.message}</FormHelperText>
          </FormControl>
          <div className="modal-subscriber__box--btn">
            <button className="modal-subscriber__btn" type="submit">
              <span>{t('btns.subscribe')}</span>
            </button>
          </div>
        </form>
        {message.length > 0 && (
          <span
            className={
              message[0]['status'] === 'error'
                ? 'error modal-subscriber__message'
                : 'modal-subscriber__message'
            }
          >
            {message[0]['message']}
          </span>
        )}
      </div>
    </Modal>
  );
}

export default withCookies(ModalNMW);
