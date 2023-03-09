import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faServer} from '@fortawesome/free-solid-svg-icons'

const Resume = () => {
    return (
        <body>
        <div className="container resume">
            <div className="text">
               <h1>Click here for my Resume!
               <a href="https://docs.google.com/document/d/1u6Kkrm2tANDu5uq9m3HcJ5TZktGLiC6dd884pEAeFw8/edit">
        <FontAwesomeIcon icon={faServer} color="rgb(151, 233, 207)" />
        </a>
               </h1>

            </div>
        </div>
        </body>
    )
}

export default Resume;