import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  return (
    // Start Grid Table
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      {/* Header */}
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width="auto"
        >
          {/* Items */}
          <ColumnsDirective>
            {employeesGrid.map((item, index) => (
              <ColumnDirective key={index} {...item}/>
            ))}
          </ColumnsDirective>
          {/* Extra Function */}
          <Inject services={[Page, Search, Toolbar ]}/>
      </GridComponent>
    </div>
    // End Grid Table
  )
}  

export default Employees