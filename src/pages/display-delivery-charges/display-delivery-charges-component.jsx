import React, {useContext, useEffect, useState} from "react";

import "./display-delivery-charges-styles.scss";
//import {Button} from "react-bootstrap";
//import CheckoutItem from "../../components/checkout-item/checkout-item-component";
//import {AppContext} from "../../Context/app-context";


const DisplayDeliveryCharges = (props) => {

  return (
    <div>
  (<div>
          <table className="table">
            <thead className="thead-light">
            <tr>
              <th>Province</th>
              <th>Delivery Fee</th>
            </tr>
            </thead>
            <tbody >
            <tr>
              <td style={{textAlign:"center"}}>1.Western</td>
              <td>$100</td>
            </tr>
            <tr>
            <td style={{textAlign:"center"}}>2.Eastern</td>
              <td>$200</td>
            </tr>
            <tr>
            <td style={{textAlign:"center"}}>3.North Central</td>
              <td>$300</td>
            </tr>
            <tr>
            <td style={{textAlign:"center"}}>4.Northern</td>
              <td>$400</td>
            </tr>
            <tr>
            <td style={{textAlign:"center"}}>5.North Western</td>
              <td>$500</td>
            </tr>
            <tr>
            <td style={{textAlign:"center"}}>6.Sabaragamuwa</td>
              <td>$600</td>
            </tr>
            <tr>
            <td style={{textAlign:"center"}}>7.Southern</td>
              <td>$700</td>
            </tr>
            <tr>
            <td style={{textAlign:"center"}}>8.Uva</td>
              <td>$800</td>
            </tr>
            <tr>
            <td style={{textAlign:"center"}}>9.Central</td>
              <td>$900</td>
            </tr>
            </tbody>


          </table>
        </div>
      )}


    </div>


  );
};

export default DisplayDeliveryCharges;
