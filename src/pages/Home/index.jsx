import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { ping } from '@containers/App/actions';

import SideBar from '@components/Sidebar';

import style from './style.module.scss';
import PersonalInfo from '@components/PersonalInfo';
import Plan from '@components/Plan';
import AddOns from '@components/AddOns';
import Summary from '@components/Summary';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ping());
  }, [dispatch]);
  const [activeComponent, setActiveComponent] = useState('PersonalInfo');

  const goToNext = () => {
    const nextComponent = {
      PersonalInfo: 'Plan',
      Plan: 'AddOns',
      AddOns: 'Summary',
    };

    setActiveComponent(nextComponent[activeComponent]);
  };
  const goToPlan = () => {
    setActiveComponent('Plan');
  };
  const goToPrev = () => {
    const prevComponent = {
      Plan: 'PersonalInfo',
      AddOns: 'Plan',
      Summary: 'AddOns',
    };

    setActiveComponent(prevComponent[activeComponent]);
  };
  const renderComponent = () => {
    switch (activeComponent) {
      case 'PersonalInfo':
        return <PersonalInfo goToNext={() => setActiveComponent('Plan')} />;
      case 'Plan':
        return (
          <Plan goToNext={() => setActiveComponent('AddOns')} goToPrev={() => setActiveComponent('PersonalInfo')} />
        );
      case 'AddOns':
        return <AddOns goToNext={() => setActiveComponent('Summary')} goToPrev={() => setActiveComponent('Plan')} />;
      case 'Summary':
        return <Summary goToPlan={goToPlan} />;
      default:
        return <PersonalInfo goToNext={() => setActiveComponent('Plan')} />;
    }
  };

  return (
    <div className={style.home}>
      <div className={style.cardContainer}>
        <div className={style.card}>
          <SideBar activeComponent={activeComponent} />
          <div className={style.content}>{renderComponent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
