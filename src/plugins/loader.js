// Styles
import '../assets/scss/app.scss';

// Animate.css
import 'animate.css/animate.css';

// Misc
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Custom plugins
import SidebarPlugin from "../components/sidebar/plugin";
import TooltipPlugin from "../components/tooltip/plugin";

// Custom directives
import '../directives/click-outside';

import { createPopper } from '@popperjs/core';

// Base components
import Alert from "../components/base/Alert";
import Badge from "../components/base/Badge";
import Button from "../components/base/Button";
import Card from "../components/base/Card";
import Collapse from "../components/base/Collapse";
import Input from "../components/base/Input";
import Modal from "../components/base/Modal";
import Pagination from "../components/base/Pagination";
import ProgressBar from "../components/base/ProgressBar";
import Select from "../components/base/Select";
import TagInput from "../components/base/TagInput";
import Checkbox from "../components/base/Checkbox";
import Radio from "../components/base/Radio";
import Nav from "../components/base/Navs/Nav";
import NavItem from "../components/base/Navs/NavItem";
import Breadcrumb from "../components/base/Breadcrumb";

window.popper = createPopper;

export default {
    install(Vue){
        // Base components
        Vue.component(Alert.name, Alert);
        Vue.component(Badge.name, Badge);
        Vue.component(Button.name, Button);
        Vue.component(Card.name, Card);
        Vue.component(Collapse.name, Collapse);
        Vue.component(Input.name, Input);
        Vue.component(Modal.name, Modal);
        Vue.component(Pagination.name, Pagination);
        Vue.component(ProgressBar.name, ProgressBar);
        Vue.component(TagInput.name, TagInput);
        Vue.component(Select.name, Select);
        Vue.component(Checkbox.name, Checkbox);
        Vue.component(Radio.name, Radio);
        Vue.component(Nav.name, Nav);
        Vue.component(NavItem.name, NavItem);
        Vue.component(Breadcrumb.name, Breadcrumb);

        // Font awesome icon component
        Vue.component('fa', FontAwesomeIcon);

        // Plugins
        Vue.use(SidebarPlugin);
        Vue.use(TooltipPlugin);
    }
}