import React, { useState, useEffect } from 'react';

export interface CompanyData {
  Zip: string;
  Name: string;
  Email: string;
  Phone: string;
  Street: string;
  City: string;
  State: string;
}

function FetchCompanyData({ city, state, zip }: { city: string; state: string, zip: string}) {
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

  const filteredData = data.filter((item) => {
    if (city && state && zip) {
      return (
        item.City.toLowerCase().includes(city.toLowerCase()) &&
        item.State.toLowerCase().includes(state.toLowerCase())&&
        item.Zip.toLowerCase().includes(zip.toLowerCase())
      );
    } else if (city) {
      return item.City.toLowerCase().includes(city.toLowerCase());
    } else if (state) {
      return item.State.toLowerCase().includes(state.toLowerCase());
    } else if (zip){
      return item.Zip.toLowerCase().includes(zip.toLowerCase());
    }
    return true;
  });

  return (
    <div>
      {filteredData.map(({ Name }: CompanyData) => (
        <div>
          <li key={Name}>{Name}</li>
        </div>
      ))}
    </div>
  );
}

export default FetchCompanyData;