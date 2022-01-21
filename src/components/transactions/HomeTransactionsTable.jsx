import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
import Table from '../reusable/Table';
import Store from '../../store';
import LayoutPagination from '../reusable/LayoutPagination';
import Icon from '../styled/Icon';
import { formatToken } from '../../utils';

const cols = [
  {
    value: 'hash',
    label: 'Hash',
  },
  {
    value: 'height',
    label: 'Height',
  },
  {
    value: 'status',
    label: 'Status',
  },
  {
    value: 'messages',
    label: 'Messages',
  }
];

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

const Table1 = styled.div`
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
const FontAwesomeIcon = styled.div`
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
const HomeTransactionsTable = ({ resp, isLoading, request }) => {
  const { chain } = useContext(Store);

  const transactions = useMemo(() => {
    if (!resp || !Object.keys(resp).length || resp.items === null) return [];

    return resp.items.map((transaction) => ({
      hash: {
        link: `/${chain.value}/transaction/${transaction.hash}`,
        value: transaction.hash,
      },
      status: {
        process() {
          return (
            <div>
              <Icon
                icon={transaction.status ? 'check' : 'times'}
                color={transaction.status ? 'success' : 'danger'}
                className="mr-1"
              />
              {transaction.status ? 'Success' : 'Fail'}
            </div>
          );
        },
      },
      fee: formatToken(transaction.fee),
      height: transaction.height,
      messages: transaction.messages,
      created_at: moment.unix(transaction.created_at).format('DD-MM-YYYY LTS'),
    }));
  }, [chain, resp]);

  return (
    <>
      <div style={{maxWidth: '59%', marginLeft: '10px', width: '100%'}}>
        <TableHeader>
          <div style = {{ display: 'flex', justifyContent: 'space-between',  width: '100%' }}>
            <TableRow className='lastest-block'>
              <BigText>Latest Transactions</BigText>
              <Number>123,123,23</Number>
            </TableRow>
            <div style = {{ display: 'flex', alignItems: 'center'}}>
              <BigText>More Transactions</BigText>            
              <FontAwesomeIcon icon='arrow-alt-right'></FontAwesomeIcon>            
            </div>
          </div>
        </TableHeader>
        <Table cols={cols} rows={transactions} isLoading={isLoading} maxWidth="40%" fontWeight="normal" />      
      </div>
    </>
  );
};

HomeTransactionsTable.propTypes = {
  resp: PropTypes.objectOf(PropTypes.any),
  request: PropTypes.func,
  isLoading: PropTypes.bool,
};

HomeTransactionsTable.defaultProps = {
  resp: {},
  request: () => null,
  isLoading: false,
};

export default HomeTransactionsTable;
