import { Panel } from 'primereact/panel';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
export default function Client() {
    const [data, setData] = useState([]);
    useEffect(() =>
    axios.get("https://ancient-fjord-10674.herokuapp.com/api/client/id/full/15")
    .then(res => setData(res.data))
    // .then(res => console.log(res.data))
  )

  function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      var intlCode = (match[1] ? '+1 ' : '');
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
    }
    return null;
  }

  if (data.length === 0){
    return <div>
    <Panel> Loading... </Panel>

</div>;
  } else {
      console.log(data)
    return <div>
    <Panel>{data.ownFirstName} {data.ownLastName}</Panel>
    <Panel>{formatPhoneNumber(data.owner_sphone__)}</Panel>
    <Panel></Panel>

</div>;
  }
  
}
