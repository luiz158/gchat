package br.leosilvadev.gchat.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod

@Controller
@RequestMapping("/home")
class HomeController extends GController {

	@RequestMapping(method=RequestMethod.GET)
	def home(){
		"home"
	}
	
}
