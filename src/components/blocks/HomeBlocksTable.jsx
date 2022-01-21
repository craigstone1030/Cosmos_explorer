import React, { useContext, useMemo } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import Store from '../../store';
import useRequest from '../../hooks/useRequest';
import API from '../../api';
import LayoutPagination from '../reusable/LayoutPagination';


const cols = [
  {
    value: 'height',
    label: 'Block height',
  },
  {
    value: 'proposer',
    label: 'Proposer',
  }
];

const limit = 10;

const HomeBlocksTable = () => {
  const { chain } = useContext(Store);
  const { resp, isLoading, request } = useRequest(API.getBlockList, {
    limit,
    offset: 0,
  });

  const blocks = useMemo(() => {
    if (!resp || !Object.keys(resp).length) return [];

    return resp.items.map((block) => ({
      height: {
        value: block.height,
        link: `/${chain.value}/block/${block.height}`,
      },
      hash: block.hash,
      proposer: block.proposer,
      proposer_address: block.proposer_address,
      created_at: moment.unix(block.created_at).format('DD-MM-YYYY LTS'),
    }));
  }, [chain, resp]);



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

const Table = styled.div`
  max-width: 60%;
  margin-left: 20px;
`;

const TableRow = styled.div`
  justify-content: center;
  align-items: center;

`;

const BigText = styled.div`
  font-weight: bold;
`
const Number = styled.div`
  font-weight:normal;
  margin-left: 10px;
`
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
`
const TRow = styled.div`
  align-items: center;
  background-color: rgb(255, 255, 255);
  padding: 20px 24px;
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px 0px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`
const BlockHash = styled.div`
  font-weight: bold
`

const Symbol = styled.div`
  font-weight: normal;
`
  return (
    <>   
      <div style={{maxWidth: '40%', width: '100%'}}>
        <TableHeader>
          <div style = {{ display: 'flex', justifyContent: 'space-between',  width: '100%' }}>
            <TableRow className='lastest-block'>
              <BigText>Latest Blocks</BigText>
              <Number>123,123,23</Number>
            </TableRow>
            <div style = {{ display: 'flex', alignItems: 'center'}}>
              <BigText>More blocks</BigText>    
              <FontAwesomeIconDiv>
                <FontAwesomeIcon icon='bars'></FontAwesomeIcon>            
              </FontAwesomeIconDiv>        
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
