import React from 'react';
import { SnackbarProvider } from 'notistack';
import ExpenseTrackerMain from './component/ExpenseTrackerMain';

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <ExpenseTrackerMain />
    </SnackbarProvider>
  );
}

export default App;
