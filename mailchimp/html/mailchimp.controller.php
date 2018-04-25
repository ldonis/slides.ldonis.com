<?php

class MailchimpController extends LesliController {

	public function __construct($container){

		parent::__construct($container);

	}

	public function get($request, $response, $params){

		return $this->view->render($response, $this->template->section());

	}

}
