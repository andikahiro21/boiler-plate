import React from 'react';
import { FormattedMessage } from 'react-intl';

import style from './style.module.scss';

const SideBar = ({ activeComponent }) => {
  const isActive = (stepNumber) => {
    const componentStepMapping = {
      PersonalInfo: '1',
      Plan: '2',
      AddOns: '3',
      Summary: '4',
    };
    return componentStepMapping[activeComponent] === stepNumber;
  };
  return (
    <div className={style.sidebar}>
      <div className={style.containerTitle}>
        <div className={isActive('1') ? `${style.number} ${style.active}` : style.number}>1</div>
        <div className={style.title}>
          <div className={style.headerTitle}>
            <FormattedMessage id="app_step1" />
          </div>
          <div className={style.bodyTitle}>
            <FormattedMessage id="app_side_desc1" />
          </div>
        </div>
      </div>
      <div className={style.containerTitle}>
      <div className={isActive('2') ? `${style.number} ${style.active}` : style.number}>2</div>
        <div className={style.title}>
          <div className={style.headerTitle}>
            <FormattedMessage id="app_step2" />
          </div>
          <div className={style.bodyTitle}>
            <FormattedMessage id="app_side_desc2" />
          </div>
        </div>
      </div>
      <div className={style.containerTitle}>
      <div className={isActive('3') ? `${style.number} ${style.active}` : style.number}>3</div>
        <div className={style.title}>
          <div className={style.headerTitle}>
            <FormattedMessage id="app_step3" />
          </div>
          <div className={style.bodyTitle}>
            <FormattedMessage id="app_side_desc3" />
          </div>
        </div>
      </div>
      <div className={style.containerTitle}>
      <div className={isActive('4') ? `${style.number} ${style.active}` : style.number}>4</div>
        <div className={style.title}>
          <div className={style.headerTitle}>
            <FormattedMessage id="app_step4" />
          </div>
          <div className={style.bodyTitle}>
            <FormattedMessage id="app_side_desc4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
