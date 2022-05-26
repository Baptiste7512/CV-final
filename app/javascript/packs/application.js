

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"





require("trix")
require("@rails/actiontext")
require("jquery")
Rails.start()
Turbolinks.start()
ActiveStorage.start()
console.log('Hello from application.js')

import "controllers"
import '../src/jquery.min'
import "controllers"

window.jQuery = $;
window.$ = $;
