import React, {Component} from 'react'
import './ContextWrapper'
import MyContext from '../Store/Context'

class MyProvider extends Component {
    state = {
        user: 'hiii'
    }
    render() {
        return (
            <MyContext.Provider value={{user: this.state.user, sign: () => {
                const user = Object.assign({}, this.state.user)
                console.log(user);
                this.setState({user})
            }
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
export default MyProvider