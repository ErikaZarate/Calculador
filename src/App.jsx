
import './App.css'
const buttonsClasses="btn btn-primary w-75"
function App() {
  const [screen, setScreen] = useState(0)
  const handleButtonClick=()=>{
    if(screen==="0"){
      setScreen(9)
 }else {
  setScreen(`${screen}9`)
 }
  }
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
              className={'buttonsClasses'}>
              C
            </button>
          </td>
          <td>
            <button type='button'
              className={'buttonsClasses'}>
              /
            </button>
          </td>
          <td>
            <button type='button'
              className={'}buttonsClasses'}>
              *
            </button>
          </td>
          <td>
            <button type='button'
              className={'buttonsClasses'}>
              -
            </button>
          </td>
        </tr>
        {/* Third row*/}
        <tr>
          <td>
            <button type='button'
              className={'buttonsClasses'}>
              7
            </button>
          </td>
          <td>
            <button type='button'
              className={'buttonsClasses'}>
              8
            </button>
          </td>
          <td>
            <button type='button'
              className={'buttonsClasses'}>
                onclick={handleClick}
              9
            </button>
          </td>
          <td rowSpan={2}>
            <button type="button"
            className={"buttonsClasses"}>
              +
            </button>
          </td>
        </tr>
        {/* Fourth row*/}
        <tr>
          <td>
            <button type='button'
              className={'buttonsClasses'}>
              4
            </button>
          </td>
          <td>
            <button type='button'
              className={'buttonsClasses'}>
              5
            </button>
          </td>
          <td>
            <button type='button'
              className={'buttonsClasses'}>
              6
            </button>
          </td>
        </tr>
        {/* */}
        <tr>
          <td>
            <button type='button'
              className={'buttonsClasses'}>
              1
            </button>
          </td>
          <td>
            <button type='button'
              className={'buttonsClasses'}>
              2
            </button>
          </td>
          <td>
            <button type='button'
              className={'buttonsClasses'}>
              3
            </button>
          </td>
          <td rowSpan={2}>
            <button type="button"
            className={"buttonsClasses"}>
              =
            </button>
          </td>
        </tr>
        {/* Six*/}
        <tr>
        <td>
            <button type="button"
            className={"buttonsClasses"}>
              {"<-"}
            </button>
          </td>
          <td>
          <button type='button'
              className={'buttonsClasses'}>
              0
            </button>
          </td>
          <td> <button type='button'
              className={'buttonsClasses'}>
              .
            </button></td>
        </tr>
      </table>
    </div>
  )
}

export default App