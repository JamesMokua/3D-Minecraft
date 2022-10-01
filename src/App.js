import './App.css';
import {Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { Ground } from './components/Ground';
import { Player } from './components/Player';
import {FPV} from './components/FPV'
import {Cubes} from './components/Cubes'
import { TextureSelector } from './components/TextureSelector';
import { Menu } from './components/Menu';
function App() {
  return (
    <div style={{height: "100vh"}}>
    
    <Canvas>
      <Sky sunPosition={[100,100,20]}/>
      <ambientLight intensity={0.5} />
      <FPV/>
      <Physics>
        <Player/>
        <Cubes/>
         <Ground/>
      </Physics>
    </Canvas>
    <div className='absolute centered cursor'>
      <TextureSelector/>
      <Menu/>
    </div>
    </div>
  );
}

export default App;
