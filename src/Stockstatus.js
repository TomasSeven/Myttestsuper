import React from "react";
import Loading from 'react-loading-spinkit';


class Stockstatus extends React.Component {
  constructor(props) {
    super(props);
  }



render (){
  console.log("meeep", this.props.fetchList);
return (
<div style={{ height: '5vh', width: '10ovw' }}>
<Loading show={true} />
<Loading show={true} />
</div>
);
};
}

export default Stockstatus;