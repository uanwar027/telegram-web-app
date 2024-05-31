import { TonConnectButton } from "@tonconnect/ui-react";
// import { useCounterContract } from "../hooks/useCounterContract";
// import { useTonConnect } from "../hooks/useTonConnect";

// import {
//   Card,
//   FlexBoxCol,
//   FlexBoxRow,
//   Ellipsis,
//   Button,
// } from "./styled/styled";
import React from 'react';
import { Card, Col, Row } from 'antd';
export function Counter({address,balance}:any) {
  
  // const { connected } = useTonConnect();
  // const { value, address, sendIncrement } = useCounterContract();

  return (
    <div className="Container">
      <TonConnectButton />

    
      <Row gutter={16}>
    <Col span={24}>
      <Card style={{width: '100%'}} title="Wallet Details" bordered={false}>
        <p><strong>Address</strong>: {address}</p>
        <p><strong>Balance</strong>: {balance}</p>
      </Card>
    </Col>
   
  </Row>
    </div>
  );
}
