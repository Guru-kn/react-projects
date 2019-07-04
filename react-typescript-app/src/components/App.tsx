import * as React from 'react';
import '../styles/index.css';

interface Iprops{
    name: string;
}

class App extends React.Component<Iprops> {

    constructor(props: any){
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Hello {this.props.name}!</h1>
            </div>
        );
    }
}
export default App;