import { React, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';

import { selectPayment } from '@pages/Home/selectors';
import { setUser } from '@pages/Home/actions';

import style from './style.module.scss';

const PersonalInfo = ({ goToNext }) => {
  const dispatch = useDispatch();
  const payment = useSelector(selectPayment);
  const [userInfo, setUserInfo] = useState({
    name: payment?.user?.name || '',
    email: payment?.user?.email || '',
    phone: payment?.user?.phone || '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = userInfo.name ? '' : 'Name is required';
    tempErrors.email = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userInfo.email) ? '' : 'Email is not valid';
    tempErrors.phone = userInfo.phone.length > 9 ? '' : 'Phone number is not valid';
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(setUser(userInfo));
      goToNext();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className={style.personalContainer}>
      <div className={style.topContainer}>
        <div className={style.container}>
          <div className={style.title}>
            <FormattedMessage id="app_personal_title" />
          </div>
          <div className={style.desc}>
            <FormattedMessage id="app_personal_description" />
          </div>
          <div className={style.formContainer}>
            <div className={style.label}>
              <FormattedMessage id="app_personal_label_name" />
            </div>
            <input
              type="text"
              name="name"
              className={style.textField}
              id="name"
              placeholder="John Doe"
              value={userInfo.name}
              onChange={handleChange}
            />
            {errors.name && <div className={style.error}>{errors.name}</div>}
            <div className={style.label}>
              <FormattedMessage id="app_personal_label_email" />
            </div>
            <input
              type="text"
              name="email"
              className={style.textField}
              id="email"
              placeholder="johndoe@gmail.com"
              value={userInfo.email}
              onChange={handleChange}
            />
            {errors.email && <div className={style.error}>{errors.email}</div>}
            <div className={style.label}>
              <FormattedMessage id="app_personal_label_phone" />
            </div>
            <input
              type="number"
              name="phone"
              className={style.textField}
              id="phone"
              placeholder="+62 81x xxxx xxxx"
              value={userInfo.phone}
              onChange={handleChange}
            />
            {errors.phone && <div className={style.error}>{errors.phone}</div>}
          </div>
        </div>
      </div>
      <div className={style.bottomContainer}>
        <button onClick={handleSubmit}>
          <FormattedMessage id="app_button_next" />
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
