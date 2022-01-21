import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const HomeBlocksTable = () => {
  const TableHeader = styled.div`
    margin-top: 10px;
    max-width: 100%;
    background-color: rgb(255, 255, 255);
    padding: 20px 24px;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px 0px;
    display: flex;
    padding: 10px;
    justify-content: space-between;
    margin-bottom: 12px;
  `;

  const TableRow = styled.div`
    justify-content: center;
    align-items: center;
  `;

  const BigText = styled.div`
    font-weight: bold;
  `;
  const Number = styled.div`
    font-weight: normal;
    margin-left: 10px;
  `;
  const FontAwesomeIconDiv = styled.div`
    background-color: rgb(69, 32, 230);
    border-radius: 8px;
    width: 32px;
    height: 32px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-flow: row wrap;
    margin: 0 10px;
    color: white;
  `;
  const TRow = styled.div`
    align-items: center;
    background-color: rgb(255, 255, 255);
    padding: 20px 24px;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px 0px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  `;
  const BlockHash = styled.div`
    font-weight: bold;
  `;

  const Symbol = styled.div`
    font-weight: normal;
  `;

  const Button = styled.a`
    position: relative;
  `;

  const handleClick = () => {
    // eslint-disable-next-line no-alert
    alert('More Blocks');
  };

  return (
    <>
      <div style={{ maxWidth: '40%', width: '100%' }}>
        <TableHeader>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <TableRow className="lastest-block">
              <BigText>Latest Blocks</BigText>
              <Number>123,123,23</Number>
            </TableRow>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <BigText>More blocks</BigText>
              <Button onClick={handleClick}>
                <FontAwesomeIconDiv>
                  <FontAwesomeIcon icon={faArrowRight} />
                </FontAwesomeIconDiv>
              </Button>
            </div>
          </div>
        </TableHeader>
        <TRow>
          <BlockHash>B23423</BlockHash>
          <Symbol>Tro</Symbol>
        </TRow>
        <TRow>
          <BlockHash>B23422</BlockHash>
          <Symbol>AVAX</Symbol>
        </TRow>
        <TRow>
          <BlockHash>B23421</BlockHash>
          <Symbol>USDT</Symbol>
        </TRow>
      </div>
    </>
  );
};

export default HomeBlocksTable;
