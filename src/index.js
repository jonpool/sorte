// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

import PageScrollTop from './component/PageScrollTop';


import Blog from "./elements/Blog";
import error404 from "./elements/error404";


import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


// Blog pages
import BlogDetails from "./elements/BlogDetails";
import Mudar_às_Vezes_e_Necessário from "./elements/Mudar_às_Vezes_e_Necessário";


class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/blog'}>
                <PageScrollTop>
                    <Switch>
                        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Blog}/>
                        
                        {/* Blog Element Layot */}

                        <Route exact path={`${process.env.PUBLIC_URL}/blog-details`} component={BlogDetails}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/Mudar_às_Vezes_e_Necessário`} component={Mudar_às_Vezes_e_Necessário}/>
                        
                        <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                        <Route component={error404}/>

                    </Switch>
                </PageScrollTop>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();