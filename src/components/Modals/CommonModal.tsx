import { FC, MouseEvent, useState } from 'react';
import ModalOverlay from './ModalOverlay';
import ModelCreation from './ModelCreation';
import ModelSetting from './ModelSetting';
import close from '../../assets/close.png';
import CommonTooltip from '../../CommonTooltip';

interface Props {
  handleClose: () => void;
}

type ModalType = 'model-creation' | 'model-settings';

const CommonModal: FC<Props> = ({ handleClose }) => {

  const [currentModal, setCurrentModal] = useState<ModalType>('model-settings');

  const stopPropagation = (event: MouseEvent) => event.stopPropagation();

  const handleModelCreation = () => setCurrentModal('model-creation');
  const handleModelSettings = () => setCurrentModal('model-settings');

  return (
    <ModalOverlay handleClose={handleClose}>
      <div className='modal' onClick={stopPropagation}>
        <div className='modal-tabbar'>
          <CommonTooltip
            title='Инструмент для создания пользовательской иконки, отображающейся с реальными размерами на карте.'
          >
            <button style={ currentModal === 'model-creation' ? { borderBottom: '1px solid #FFF' } : {}} onClick={handleModelCreation}>СОЗДАНИЕ ИКОНКИ</button>
          </CommonTooltip>
          <CommonTooltip
            title='Инструмент установки стилей для объектов определённого типа, отображающихся на карте.'
          >
            <button style={ currentModal === 'model-settings' ? { borderBottom: '1px solid #FFF' } : {}} onClick={handleModelSettings}>СООТНОШЕНИЕ ТИПОВ</button>
          </CommonTooltip>
        </div>
        <button className='primary-btn close-btn' onClick={handleClose}>
          <img src={close} width={22} height={22} />
        </button>
        { currentModal === 'model-creation' && <ModelCreation />}
        { currentModal === 'model-settings' && <ModelSetting /> }
      </div>
    </ModalOverlay>
  );
};

export default CommonModal;