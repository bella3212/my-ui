import React, { useEffect , useState} from 'react';

export function getDataFromServer(){

   const [finalData, setData] = useState([{}]);
    React.useEffect(function effectFunction() {
        async function fetchData() {
            const response = await fetch('/table');
            const data = await response.json();
            setData(data.mdata);
        }
        fetchData();
    }, []);
   
    //getColumns(finalData)
    return finalData //list of dict
}




export function getColumns(data){
    var columns = [];
    columns.push(Object.keys(data[0]));
   /* data.map((raw, index) => {
        columns.push(Object.keys(raw));
        })
        */
    return columns;
}

    // useEffect(() => {
    //     fetch('/table').then(res => res.json()).then(data => {
    //       // Setting a data from api
    //     /*  setdata({
    //         name: data.Name,
    //         age: data.Age,
    //         date: data.Date,
    //         programming: data.programming,
    //     });
    //     */
    //       return data;
    //     });
    //   }, []);