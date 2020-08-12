import _ from 'lodash';
import React from 'react';
import { Search, Grid, Sticky } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setSearchedValue,
  setLoadingStatus,
  setSearchedResults
} from '../actions';
import { INTERESTS } from '../data';

const source = _.range(0, 1).reduce(memo => {
  const name = 'Results';

  // eslint-disable-next-line no-param-reassign
  memo[name] = {
    name,
    results: INTERESTS
  };

  return memo;
}, {});

function SearchExampleCategory() {
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

      const filteredResults = _.reduce(
        source,
        (memo, data, name) => {
          const results = _.filter(data.results, isMatch);
          if (results.length) memo[name] = { name, results }; // eslint-disable-line no-param-reassign

          return memo;
        },
        {}
      );
      dispatch(setLoadingStatus(false)) &&
        dispatch(setSearchedResults(filteredResults));
    }, 300);
  };

  return (
    <Grid centered>
      <Grid.Row centered width={12}>
        <Search
          fluid
          category
          loading={isLoading}
          onResultSelect={(e, data) => handleResultSelect(e, data)}
          onSearchChange={_.debounce(
            (e, data) => handleSearchChange(e.target.value),
            500,
            {
              leading: true
            }
          )}
          results={results}
          value={value}
        />
      </Grid.Row>
    </Grid>
  );
}

export default SearchExampleCategory;
