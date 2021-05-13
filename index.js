import React from "react";
import ReactDom from "react-dom";
//CSS
import "./index.css";

// function Greeting() {
//   return <h4>Hello James</h4>;
// }

//stateless functional component
//always return jsx

// const Greeting = () => {
//   return (
//     <div>
//       <h1>Hello World </h1>
//     </div>
//   );
// };

// const Greeting = () => {
//   return React.createElement("div", {}, React.createElement("h1", {}, "hello"));
// };

// const Greeting = () => {
//   return (
//     <React.Fragment>
//       <section onClick={() => {alert("Hello")}}>
//         <article className='hello'>
//           <h1>Hello World</h1>
//           <p>How do</p>
//         </article>
//       </section>
//     </React.Fragment>
//   );
// };

// function BookList() {
//   return (
//     <section className="Favorite">
//       <Person />
//       <Message />
//     </section>
//   );
// }

// const Person = () => <h4>Johnny</h4>;
// const Message = () => {
//   <h2>Hello To You Sir</h2>;
// };

function BookList() {
  return (
    <div>
      <h1 className="text text-1">Amazon Best Seller</h1>
      <section className="booklist">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book2 />
        <Book2 />
        <Book2 />
      </section>
    </div>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Book2 = () => {
  return (
    <article className="book">
      <Image2 />
      <Title2 />
      
    </article>
  );
};
const Image2 = () => {
  return (
    <section>

    <img
      src="https://images-na.ssl-images-amazon.com/images/I/919GZveZJYL._AC_UL200_SR200,200_.jpg"
      alt="Atomic Habits"
    />
    
    </section>
  );
};
const Title2 = () => {
  return <h1> Atomic Habits</h1>;
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/81YzHKeWq7L._AC_UL200_SR200,200_.jpg"
      alt="The Midnight Library: A Novel"
    />
  );
};

const Title = () => {
  return <h1> The Midnight Library: A Novel</h1>;
};

const Author = () => {
  return (
    <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}>
      Matt Haig{" "}
    </h4>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
