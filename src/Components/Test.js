// import React, { useState, useEffect } from "react";
// import { Table } from "react-bootstrap";
// import Pagination from './Pagination'

// const Test = () => {
//   const[data,setData]=useState([])
//   const[currentPage,setCurrentPage]=useState(1)
//   const[postsPerPage,setPostsPerPage]=useState(5)
   
//   useEffect(()=>{
//     fetch('https://fakestoreapi.com/products',{
//       method:'GET',
//       headers:{
//         'Accept':'application/json',
//         'Content-Type':'application/json'
//       }
//     }).then((response)=>{
//       response.json().then((result)=>{
//         console.log(result)
//         setData(result)
      
//       })
//     })
//   },[])

//   const lastPostTndex=currentPage * postsPerPage;
//   const firstPostIndex= lastPostTndex - postsPerPage;
//   const currentPosts = data.slice (firstPostIndex,lastPostTndex)
//   console.log(currentPosts)
//   return (
//     <div>
//       <h6>Let's Try</h6>
//       <Table>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Image</th>
//             <th>Price</th>
//             <th>Category</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             currentPosts?.map((items, id) => (
//               <tr key={id}>
               
//                 <td>{items.id}</td>
//                 <td><img src={items.image} alt='img' style={{'height':'100px','width':'100px'}}/></td>
//                 <td>{items.price}</td>
//                 <td>{items.category}</td>
//               </tr>
//             ))
//           }
//         </tbody>
//       </Table>

//       <Pagination totalPosts={data.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}/>
//     </div>
//   );
// };

// export default Test;


import React , {useEffect} from 'react'
import { baseurl } from '../BaseUrl'
const Test = () => {
  useEffect(()=>{
 const user=   localStorage.getItem('user-info')
 const[userid]=JSON.parse(user)
 console.log(userid.uuid)
 fetch(`${baseurl}/account/userdetails/?uuid=` + userid.uuid, {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },

}).then((response)=>{
  response.json().then((result)=>{
    console.log(result)
  })
})
  })
  return (
    <div>


    </div>
  )
}

export default Test