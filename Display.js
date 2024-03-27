import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Datadisplay from './Displaydata';
import { FaSearch } from 'react-icons/fa';

function Display(props) {
  const { data } = props;
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleInputChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <h>You are in display page</h>
      <br />
      <h>Search any data you want from json server</h>
      <br />
      
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <FaSearch className="search-icon" />
      
      <br />
      <button onClick={() => navigate('/')}>
        Home
      </button>
      
      <div>
        {filteredData.map(item => (
          <Datadisplay key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Display;


















// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Datadisplay from './Displaydata';
// import { FaSearch } from 'react-icons/fa';

// function Display(props) {  
//   const { data } = props;
//   const navigate = useNavigate();

//   const displaydata = () => {
//     return data.map((data) => {
//       if (data.name) {
//         return (
//           <Datadisplay data={data} key={data.id} />
//         );
//       }
//     });
//   }

//   return (
//     <div>
//       <h>You are in display page</h>
//       <br />
//       <h>Search any data you want from json server</h>
//       <br />

//       <button onClick={() => navigate('/')}>
//         Home 
//       </button>
//       <br />
      
//       <input type="text" placeholder="Search..." />
//       <FaSearch className="search-icon" />
      
//       <div>
//         {displaydata()}
//       </div>
//     </div>
//   );
// }

// export default Display;
