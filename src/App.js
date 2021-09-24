import logo from './logo.svg';
import './App.css';
import Map from './components/map/Map';

function App() {
  const key = 'AIzaSyAdJlv40A2sRw9m9khaxgFkkDxgM5SjAmM'
  return (
    <div className="App">

      <Map
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh`, margin: `auto`, border: '2px solid black' }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default App;
