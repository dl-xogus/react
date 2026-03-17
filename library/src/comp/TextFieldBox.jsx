import TextField from '@mui/material/TextField';
import { useState } from 'react';

function TextFieldBox({ label, save }) {
  let [text, setText] = useState('');

  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      value={text}
      onChange={e => {
        setText(e.target.value);
        save(label, e.target.value);  // text의 값은 재 렌더링이 발생해야 변경되기 때문에 한박자 늦게 적용됨 그래서 e.target.value를 사용하면 실시간 적용 됨
      }}

      // multiline
      // error={false}
      // helperText="형식에 맞춰 입력하세요!"
      // disabled={false}
      // type="password"
      // type="search"
    />
  );
}

export default TextFieldBox;