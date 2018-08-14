import React from 'react'
import Header from './header'
import axios from 'axios'
import ContestPreview from './contestPreview';

class App extends React.Component
{   
    constructor(props){
        super(props)
        this.state = {
            contests: []
        }
    }

    componentDidMount(){
        axios.get('/api/contests')
        .then(resp => {
            console.log(resp)
            this.setState({ contests: resp.data.contests })
        })
        .catch(console.error)
    }

    render() {
        return(
            <div>
                <h2>Hello from Component</h2>
                <Header name='Georgie' />
                {this.state.contests.map(contest => 
                    <ContestPreview key={contest.id} {...contest} />
                )}
            </div>
        )
    }
}

export default App