import React from 'react';
import MovieProvider from './MovieProvider';
import MovieList from './MovieList';

const App = () => {
  return (
    <MovieProvider>
      <MovieList />
    </MovieProvider>
  );
}

export default App;