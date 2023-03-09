
import './App.css'
function App() {
return (
    <div className='app'>
      <h1 className='shadow-sm'>Calculator</h1>
      <table>
        {/* First row*/}
        <tr>
          < td colSpan={4} style={{border:"1px solid black",textAlign:"end"}}>
            <h2>0</h2></td>
        </tr>
        {/* Second row*/}
        <tr>
          <td>
            <button type='button'
              className='btn btn-primary w-75'>
              C
            </button>
          </td>
          <td>
            <button type='button'
              className='btn btn-primary w-75'>
              /
            </button>
          </td>
          <td>
            <button type='button'
              className='btn btn-primary '>
              *
            </button>
          </td>
          <td>
            <button type='button'
              className='btn btn-primary'>
              -
            </button>
          </td>
        </tr>
        {/* Third row*/}
        <tr>
          <td>
            <button type='button'
              className='btn btn-primary'>
              7
            </button>
          </td>
          <td>
            <button type='button'
              className='btn btn-primary'>
              8
            </button>
          </td>
          <td>
            <button type='button'
              className='btn btn-primary'>
              9
            </button>
          </td>
          <td rowSpan={2}>
            <button type="button"
            className="btn btn-primary">
              +
            </button>
          </td>
        </tr>
        {/* Fourth row*/}
        <tr>
          <td>
            <button type='button'
              className='btn btn-primary'>
              4
            </button>
          </td>
          <td>
            <button type='button'
              className='btn btn-primary'>
              5
            </button>
          </td>
          <td>
            <button type='button'
              className='btn btn-primary'>
              6
            </button>
          </td>
        </tr>
        {/* */}
        <tr>
          <td>
            <button type='button'
              className='btn btn-primary'>
              1
            </button>
          </td>
          <td>
            <button type='button'
              className='btn btn-primary'>
              2
            </button>
          </td>
          <td>
            <button type='button'
              className='btn btn-primary'>
              3
            </button>
          </td>
          <td rowSpan={2}>
            <button type="button"
            className="btn btn-primary">
              =
            </button>
          </td>
        </tr>
        {/* Six*/}
        <tr>
        <td>
            <button type="button"
            className="btn btn-primary w-75">
              {"<-"}
            </button>
          </td>
          <td>
          <button type='button'
              className='btn btn-primary w-75'>
              0
            </button>
          </td>
          <td> <button type='button'
              className='btn btn-primary w-75'>
              .
            </button></td>
        </tr>
      </table>
    </div>
  )
}

export default App