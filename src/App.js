import React from 'react';
import LazyLoad from 'react-lazy-load';


const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const Image = ({pic}) => (
  <p><img src={pic} width='250' alt="dog images" /></p>
)


const App = () => (
  <div style={styles}>
    <LazyLoad height={250}>
    <Image pic='https://placedog.net/500/300' />
    </ LazyLoad>
    <LazyLoad height={250}>
      <Image pic='
      https://placedog.net/500/250' />
    </ LazyLoad>
    <LazyLoad height={250}>
      <Image pic='https://placedog.net/500/400' />
    </ LazyLoad>
    <LazyLoad height={250}>
      <Image pic='https://placedog.net/500/350' />
    </ LazyLoad>
    <LazyLoad height={250}>
      <Image pic='https://placedog.net/450/400' />
    </ LazyLoad>
    <LazyLoad height={250}>
      <Image pic='https://placedog.net/500/400' />
    </ LazyLoad>
    <LazyLoad height={250}>
      <Image pic='https://placedog.net/500/450' />
    </ LazyLoad>

<LazyLoad height={250} once>
        <img src="https://placedog.net/500/280" alt="dog" />
</LazyLoad>
      <LazyLoad height={250} once>
        <img src="https://placedog.net/500/320" alt="dog" />
      </LazyLoad>
      <LazyLoad height={250} offset={150}>
        <img src="https://placedog.net/500/300" alt="happy dog" />
      </LazyLoad>
  </div>
);


export default App;