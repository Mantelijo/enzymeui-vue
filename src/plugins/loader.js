// Styles
import '../assets/scss/app.scss';

// Base components
import Alert from "../components/base/Alert";
import Badge from "../components/base/Badge";
import Button from "../components/base/Button";
import Card from "../components/base/Card";
import Input from "../components/base/Input";
import Modal from "../components/base/Modal";
import Pagination from "../components/base/Pagination";
import ProgressBar from "../components/base/ProgressBar";
import Select from "../components/base/Select";

// Misc
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Custom plugins
import SidebarPlugin from "../components/sidebar/plugin";

export default {
    install(Vue){
        // Base components
        Vue.component(Alert.name, Alert);
        Vue.component(Badge.name, Badge);
        Vue.component(Button.name, Button);
        Vue.component(Card.name, Card);
        Vue.component(Input.name, Input);
        Vue.component(Modal.name, Modal);
        Vue.component(Pagination.name, Pagination);
        Vue.component(ProgressBar.name, ProgressBar);
        Vue.component(Select.name, Select);

        // Font awesome icon component
        Vue.component('fa', FontAwesomeIcon);

        // Plugins
        Vue.use(SidebarPlugin);
    }
}