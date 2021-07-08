import React from 'react'
import ListResultFootball from './components/List'
import FootballProvider from './context/footballProvider';

class App extends React.PureComponent {
  render() {
    return (
      // share data từ FootballProvider cho các component
      <FootballProvider>
        <ListResultFootball/>
      </FootballProvider>
    )
  }
}

export default App

// import React from 'react';
// import ListFootball from './components/List';
// import FootballProvider from './context/footballProvider';

// class App extends React.PureComponent {
//   render() {
//     return(
//       // share data tu FootballProvider cho cac component
//       <FootballProvider>
//         <ListFootball/>
//       </FootballProvider>
//     )
//   }
// }
// export default App;