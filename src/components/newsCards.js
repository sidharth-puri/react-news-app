import React from "react";
import "./button.css";



class NewsCards extends React.Component {
  
  render(){
  return (
    <div className="col-sm-4" key={this.props.id}>
      <div className="card mt-3 ml-3 rounded-1 shadow mx-auto text-center">
        <img className="card-img-top" src={this.props.image} alt={"News article"} />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
          <footer className="blockquote-footer"><cite title="Source Title">{this.props.source}</cite></footer>
          <a href={this.props.url} target="noopener noreferrer">
            Read More
          </a> 
          <div>
          <button className="button" >Save Article</button>
          </div>
         
        </div>
      </div>
    </div>
  );
  }
}
export default NewsCards;