import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [results, setResults] = useState([])

  const onTextChange = (event) => {
    //load data from here

    // if(event.keyCode === 13) {
    //   fetch(`url&search=${event.target.value}`).then(response => {
    //     setResults(response)
    //   }).catch(error => console.log(error))
    // }

    //temp method
    if(event.keyCode === 13) {
      const tempValue = [
        {
          col1: "val1",
          col2: "val2",
          col3: "val3",
          col4: "val4",
          col5: "val5",
          col6: "val6",
          col7: "val7",
          col8: "val8",
          col9: "val9",
          col10: "val10",
        },
        {
          col1: "val11",
          col2: "val12",
          col3: "val13",
          col4: "val14",
          col5: "val15",
          col6: "val16",
          col7: "val17",
          col8: "val18",
          col9: "val19",
          col10: "val20",
        }
      ]

      setResults(tempValue)
    }
  }

  const renderResults = () => {
    return results.map(res => {
      return <tr>
        <td>{res.col1}</td>
        <td>{res.col2}</td>
        <td>{res.col3}</td>
        <td>{res.col4}</td>
        <td>{res.col5}</td>
        <td>{res.col6}</td>
        <td>{res.col7}</td>
        <td>{res.col8}</td>
        <td>{res.col9}</td>
        <td>{res.col10}</td>
      </tr>
    })
  }

  return (
    <div className='container'>
      <input type='text' onKeyUp={onTextChange}/>
      <table>
        <th>Column 1</th>
        <th>Column 2</th>
        <th>Column 3</th>
        <th>Column 4</th>
        <th>Column 5</th>
        <th>Column 6</th>
        <th>Column 7</th>
        <th>Column 8</th>
        <th>Column 9</th>
        <th>Column 10</th>
        <tbody>
          {renderResults()}
        </tbody>
      </table>
    </div>
  );
}

export default App;
