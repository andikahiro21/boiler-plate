import React from 'react';
import { FormattedMessage } from 'react-intl';

import style from './style.module.scss';

const Button = ({ goToNext }) => {
  return (
    <button onClick={goToNext}>
      <FormattedMessage id="app_button_next" />
    </button>
  );
};

export default Button;
