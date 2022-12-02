import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Select from '../Select';

const DistancePanel: FC = () => {

  const [pinObjects, setPinObjects] = useState<number[]>([]);
  const [firstObject, setFirstObject] = useState<number | 'None'>('None');
  const [secondObject, setSecondObject] = useState<number | 'None'>('None');
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  const { Map } = useSelector((state: RootState) => ({
    Map: state.Map.map,
  }));

  useEffect(() => { setInterval(() => setPinObjects(Map.getPinObjects()), 20) });

  const handleFirstObject = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    setFirstObject(value === 'None' ? value : Number(value));
  };

  useEffect(() => {
    setButtonDisabled(firstObject === 'None' || secondObject === 'None');
  }, [firstObject, secondObject])

  const handleSecondObject = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    setSecondObject(value === 'None' ? value : Number(value));
  };

  const drawDistance = () => {
    Map.pushDistance([firstObject as number, secondObject as number]);
    setFirstObject('None');
    setSecondObject('None');
  };

  return (
    <div className='sidebar-panel'>
      <h2>Оценка расстояния</h2>
      <div className='selector'>
        <span>Объект 1</span>
        <Select data={pinObjects.filter(pin => pin !== secondObject)} value={firstObject} noneField='-' onChange={handleFirstObject} />
      </div>
      <div className='selector'>
        <span>Объект 2</span>
        <Select data={pinObjects.filter(pin => pin !== firstObject)} value={secondObject} noneField='-' onChange={handleSecondObject} />
      </div>
      <div className='buttons'>
        <button className='primary-btn sidebar-btn' disabled={buttonDisabled} onClick={drawDistance}>построить</button>
      </div>
    </div>
  );
};

export default DistancePanel;