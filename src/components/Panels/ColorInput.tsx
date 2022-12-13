import { ChangeEvent, FC, useEffect, useState } from 'react';

interface Props {
  sendColor: (color: string) => void;
}

const ColorInput: FC<Props> = ({ sendColor }) => {

  const [colorInput, setColorInput] = useState<string>('');
  const [colorExample, setColorExample] = useState<string>('#000');

  useEffect(() => {
    sendColor(colorExample);
  }, [colorExample]);

  const handleColor = (event: ChangeEvent<HTMLInputElement>) => {
    const color = event.target.value;

    setColorInput(color);

    if (color.length && color[0] !== '#') {
      setColorExample('#000');
      return;
    }

    if (color.length !== 4 && color.length !== 7) {
      setColorExample('#000');
      return;
    }

    for (let char of color.slice(1)) {
      const code = char.charCodeAt(0);

      if (!((code >= 48 && code <= 57) || (code >= 65 && code <= 70))) {
        setColorExample('#000');
        return;
      }
    }

    setColorExample(color);
  };

  return (
    <div className='color-input'>
      <span>Цвет (RGB)</span>
      <input type='text' value={colorInput} onChange={handleColor} maxLength={7} placeholder={'#цвет'} />
      <div className='color-example' style={{ backgroundColor: colorExample }}></div>
    </div>
  );
};

export default ColorInput;