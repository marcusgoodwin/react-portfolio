import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faServer} from '@fortawesome/free-solid-svg-icons'
import './index.scss'

const Resume = () => {
    return (
        <body>
        <div className="container resume">
            <div className="text">
               <p>Click here for my Resume!
               <a href="https://docs.google.com/document/d/1nEbiosVqeVXlJOnQRjcudqEJm28dfMpxGD6nX9qxiRU/edit">
        <FontAwesomeIcon icon={faServer} color="rgb(151, 233, 207)" />
        </a>
               </p>

            </div>
        </div>
        </body>
    )
}

export default Resume;