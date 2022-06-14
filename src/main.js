import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'

import ButtonPrime from 'primevue/button'
import InputText from 'primevue/inputtext'

import 'primevue/resources/themes/lara-light-teal/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import CalendarPrime from 'primevue/calendar';
import TextareaPrime from 'primevue/textarea';
import CheckboxPrime from 'primevue/checkbox';
import DropdownPrime from 'primevue/dropdown';
import ScrollTop from 'primevue/scrolltop';

import '/node_modules/primeflex/primeflex.css'

const app = createApp(App)

app.use(PrimeVue)

app.component('ButtonPrime', ButtonPrime)
app.component('InputText', InputText)
app.component('CalendarPrime', CalendarPrime)
app.component('TextareaPrime', TextareaPrime)
app.component('CheckboxPrime', CheckboxPrime)
app.component('DropdownPrime', DropdownPrime)
app.component('ScrollTop', ScrollTop)

app.mount('#app')
