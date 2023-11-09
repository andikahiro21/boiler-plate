import React from 'react';
import style from './style.module.scss';
import { FormattedMessage } from 'react-intl';

const Summary = ({ goToPlan }) => {
  return (
    <div className={style.summaryContainer}>
      <div className={style.topContainer}>
        <div className={style.container}>
          <div className={style.title}>
            <FormattedMessage id="app_summary_title" />
          </div>
          <div className={style.desc}>
            <FormattedMessage id="app_summary_description" />
          </div>
          <div className={style.cardContainer}>
            <div className={style.card}>
              <div className={style.plan}>
                <div className={style.planCont}>
                  <div className={style.planTitleCont}>
                    <div className={style.planTitle}>{/* <FormattedMessage id="app_summary_plan_text" /> */}</div>
                    <a href="#" onClick={goToPlan}>
                      <div className={style.planChange}>
                        <FormattedMessage id="app_summary_plan_change" />
                      </div>
                    </a>
                  </div>
                  <div className={style.planPrice}>
                    <FormattedMessage id="app_summary_plan_price" />
                  </div>
                </div>

                <div className={style.lineCont}>
                  <div className={style.line}></div>
                </div>
              </div>
              <div className={style.addOns}>
                <div className={style.addOns1}>
                  <div className={style.titleAddOns}>
                    <FormattedMessage id="app_summary_add_ons_service1" />
                  </div>
                  <div className={style.priceAddOns}>
                    <FormattedMessage id="app_summary_add_ons_price1" />
                  </div>
                </div>
                <div className={style.addOns2}>
                  <div className={style.titleAddOns}>
                    <FormattedMessage id="app_summary_add_ons_service2" />
                  </div>
                  <div className={style.priceAddOns}>
                    <FormattedMessage id="app_summary_add_ons_price2" />
                  </div>
                </div>
              </div>
            </div>
            <div className={style.total}>
              <div className={style.totalText}>
                <FormattedMessage id="app_summary_total" />
              </div>
              <div className={style.totalPrice}>
                <FormattedMessage id="app_summary_total_price" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.bottomContainer}>
        <button>
          <FormattedMessage id="app_button_confirm" />
        </button>
      </div>
    </div>
  );
};

export default Summary;
