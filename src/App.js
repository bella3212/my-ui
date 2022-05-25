import React, { useState } from "react";

import {GenericStyle, Styles} from './app_styles';
import { Table } from "./Components/Table";
import { Tabs, Tab, Content } from './Components/Tabs';
import DateFilter from './Filters/DateFilter';
import logo from './logo.svg';
import namor from 'namor'
import { useNavigate, useHistory , Redirect } from "react-router-dom";
import { SliderColumnFilter,SelectColumnFilter } from "./Filters/Filters";
import {getDataFromServer, getColumns} from "./utils/dataFromServer"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";





export function TPage() {
  console.log("hereee")
 /* return( <GenericStyle>
    <h2>TPage</h2>
 </GenericStyle>
)
//}*/
  return  <h2>TPage</h2>;
}

export function Home() {
  const navigate = useNavigate();
  
 const handleClickGroup = e => {
    console.log("blaaaa")
    
   navigate("TPage") // TODO: rename this
  }

  const columns = React.useMemo( //useMemo returns a memoized value- runs when one of its dependencies update.
  () => [
    {
      Header: 'Name',
      columns: [
        {
          Header: '',
          accessor: 'checkboxcol',
          show: false,
          Cell: ({ cell }) => (
            <input type="checkbox"/>
            
          )
        },
        {
          Header: 'PK',
          accessor: 'pk',
          show: false,
        },
        {
          Header: 'Type',
          accessor: 'type',
          show: true,
        },
        {
          Header: 'Name',
          accessor: 'name',
          // Use our custom `fuzzyText` filter on this column
          filter: 'fuzzyText',
          Cell: ({ cell }) => (
            <button value={cell.value} onClick={handleClickGroup}>
              {cell.value}
            </button>
          )
        },
      ],
    },
    {
      Header: 'Info',
      columns: [
        {
          Header: 'Version',
          accessor: 'version',
          Filter: SliderColumnFilter,
          filter: 'equals',
        },
      /*  {
          Header: 'Visits',
          accessor: 'visits',
          Filter: NumberRangeColumnFilter,
          filter: 'between',
        },*/
        {
          Header: 'Status',
          accessor: 'status',
          Filter: SelectColumnFilter,
          filter: 'includes',
          
         // formatter: AddButtonToCell,
        },
      /*  {
          Header: 'Profile Progress',
          accessor: 'progress',
          Filter: SliderColumnFilter,
          filter: filterGreaterThan,
        },*/
        {
          Header: 'Date',
          accessor: 'date',
          Filter: ({filter, onChange}) => <DateFilter onChange={onChange}/>,
        },
        
      ],
    },
  ],
  []
)

const len=100
const data = getDataFromServer();//React.useMemo(() => makeData(len), [])
//const data = React.useMemo(() => makeData(len), [])
const columns_names=getColumns(data);
console.log("************")
console.log(columns_names)
console.log("************")
console.log(data)

const [active, setActive] = useState(0);
const handleClick = e => {
  const index = parseInt(e.target.id, 0);
  if (index !== active) {
    setActive(index);
  }
};

 return( <GenericStyle>
       <Tabs>
       <Tab onClick={handleClick} active={active === 0} id={0}>
          A
        </Tab>
       <Tab onClick={handleClick} active={active === 1} id={1}>
          CX
        </Tab>
        <Tab onClick={handleClick} active={active === 2} id={2}>
          Updates
        </Tab>
        <Tab onClick={handleClick} active={active === 3} id={3}>
          O
        </Tab>
      </Tabs>
      <Styles>
        <Table columns={columns} data={data} />
      </Styles>
     
    </GenericStyle>
 )
}

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {
  const statusChance = Math.random()
  return {
    pk:  Math.floor(Math.random() * 30),
    type: namor.generate({ words: 1, numbers: 0 }),
    name: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? 'alive'
        : statusChance > 0.33
        ? 'in progresess'
        : 'killed',

  }


}

function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }
  const x=makeDataLevel()
  return x;
}



//export default App



