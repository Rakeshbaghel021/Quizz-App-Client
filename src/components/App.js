import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import Signin from './Signin';
import Signup from './Signup';
import Start from './Start';
import ShowQuiz from './ShowQuiz';

import Home from './Home';
import Header from './Header';

class App extends React.Component{
    constructor(){
        super();
        this.state={
            isLogged : false
        };
    }

    // handleLogged = value =>{
    //     this.setState({isLogged:value})
    // };
// PublicRoutes(){
//     return(
        // <div>
      
    // )
// }

// PrivateRoutes(){
//     return(
//         <div>
//         <Switch>
//             <Route exact path="/">
//                 <Home/>
//             </Route>
//             <Route exact path="/quizsets">
//                 <ShowQuiz/>
//             </Route>
//             <Route exact path="/notfound">
//                 <NotFound/>
//             </Route>
//         </Switch>
//         </div>
//     )
// }


    render(){
        return(
            <div>
            <Switch>
            <Route exact path="/">
                <Start/>
            </Route>
            <Route exact path="/signup">
                <Signup/>
            </Route>
            <Route exact path="/signin">
                {/* <Signin handleLogged={this.handleLogged} /> */}
                <Signin/>
            </Route>
            <Route excat path="/notfound">
                <NotFound/>
            </Route>
            </Switch>
            </div>
            
        )
    }
}

export default App;