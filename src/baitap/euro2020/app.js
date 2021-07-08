import React from 'react'
import ListFootball from './components/List'
import FootballProvider from './context/footballProvider-v2';

class App extends React.PureComponent {
    render() {
        return (
            // share data từ FootballProvider cho các component
            <FootballProvider>
                <ListFootball/>
            </FootballProvider>
        )
    }
}

export default App;