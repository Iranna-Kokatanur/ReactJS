import './App.css';
import Header from './components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  /**
   *  https://mui.com
   *  mui material:
   *  npm install @mui/material @emotion/react @emotion/styled
   *
   * icons:
   * npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
   *
   * mui - core:
   * npm install @mui/material @emotion/react @emotion/styled
   */

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState([]);

  //Using ... operator to keep the previous data
  const addData = () => {
    setData([...data, { name, email }]);
    setName('');
    setEmail('');
  };

  const remove = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  return (
    <div className='App'>
      <Header />
      <div className='form'>
        <Stack spacing={2} direction='row'>
          <TextField
            value={name}
            id='outlined-basic'
            label='name'
            variant='standard'
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            value={email}
            id='outlined-basic'
            label='email'
            variant='standard'
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button variant='contained' color='success' onClick={addData}>
            <AddIcon />
          </Button>
        </Stack>
      </div>
      <div className='data'>
        <div className='data_val'>
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map((element, index) => {
          return (
            <div className='data_val'>
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Button
                variant='contained'
                color='error'
                onClick={() => remove(index)}
              >
                <DeleteIcon />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
