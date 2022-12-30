import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, SplineAreaSeries, LineSeries, DateTime, Legend } from '@syncfusion/ej2-react-charts';

import { Header } from '../../components';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Area = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Area" title="Inflation Rate in Parentage" />
    <ChartComponent
      id="area-chart"
      height="420px"
      primaryYAxis={areaPrimaryYAxis}
      primaryXAxis={areaPrimaryXAxis}
      chartArea={{ border: { width: 0 }}}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[SplineAreaSeries, DateTime, Legend ]} />
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item, index) => 
          <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  )
}

export default Area