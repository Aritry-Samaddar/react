import { useParams } from "react-router-dom";
import DashboardClass from "./DashboardClass";
function DashboardFunctional() {
    return(
        <DashboardClass paramsData={useParams()}></DashboardClass>
    )
}
export default DashboardFunctional