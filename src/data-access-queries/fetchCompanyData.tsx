import React, { useState, useEffect } from 'react';

export interface CompanyData {
  Name: string;
  Email: string;
  Phone: string;
  Street: string;
  City: string;
  State: string;
}

function FetchCompanyData() {
  const [data, setData] = useState<CompanyData[]>([]);

  console.log('data', data);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3002/fetchData');
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);

  return (
    <div>
      {data.map(({ Name, City }: CompanyData) => (
        <div>
          <li key={Name}>{City}</li>
        </div>
      ))}
    </div>
  );
}

export default FetchCompanyData;