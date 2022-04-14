import ReactLoading from 'react-loading';
import "../styles/App.css";

const Loading = () => {

    return (<>
        <div className="loading_div">

            <div className="div_in_loading">
                <ReactLoading className="loading_item" type="spinningBubbles" color="#f9a26c" width="150px" />
                </div>
            </div>
        </>)

}

export default Loading;