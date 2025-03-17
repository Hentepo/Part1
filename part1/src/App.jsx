const Header = (props) => {
  return (
    <header>
      <h1>{props.course}</h1>
    </header>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  );
}; 



const Content = (props) => {
  return (
    <div>
      <Part part="Fundamentals of React" exercises={10} />
      <Part part="Using props to pass data" exercises={7} />
      <Part part="State of a component" exercises={14} />
    </div>
  );
};



const Total = (props) => {
  return (
    <div>
      <p> Number of exercises {props.exercises}</p>        
    </div>
  );
};

const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14


  return (
    <div>
      <Header course={course} />    
      <Content/>    
      <Total exercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App