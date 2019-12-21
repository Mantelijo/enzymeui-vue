import Sidebar from "./Sidebar.vue";
import SidebarContentOverlay from "./SidebarContentOverlay";

/**
 * Sidebar plugin is used to track if sidebar is closed or opened
 */
const SidebarPlugin = {
    install(Vue){
        Vue.component(Sidebar.name, Sidebar);
        Vue.component(SidebarContentOverlay.name, SidebarContentOverlay);
        let app = new Vue({
            data:{
                sidebarVisible:true,
            },
            methods:{
                toggle(){
                    this.sidebarVisible = !this.sidebarVisible;
                },
                open(){
                    this.sidebarVisible = true;
                },
                close(){
                    this.sidebarVisible = false;
                },
            }
        });
        Vue.prototype.$sidebar = app;
    }
};

export default SidebarPlugin;

