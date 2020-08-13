import _ from 'lodash';
import React from 'react';
import { Search, Grid, Image, List } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  setSearchedValue,
  setLoadingStatus,
  setSearchedResults
} from '../actions';
import { INTERESTS } from '../data';

const resultRenderer = ({ title, image, path }) => {
  return (
    <Link to={path} style={{ display: 'flex', flexDirection: 'column' }}>
      <List>{title}</List>
      <Image src={image}></Image>
    </Link>
  );
};

function Search() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.setSearchedValue);
  const results = useSelector(state => state.setSearchedResults);
  const isLoading = useSelector(state => state.setLoadingStatus);
  const handleResultSelect = (e, data) =>
    dispatch(setSearchedValue(data.result.title));
  const handleSearchChange = e => {
    dispatch(setLoadingStatus(true)) && dispatch(setSearchedValue(e));

    setTimeout(() => {
      const re = new RegExp(_.escapeRegExp(value), 'i');
      const isMatch = result => re.test(result.title);
      dispatch(setLoadingStatus(false)) &&
        dispatch(setSearchedResults(_.filter(INTERESTS, isMatch)));
    }, 300);
  };

  return (
    <Grid centered>
      <Grid.Row centered width={12}>
        <Search
          fluid
          loading={isLoading}
          onResultSelect={(e, data) => handleResultSelect(e, data)}
          onSearchChange={_.debounce(
            e => handleSearchChange(e.target.value),
            500,
            {
              leading: true
            }
          )}
          results={results}
          value={value}
          resultRenderer={resultRenderer}
        />
      </Grid.Row>
    </Grid>
  );
}

export default Search;
