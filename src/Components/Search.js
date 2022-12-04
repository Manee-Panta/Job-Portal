import React ,{ useState} from 'react'
import MainNav from './MainNav'
import '../style/search.css'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-solid-svg-icons'

const Search = () => {
    const baseurl = "https://amrit77.pythonanywhere.com/api";

    const [data, setdata] = useState();
    const [nodata, setnodata] = useState(false);
    // const [lastsearch, setlastsearch] = useState("");
  
    

    function searchData(key) {
        console.log(key);
        // setlastsearch(key);
        fetch(`${baseurl}/job/jobSearch/?q=` + key).then((resp) => {
          resp.json().then((result) => {
            console.log(result);
            const display=result.data
                console.log( display);
                setdata(display);
            // if (result.length > 0) {
                
            //   setdata(display);
            //   setnodata(false);
            // } else {
            //   setnodata(true);
            //   setdata("");
            // }
          });
        });
      }
  return (
    <div>
        <MainNav/>

        <div className="searchMain">
        <div className="searchHeading">
        <h3>Let's Find Jobs For You</h3>
        <p>Any Industry. Any Location. Any Experience Level</p>
        </div>
        
        <div className="searchInput">
        <input type="text" onChange={(e) => searchData(e.target.value)} placeholder='Job Title or Keyword' />
        </div>

        {data ? (
          <div className='displayTable'>
            <Table className="listTable">
              <thead style={{'fontWeight':'bold'}}>
                <tr>
                  <td>Id</td>
                  <td>Name</td>
                  <td>Type</td>
                  <td>Number</td>
                  <td>View</td>
               
                </tr>
              </thead>

              {data.map((item,id) => {
                return (
                  <>
                    <tr key={id}>
                   {console.log(item.name)}
                      <td>{id}</td>
                      <td>{item.jobtype.name}</td>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td><Link to={'/jobdetails/'+item.uuid}><FontAwesomeIcon icon={faEye}/></Link></td>
                      
                    </tr>
                  </>
                );
              })}
            </Table>
          </div>
        ) : (
          <div></div>
        )}

        {nodata ? <div>No data Found</div> : <div></div>}
        </div>
    </div>
  )
}

export default Search