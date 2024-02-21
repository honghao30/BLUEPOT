import Title from "@/components/element/PageTitle.vue"
import MyBtn from "@/components/element/Mybtn.vue"
import MyInput from "@/components/form/input.vue"
import InputEl from "@/components/form/inputEl.vue"
import MyTable from "@/components/element/TableCmp.vue"
import VSelect from "@/components/form/Select.vue"

import ModalView from "@/components/modal/ModalView.vue"

export default {
  install(app) {
    app.component('MyInput', MyInput) 
    app.component('Title', Title)
    app.component('MyBtn', MyBtn)
    app.component('MyTable', MyTable) 
    app.component('VSelect', VSelect)     
    app.component('ModalView', ModalView)            
    app.component('InputEl', InputEl)             
  }
}