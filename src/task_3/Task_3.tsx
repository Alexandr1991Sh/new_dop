import {ChangeEvent, useState} from 'react';
import { SlowComponent } from './slowComponent/SlowComponent';


//find the problem and fix it as part of composition optimization, memo, children
//находим проблему и устраняем ее в рамках оптимизации композиции, памятка, дочерние элементы

export const Task_3 = () => {
  // const [value, setValue] = useState('');

  // const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

  return (
    <div>
      <div>Lags when change value</div>
      {/*<input type="text" value={value} onChange={onChange} />*/}
        <InputComponent/>
      <SlowComponent />
    </div>
  );
};

const InputComponent = ()=>{
    const [value, setValue] = useState('');
    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);
    return (
        <input type="text" value={value} onChange={onChange} />
    )
}           // создал компонент 'InputComponent' перенес в неё input and useState
