import React from 'react'
import Header from './header'
import ContestPreview from './contestPreview';

const App = (props) => {
    return (
        <div>
            <h2>Hello from Component</h2>
            <Header name='Georgie' />
            {props.contests.map(contest => 
                 <ContestPreview key={contest.id} {...contest} />
            )}
        </div>
    )
}

export default App