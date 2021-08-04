import '../index.css'
import wrapper from '../store/configureStore'

const App = ({ Component}) => {
    return (
        <>
            {/* <h1>Start</h1> */}
            
            <Component />
            
            {/* <h1>End</h1> */}
        </>
    )
}

export default wrapper.withRedux(App)