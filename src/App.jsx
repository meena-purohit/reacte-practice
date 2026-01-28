// let guest= 0

function App() {
   
  return (
    <div>
      <h1>Keeping Components Pure</h1>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
      <Cup guest={4} />
      <Cup guest={5} />
    </div>
  );
}

const Cup = ({guest}) => {
    //  let guest = 0
  return (
    <h1>
      we have {guest} guest and we have to make {guest} cup of tea
    </h1>
  );
};

export default App;
