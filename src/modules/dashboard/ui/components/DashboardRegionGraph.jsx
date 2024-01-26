import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from 'recharts';
import {
  testNarratorsData,
  testUsersData,
  citiesData
} from '../../../../database';

export const DashboardRegionGraph = () => {
  const regionData = citiesData.map( city => ({
    name: city,
    narrators: 0,
    users: 0
  }));

  testNarratorsData.forEach( narrator => {
    const cityIndex = citiesData.indexOf( narrator.city );
    if ( cityIndex !== -1 ) {
      regionData[ cityIndex ].narrators += 1;
    }
  });

  testUsersData.forEach( user => {
    const cityIndex = citiesData.indexOf( user.city );
    if ( cityIndex !== -1 ) {
      regionData[cityIndex].users += 1;
    }
  });

  return (
    <BarChart
      width={ 400 }
      height={ 300 }
      data={ regionData }
    >
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar
        dataKey='narrators'
        fill='#8887D8'
      />
      <Bar
        dataKey='users'
        fill='#82CA9D'
      />
    </BarChart>
  );
}
