import React from "react";
import "./main.css";
import ReactDOM from "react-dom";
function Books() {
  return (
    <div className="books">
      <Booklist
        author="Bashir"
        title="Red-Handed: How American Elites Get Rich Helping China Win"
        img="https://images-na.ssl-images-amazon.com/images/I/81SmH2JFABL._AC_UL254_SR254,254_.jpg" 
        className="firstCall"
      >
      </Booklist>
      <Booklist
        author="Abu Huraira"
        title="
Things We Never Got Over"
        img="https://images-na.ssl-images-amazon.com/images/I/71ODaT072wL._UX300__PJku-sticker-v7,TopRight,0,-50_AC_UL254_SR254,254_.jpg"
      />
      <Booklist
        title="Will"
        author="Sibtain"
        img="https://images-na.ssl-images-amazon.com/images/I/911cmGSgcvL._AC_UL127_SR127,127_.jpg"
      />
    </div>
  );
}

function Booklist(props) {
    console.log(props);
  return (
    <>
      <div className="myBooks">
        <img src={props.img} alt="amazon" />
        <h4>{props.title}</h4>
        <p>{props.author}</p>
      </div>
    </>
  );
}
ReactDOM.render(<Books />, document.getElementById("main"));
