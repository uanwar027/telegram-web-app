import { useState } from "react";
import styled from "styled-components";
import { Address, toNano ,comment} from "ton";
import { useTonConnect } from "../hooks/useTonConnect";
// import { Card, FlexBoxCol, FlexBoxRow, Button, Input } from "./styled/styled";
import { Card, Col, Row,Input,Button } from 'antd';



export function TransferTon() {
  const { sender, connected } = useTonConnect();

  const [tonAmount, setTonAmount] = useState("");
  const [tonRecipient, setTonRecipient] = useState(
    ""
  );
  const [text,setText] = useState('');
  return (
    
    <Row gutter={16}>
    <Col span={24}>
    


      <Card title="Transfer TON To Wallet" bordered={false}>
       <div>
      <label>Amount To Send</label>
          <Input
            style={{ marginRight: 8 }}
            type="number"
            placeholder="0.01"
            value={tonAmount}
            onChange={(e) => setTonAmount(e.target.value)}
          ></Input>
  </div>
  <div style={{marginTop:10}}>
      <label>Add Comment </label>
          <Input
            style={{ marginRight: 8 }}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></Input>
   </div>
   <div style={{marginTop:10}}>
   <label>Receiver Address</label>
          <Input
            style={{ marginRight: 8 }}
            value={tonRecipient}
            placeholder="EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c"
            onChange={(e) => setTonRecipient(e.target.value)}
          ></Input>
   </div>

   <Button type="primary"
          disabled={!connected}
          style={{ marginTop: 18 }}
          onClick={async () => {
            sender.send({
              to: Address.parse(tonRecipient),
              value: toNano(tonAmount),
              body:comment(text)
            });
          }}
        >
          Transfer
        </Button>
      
      
    </Card>
    </Col>
   
   </Row>
  );
}
