import React, { useState } from 'react';
import {useQuery, QueryClientProvider, QueryClient} from 'react-query';
import './App.css';
import { Card, Input, Button, Typography } from 'antd';
const { Title } = Typography;


function App() {

  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);

  const onPressSum = () => {
    // console.log(num1 + num2)
    refetch()
  }


  const emulateFetch = async (_: any) => {
    const res = await fetch('http://localhost:3000/add', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ num1, num2 })
    })
    return res.json();
  };


  const { isLoading, error, data, refetch } = useQuery("key", emulateFetch, {
    refetchOnWindowFocus: false,
    enabled: false
  });


  return (
      <div className="App">
        <div className="App-card">
          <Card title="Card title">
            <Input 
              size="large" 
              value={num1} 
              placeholder="number 1" 
              onChange={(w) => setNum1(Number(w.target.value))} 
            />

            <span className="App-Field-Space"></span>
            <Input 
              size="large" 
              value={num2} 
              placeholder="number 2" 
              onChange={(w) => setNum2(Number(w.target.value))} 
            />
            <span className="App-Field-Space"></span>
            <Button type="primary" block onClick={onPressSum} disabled={isLoading}> Sum </Button>
            
            <span className="App-Field-Space"></span>
            <hr />
            <span className="App-Field-Space"></span>
            
            <Title level={4}>Results</Title>
            <Input 
              size="large" 
              value={(data && data.result) ? data.result : 0} 
              placeholder="number 2" 
              disabled={true}
            />
          </Card>
        </div>
      </div>
  );
}

export default App;
