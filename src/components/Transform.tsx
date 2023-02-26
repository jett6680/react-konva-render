// matrix(a, b, c, d, e, f)
// ad 水平垂直缩放
// bc 水平垂直倾斜
// ef 水平垂直平移
function Transform() {
  const objStyle = {
    width: 100,
    height: 100,
    background: 'red',
    transform: 'matrix(1, 0, 0, 1, 0, 0)'
  }
  return (
      <div style={{ width: 800, height: 800, border: '1px solid red' }}>
        <div style={objStyle}>

        </div>
      </div>
  )
}

export default Transform
