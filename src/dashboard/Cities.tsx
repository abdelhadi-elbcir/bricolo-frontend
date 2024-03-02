import { Link } from "react-router-dom"
import GetList from "../components/city/GetList"

function Cities() {
    return (
        <>
            <div><Link to='/city/create'>create</Link></div>
            <div>Cities</div>
            <GetList/>
        </>
    )
}

export default Cities