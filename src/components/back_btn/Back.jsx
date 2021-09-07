import { useHistory } from "react-router-dom";
import './back.css';
export const Back = () => {
    let history = useHistory();
    return (
        <div onClick={() => history.goBack()} className='goBack_box'><span className='goBack'>{"<"}</span></div>
    );
};