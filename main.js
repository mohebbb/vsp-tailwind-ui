import './index.css'
import Alpine from 'alpinejs'
import mobile_menu from './components/mobile_menu'
import popup from './components/popup'
import tabs from './components/tabs'
import sticky from './components/sticky'
import more_btn from './components/more_btn'
import accordion from './components/accordion'

window.Alpine = Alpine

// include components
Alpine.data('mobile_menu', mobile_menu)
Alpine.data('popup', popup)
Alpine.data('tabs', tabs)
Alpine.data('sticky', sticky)
Alpine.data('more_btn', more_btn)
Alpine.data('accordion', accordion)


Alpine.start()