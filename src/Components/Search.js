import React, { useState } from "react";
import MainNav from "./MainNav";
import "../style/search.css";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { baseurl } from "../BaseUrl";
const Search = () => {
  const [data, setdata] = useState();
  function searchData(key) {
    // console.log(key);
    // setlastsearch(key);
    fetch(`${baseurl}/job/jobSearch/?q=` + key).then((resp) => {
      resp.json().then((result) => {
        console.log(result);
        const display = result.data;
        setdata(display);
      });
    });
  }
  return (
    <div>
      <MainNav />

      <div className="searchMain">
        <div className="searchHeading">
          <h3>Let's Find Jobs For You</h3>
          <p>Any Industry. Any Location. Any Experience Level</p>
        </div>

        <div className="searchInput">
          <input
            type="text"
            onChange={(e) => searchData(e.target.value)}
            placeholder="Job Title or Keyword"
          />
        </div>

        {data ? (
          <div className="displayTable">
            <Table className="listTable">
              <thead style={{ fontWeight: "bold" }}>
                <tr>
                  <td>Id</td>
                  <td>Name</td>
                  <td>Type</td>
                  <td>Number</td>
                  <td>View</td>
                </tr>
              </thead>

              {data.map((item, id) => {
                return (
                  <>
                    <tbody>
                      <tr key={id}>
                        {/* {console.log(item.name)} */}
                        <td>{id}</td>
                        <td>{item.jobtype.name}</td>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>
                          <Link
                          //  to={"/jobdetails/" + item.uuid}
                          to={localStorage.getItem('user-info') ?"/jobdetails/" + item.uuid : '/login/Jobseeker' }
                          >
                            <FontAwesomeIcon icon={faEye} />
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </>
                );
              })}
            </Table>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Search;
