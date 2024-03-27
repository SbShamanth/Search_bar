import React,{ useState } from "react";

const Datadisplay = (props) => {
    const { data} = props;
    
  return (
    <div>
   <div>
{data.name}
      </div>

      <div>
        {data.email}
      </div>

    </div>

  );
};

export default Datadisplay;



