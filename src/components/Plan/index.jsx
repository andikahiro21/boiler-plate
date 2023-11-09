import { React, useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';

import Button from '@components/Button';

import ArcadeIcon from '@static/images/icon-arcade.svg';
import AdvancedIcon from '@static/images/icon-advanced.svg';
import ProIcon from '@static/images/icon-pro.svg';

import style from './style.module.scss';
import { setPlan } from '@pages/Home/actions';

const Plan = ({ goToNext, goToPrev }) => {
  const [isYearly, setIsYearly] = useState(false);
  const [cardPicker, setCardPicker] = useState('arcade');
  const [selectPlan, setSelectPlan] = useState({});

  const dispatch = useDispatch();
  const handlePlanSelection = (planName) => {
    const isYearlyPricing = isYearly;
    let yearly = '';

    if (isYearlyPricing) {
      yearly = 'Yearly';
    } else {
      yearly = 'Monthly';
    }
    let priceCategory = '';
    switch (planName) {
      case 'Arcade':
        priceCategory = isYearlyPricing ? '$90/yr' : '$9/mo';
        break;
      case 'Advanced':
        priceCategory = isYearlyPricing ? '$120/yr' : '$12/mo';
        break;
      case 'Pro':
        priceCategory = isYearlyPricing ? '$150/yr' : '$15/mo';
        break;
      default:
        break;
    }
    const selectedPlan = {
      name: planName,
      price: priceCategory,
      date: yearly,
    };
    setSelectPlan(selectedPlan);
  };

  const handlePlanClick = (e) => {
    e.preventDefault();
    dispatch(setPlan(selectPlan));
    goToNext();
  };

  return (
    <div className={style.planContainer}>
      <div className={style.topContainer}>
        <div className={style.container}>
          <div className={style.title}>
            <FormattedMessage id="app_plan_title" />
          </div>
          <div className={style.desc}>
            <FormattedMessage id="app_plan_description" />
          </div>
          <div className={style.cardContainer}>
            <div
              className={cardPicker == 'arcade' ? `${style.card} ${style.card_active}` : style.card}
              onClick={() => {
                setCardPicker('arcade');
                handlePlanSelection('Arcade');
              }}
            >
              <img src={ArcadeIcon} alt="icon" />
              <div className={style.textCard}>
                <div className={style.titleCard}>
                  <FormattedMessage id="app_plan_card1_title" />
                </div>
                <div className={style.priceCard}>
                  <FormattedMessage id={isYearly ? 'app_plan_card1_price_yr' : 'app_plan_card1_price_mo'} />
                </div>
              </div>
            </div>
            <div
              className={cardPicker == 'advanced' ? `${style.card} ${style.card_active}` : style.card}
              onClick={() => {
                setCardPicker('advanced');
                handlePlanSelection('Advanced');
              }}
            >
              <img src={AdvancedIcon} alt="icon" />
              <div className={style.textCard}>
                <div className={style.titleCard}>
                  <FormattedMessage id="app_plan_card2_title" />
                </div>
                <div className={style.priceCard}>
                  <FormattedMessage id={isYearly ? 'app_plan_card2_price_yr' : 'app_plan_card2_price_mo'} />
                </div>
              </div>
            </div>
            <div
              className={cardPicker == 'pro' ? `${style.card} ${style.card_active}` : style.card}
              onClick={() => {
                setCardPicker('pro');
                handlePlanSelection('Pro');
              }}
            >
              <img src={ProIcon} alt="icon" />
              <div className={style.textCard}>
                <div className={style.titleCard}>
                  <FormattedMessage id="app_plan_card3_title" />
                </div>
                <div className={style.priceCard}>
                  <FormattedMessage id={isYearly ? 'app_plan_card3_price_yr' : 'app_plan_card3_price_mo'} />
                </div>
              </div>
            </div>
          </div>
          <div className={style.switcherContainer}>
            <div className={isYearly ? style.monthlyText : `${style.monthlyText} ${style.monthlyText_active}`}>
              <FormattedMessage id="app_plan_switch_mo" />
            </div>
            <div className={style.switchToggle}>
              <input id="monthly" name="toggle" type="radio" checked={!isYearly} onChange={() => setIsYearly(false)} />
              <label for="monthly"></label>

              <input id="yearly" name="toggle" type="radio" checked={isYearly} onChange={() => setIsYearly(true)} />
              <label for="yearly"></label>
            </div>
            <div className={!isYearly ? style.yearlyText : `${style.yearlyText} ${style.yearlyText_active}`}>
              <FormattedMessage id="app_plan_switch_yr" />
            </div>
          </div>
        </div>
      </div>
      <div className={style.bottomContainer}>
        <div className={style.back} onClick={goToPrev}>
          <FormattedMessage id="app_button_back" />
        </div>
        <button onClick={handlePlanClick}>
          <FormattedMessage id="app_button_next" />
        </button>
      </div>
    </div>
  );
};

export default Plan;
