import { useEffect } from "react";
import { preLoaderAnim } from "../../animations";
import "./preloader.css"

const PreLoader = () => {

    useEffect(() => {
        preLoaderAnim()
    }, [])
    return (
        <div className="preloader">
            <div className="texts-container">
                <span>Collaborative, </span>
                <span>  Curious, </span>
                <span> Proactive...</span>
            </div>
        </div>
    )
  };

  export default PreLoader;