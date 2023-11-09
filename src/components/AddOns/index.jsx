import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage, useIntl } from 'react-intl';
import Checkbox from '@mui/material/Checkbox';

import { selectPayment } from '@pages/Home/selectors';

import Button from '@components/Button';

import { setAddOns } from '@pages/Home/actions';

import style from './style.module.scss';

const AddOns = ({ goToNext, goToPrev }) => {
  const [card1Checked, setCard1Checked] = useState(false);
  const [card2Checked, setCard2Checked] = useState(false);
  const [card3Checked, setCard3Checked] = useState(false);
  const [isYearly, setIsYearly] = useState(false);
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const dispatch = useDispatch();

  const payment = useSelector(selectPayment);
  const intl = useIntl();

  useEffect(() => {
    if (payment.plan.date == 'Yearly') {
      setIsYearly(true);
    }
  }, []);
  const updateSelectedAddOns = (cardNumber, isChecked) => {
    const addOnName = intl.formatMessage({ id: `app_add_ons_card${cardNumber}_title` });
    const addOnPriceId = isYearly ? `app_add_ons_card${cardNumber}_priceyr` : `app_add_ons_card${cardNumber}_price`;
    const addOnPrice = intl.formatMessage({ id: addOnPriceId });

    if (isChecked) {
      setSelectedAddOns((prevAddOns) => [...prevAddOns, { name: addOnName, price: addOnPrice }]);
    } else {
      setSelectedAddOns((prevAddOns) => prevAddOns.filter((addOn) => addOn.name !== addOnName));
    }
  };
  useEffect(() => {
    if (payment.plan.date === 'Yearly') {
      setIsYearly(true);
    }
  }, [payment.plan.date]);

  useEffect(() => {
    updateSelectedAddOns(1, card1Checked);
  }, [card1Checked]);

  useEffect(() => {
    updateSelectedAddOns(2, card2Checked);
  }, [card2Checked]);

  useEffect(() => {
    updateSelectedAddOns(3, card3Checked);
  }, [card3Checked]);

  const handleAddClick = (e) => {
    e.preventDefault();
    dispatch(setAddOns(selectedAddOns));
    goToNext();
  };
  return (
    <div className={style.addonsContainer}>
      <div className={style.topContainer}>
        <div className={style.container}>
          <div className={style.title}>
            <FormattedMessage id="app_add_ons_title" />
          </div>
          <div className={style.desc}>
            <FormattedMessage id="app_add_ons_description" />
          </div>
          <div className={style.cardContainer}>
            <div className={style.card} onClick={() => setCard1Checked(!card1Checked)}>
              <div className={style.leftContent}>
                <Checkbox checked={card1Checked} />
                <div className={style.titleContainer}>
                  <div className={style.titleCard}>
                    <FormattedMessage id="app_add_ons_card1_title" />
                  </div>
                  <div className={style.descCard}>
                    <FormattedMessage id="app_add_ons_card1_description" />
                  </div>
                </div>
              </div>
              <div className={style.rightContent}>
                <div className={style.price}>
                  <FormattedMessage id={isYearly ? 'app_add_ons_card1_priceyr' : 'app_add_ons_card1_price'} />
                </div>
              </div>
            </div>
            <div className={style.card} onClick={() => setCard2Checked(!card2Checked)}>
              <div className={style.leftContent}>
                <Checkbox checked={card2Checked} />
                <div className={style.titleContainer}>
                  <div className={style.titleCard}>
                    <FormattedMessage id="app_add_ons_card2_title" />
                  </div>
                  <div className={style.descCard}>
                    <FormattedMessage id="app_add_ons_card2_description" />
                  </div>
                </div>
              </div>
              <div className={style.rightContent}>
                <div className={style.price}>
                  <FormattedMessage id={isYearly ? 'app_add_ons_card2_priceyr' : 'app_add_ons_card2_price'} />
                </div>
              </div>
            </div>
            <div className={style.card} onClick={() => setCard3Checked(!card3Checked)}>
              <div className={style.leftContent}>
                <Checkbox checked={card3Checked} />
                <div className={style.titleContainer}>
                  <div className={style.titleCard}>
                    <FormattedMessage id="app_add_ons_card3_title" />
                  </div>
                  <div className={style.descCard}>
                    <FormattedMessage id="app_add_ons_card3_description" />
                  </div>
                </div>
              </div>
              <div className={style.rightContent}>
                <div className={style.price}>
                  <FormattedMessage id={isYearly ? 'app_add_ons_card3_priceyr' : 'app_add_ons_card3_price'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.bottomContainer}>
        <div className={style.back} onClick={goToPrev}>
          <FormattedMessage id="app_button_back" />
        </div>
        <button onClick={handleAddClick}>
          <FormattedMessage id="app_button_next" />
        </button>
      </div>
    </div>
  );
};

export default AddOns;
