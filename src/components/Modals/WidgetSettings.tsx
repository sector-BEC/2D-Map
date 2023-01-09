import { FC, MouseEvent, useState } from 'react';
import win1 from '../../assets/win1.svg';
import win2v from '../../assets/win2v.svg';
import win2h from '../../assets/win2h.svg';
import win3t from '../../assets/win3t.svg';
import win3b from '../../assets/win3b.svg';
import win3l from '../../assets/win3l.svg';
import win3r from '../../assets/win3r.svg';
import win4 from '../../assets/win4.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setLayout, WidgetsLayout } from '../../store/widgetSettingsSlice';

interface Props {
  handleClose: () => void;
}

const WidgetSettings: FC<Props> = ({ handleClose }) => {

  const widgetsLayout = useSelector((state: RootState) => state.widgetSettings.widgetsLayout);

  const dispatch = useDispatch();

  const handleWidgetsLayout = (event: MouseEvent<HTMLButtonElement>) => {
    dispatch(setLayout(event.currentTarget.id.slice(1) as WidgetsLayout));
    handleClose();
  };

  return (
    <div className='mini-modal'>
        <button id='w1' onClick={handleWidgetsLayout}>
          <img src={win1}  />
        </button>
        <button id='w2v' onClick={handleWidgetsLayout}>
          <img src={win2v}  />
        </button>
        <button id='w2h' onClick={handleWidgetsLayout}>
          <img src={win2h}  />
        </button>
        <button id='w3t' onClick={handleWidgetsLayout}>
          <img src={win3t}  />
        </button>
        <button id='w3b' onClick={handleWidgetsLayout}>
          <img src={win3b} />
        </button>
        <button id='w3l' onClick={handleWidgetsLayout}>
          <img src={win3l}  />
        </button>
        <button id='w3r' onClick={handleWidgetsLayout}>
          <img src={win3r}  />
        </button>
        <button id='w4' onClick={handleWidgetsLayout}>
          <img src={win4} />
        </button>
      </div>
  );
};

export default WidgetSettings;