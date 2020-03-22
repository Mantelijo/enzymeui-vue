import Vue from 'vue';
import { createPopper } from '@popperjs/core';


const TooltipPlugin = {
    install(Vue){

        // Popper.js functionality
        Vue.directive('tooltip', {
            inserted(el, {value}, vnode ){
                // v-tooltip should provide the id
                let tooltipObject = null;
                let tooltipId = null;
                if(typeof value === 'object'){
                    tooltipObject = value;
                    tooltipId = tooltipObject.id;
                }
                else{
                    // Only id is provided
                    tooltipId = value
                }
                let tooltip = vnode.context.$tooltips.tooltips[tooltipId];

                if(tooltip === undefined){
                    console.error('Called for undefined tooltip with id:', tooltipId);
                    return;
                }

                el.addEventListener('mouseover', ()=>{
                    tooltip.show = true;
                    createPopper(el, tooltip.$el, {
                        placement:'bottom',
                    });
                    console.log("creating popper");
                });
                el.addEventListener('mouseout', ()=>{
                    tooltip.show = false;
                });

            }
        });

        // Global $tooltips property
        Vue.prototype.$tooltips = new Vue({
            data:{
                tooltips: {},
            },
            methods:{

                // Tooltip registration function. Should be used in Tooltip.vue component beforeMount()
                add(tooltipId, tooltip){
                    console.log("registering tooltip", tooltipId);
                    // Only unique ids should be added
                    if(tooltipId in this.tooltips){
                        console.error("Duplicate tooltip with id: ", tooltipId)
                    }
                    else{
                        // Registering tooltip
                        this.$set(this.tooltips, tooltipId, tooltip);
                    }
                },

                // Unregister tooltip
                remove(tooltipId){
                    delete this.tooltips[tooltipId];
                }
            }
        });
    }
};

export default TooltipPlugin;
