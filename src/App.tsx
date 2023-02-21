import { Stage, Layer, Text } from 'react-konva';
const text = 'react-eimele 示例\n第二段文字q'
function App() {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text
          left={30}
          top={30}
          fill={'red'}
          draggable={true}
          text={text}
          fontSize={60}>
        </Text>
      </Layer>
    </Stage>
  );
}

export default App;
