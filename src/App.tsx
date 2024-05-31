import React from "react";
import "./App.css";
import { TonConnectButton,useTonAddress } from "@tonconnect/ui-react";
import { Counter } from "./components/Counter";
import { Jetton } from "./components/Jetton";
import { TransferTon } from "./components/TransferTon";
import styled from "styled-components";
import { FlexBoxCol, FlexBoxRow } from "./components/styled/styled";
import { Button } from "antd";
import { useTonConnect } from "./hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";
import "@twa-dev/sdk";
import { getWalletBalance } from './utils/tonBalance';
import { useState,useEffect } from "react";
import Logo from "./assets/irsolution.svg";
const StyledApp = styled.div`
  background-color: #d3d3d3; /* Light gray color */
  color: black;

  @media (prefers-color-scheme: dark) {
    background-color: #d3d3d3;
    color: white;
  }
  min-height: 100vh;
  padding: 20px 20px;
`;


const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const LogoStyle = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 30px;
`;

function App() {
  const { network } = useTonConnect();
  const userFriendlyAddress = useTonAddress();
  const [balance, setBalance] = useState<string | null>(null);
  useEffect(() => {
    const fetchBalance = async () => {
      if (userFriendlyAddress) {
        const balance = await getWalletBalance(userFriendlyAddress);
        setBalance(balance);
      }
    };

    fetchBalance();
  }, [userFriendlyAddress]);
  return (
    <StyledApp>
      <AppContainer>
        <LogoStyle>

      <img style={{width:200,height:150}}  src={Logo} alt="Logo" />

          <FlexBoxRow>
          <TonConnectButton/>
           
            <Button type="primary">
              {network
                ? network === CHAIN.MAINNET
                  ? "Mainnet"
                  : "Testnet"
                : "Not Connected"}
            </Button>
          </FlexBoxRow>
        </LogoStyle>
        <div style={{marginTop:'30px'}}>
        <FlexBoxCol>
       
          <Counter address={userFriendlyAddress} balance={balance}/>
          <TransferTon />
          {/* <Jetton /> */}
        </FlexBoxCol>
        </div>
      </AppContainer>
    </StyledApp>
  );
}

export default App;
