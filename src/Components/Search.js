import React ,{ useState} from 'react'
import MainNav from './MainNav'

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

        <h3>This is search Page</h3>
        
        <input type="text" onChange={(e) => searchData(e.target.value)} />

        {data ? (
          <div>
            <table className="listTable">
              <thead>
                <tr>
                  <td>Id</td>
                  <td>Name</td>
                  <td>Type</td>
                  <td>Number</td>
               
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
                      
                    </tr>
                  </>
                );
              })}
            </table>
          </div>
        ) : (
          <div></div>
        )}

        {nodata ? <div>No data Found</div> : <div></div>}
    </div>
  )
}

export default Search