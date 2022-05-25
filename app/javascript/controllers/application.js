import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

import "controllers"
import 'jquery.min'
import "controllers"





require("trix")
require("@rails/actiontext")
require("jquery")
Rails.start()
Turbolinks.start()
ActiveStorage.start()
console.log('Hello from application.js')


window.jQuery = $;
window.$ = $;
