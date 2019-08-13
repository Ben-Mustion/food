import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar 
        term={term} 
        onTermChange={setTerm} 
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text>: null}
      <ScrollView> 
        {filterResultsByPrice('$').length ? 
          <ResultsList results={filterResultsByPrice('$')} title='Cheap Spots' /> 
        : null }
        {filterResultsByPrice('$$').length ? 
          <ResultsList results={filterResultsByPrice('$$')} title='Reasonably Priced' />
        : null }
        {filterResultsByPrice('$$$').length ? 
          <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender' /> 
        : null } 
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
