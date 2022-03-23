import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:4000/sendData', {
        value: data,
      })
      .then((resp) => console.log(resp.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>This is the form</h1>
      <form>
        <input
          type='text'
          required
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <input type='submit' value='Save' onClick={handleClick} />
      </form>
    </div>
  );
};

export default App;
