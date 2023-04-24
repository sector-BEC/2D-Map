import { FC, MouseEvent, useState } from 'react';
import { HexColorInput, HexColorPicker } from 'react-colorful';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserExtentColorPicker } from '../../store/mapSlice';
import { RootState } from '../../store/store';
import { InstrumentsButton } from '../../StyledButton';

interface Props {
  divID: string;
}

const ColorPickerModal: FC<Props> = ({ divID }) => {

  const dispath = useDispatch();

  const { featureId, Map } = useSelector((state: RootState) => ({
    featureId: state.Map.userExtentColorPickers[divID],
    Map: state.Map.maps[divID],
  }));
  
  const [color, setColor] = useState<string>('#000000');

  const handleColor = (event: string) => setColor(event.toUpperCase());

  const stopPropagation = (event: MouseEvent) => event.stopPropagation();

  const applyColor = (event: MouseEvent) => {
    event.stopPropagation();
    dispath(setUserExtentColorPicker({
      mapId: divID,
      featureId: '',
    }));

    Map.changeUserExtentColor(featureId, color);
  };

  const cancelColorPeak = () => {
    dispath(setUserExtentColorPicker({
      mapId: divID,
      featureId: '',
    }));
  };

  return (
    <>
      {
        createPortal(
          <div 
            className='color-picker'
            style={{
              display: `${featureId ? 'flex' : 'none'}`
            }}
            onClick={stopPropagation}
            onDrag={stopPropagation}
          >
            <HexColorPicker color={color} onChange={handleColor} />
            <HexColorInput color={color} onChange={handleColor} />

            <div className='buttons'>
              <InstrumentsButton onClick={applyColor}>Применить</InstrumentsButton>
              <InstrumentsButton onClick={cancelColorPeak}>Отмена</InstrumentsButton>
            </div>
          </div>, document.getElementById(divID)?.querySelector('.ol-viewport') as HTMLDivElement)
      }
    </>
  );
};

export default ColorPickerModal;