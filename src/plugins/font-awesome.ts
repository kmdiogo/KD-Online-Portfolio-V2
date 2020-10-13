import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons"
import { faFileCode, faFileAlt, faChevronRight, faChevronDown, faFolder, faBoxOpen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faLinkedin, faGithubSquare, faWindowClose, faFileCode,
    faFileAlt, faChevronRight, faChevronDown, faFolder, faBoxOpen
)

export { FontAwesomeIcon };
