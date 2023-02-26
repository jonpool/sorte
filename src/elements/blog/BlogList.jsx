import React, { Component ,Fragment } from "react";
import BlogContent from "./BlogContent";
//import app from "../../../public/db/dbConnection";

class BLogList extends Component{
    render() {
        const PostList = BlogContent.slice(0 , BlogContent.length);
 

  // Initialize Firebase
 // app.initialize();
  
  
    // Initialize Realtime Database and get a reference to the service
  //const database = app.getDatabase(app);
  //console.log(database);
        return (
             <Fragment>
                 <div className="row" >
                    {PostList.map((value , i ) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                            <div className="blog blog-style--1">
                                <div className="thumbnail">
                                    <a href={`/${value.url}`}>
                                        <img className="w-100" src={`/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images"/>
                                    </a>
                                </div>
                                <div className="content">
                                    <p className="blogtype">{value.category}</p>
                                    <h4 className="title"><a href={`/${value.url}`}>{value.title}</a></h4>
                                    <div className="blog-btn">
                                        <a className="rn-btn text-white" href={`/${value.url}`}>Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                     ))}
                 </div>
             </Fragment>
        );
    }
}
export default BLogList;