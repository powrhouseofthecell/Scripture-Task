import { useState } from 'react';

const App = () => {
  const [data, setData] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();
    const blog = 'Zuhaib Nazir Shah';

    await fetch('http://localhost:4000/sendData', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log('new blog added');
      console.log(blog);
    });
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
