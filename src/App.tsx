// import { Stage, Layer, Text } from 'react-konva';
// import BeginPath from './components/BeginPath'
// import Rect from './components/Rect'
import Line from './components/Line'
// const text = 'react-eimele 示例\n第二段文字q'
// function App() {
//   return (
//     <Stage width={window.innerWidth} height={window.innerHeight}>
//       <Layer>
//         <Text
//           left={30}
//           top={30}
//           fill={'red'}
//           draggable={true}
//           text={text}
//           fontSize={60}>
//         </Text>
//       </Layer>
//     </Stage>
//   );
// }

function App() {
  return (
    <div>
      <Line />
    </div>
  )
}


export default App;
