import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import theme from '../../utils/theme';

const networkList = [
  { label: 'SLCP', value: 'SLCP', coinCode: 'SLCP' },
  { label: 'All Blockchains', value: 'all', coinCode: 'All Blockchains' },
]

const stylesChain = {
  container: (base) => ({
    ...base,
    minWidth: 155,
    fontSize: '14px',
  }),
  control: (base) => ({
    ...base,
    minHeight: 30,
    border: 0,
    height: 48,
    textAlign: 'center',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.blue4,
    },
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: 'none',
  }),
  indicatorsContainer: (base) => ({
    ...base,
    height: 48,
    border: 'none'
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: theme.black,
  }),
  option: (base, state) => ({
    ...base,
    padding: '4px 10px',
    backgroundColor: state.isSelected ? theme.blue : 'transparent',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: !state.isSelected ? theme.blue4 : '',
    },
    '&:active': {
      backgroundColor: theme.blue4,
    },
  }),
};

const SearchBox = () => (
  <SearchContainer>
    <FilterBox>
      <Select
        options={networkList}
        defaultValue={networkList[0]}
        onChange={(e) => {
          console.log('hi')
        }}
        styles = {stylesChain}
      />
    </FilterBox>
    <SearchInput 
      type="text" 
      className="search-class" 
      placeholder="Search Any Address, Transaction or Block" 
    />
    <SearchButton>
      Search
    </SearchButton>
  </SearchContainer>
);

const SearchContainer = styled.div`
  display: flex;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  height: 48px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px 0px;
`
const SearchInput = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  font-size: 14px;
  color: #8e9ab5;
  padding-left: 10px;
  padding-right: 108px;
  border: none;
`

const FilterBox = styled.div`
  padding: 0 20px;
  background: #fff;
  border-right: 1px solid #d2d7e1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-size: 14px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: auto;
  color: #213654;
  cursor: pointer;
  position: relative;
  overflow: visible;
  width: 155px; 
`;

const SearchButton = styled.a`
  background: #030319;
  height: 48px;
  line-height: 48px;
  width: 98px;
  overflow: hidden;
  font-size: 14px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
`

export default SearchBox;
