//import ReactLoading from 'react-loading';

import ReactLoading from "react-loading";
import "../styles/App.css";

import SearchHeader from "../components/SearchHeader";

const Loading = () => {

    return (<>
        

            <SearchHeader
            />
        <div className="loading_div">

            <div className="div_in_loading">

            <ReactLoading className="loading_item" type="spinningBubbles" color="#f9a26c" width="150px" />
            </div>

            </div>
        </>)

}

export default Loading;