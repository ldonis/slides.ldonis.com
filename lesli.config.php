<?php
/**
* Lesli
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program. If not, see <http://www.gnu.org/licenses/>.
*
* PHP Version 7
*
* @author   Luis Gdonis <emc2@ldonis.com>
* @license  GPLv3 www.gnu.org/licenses/gpl-3.0.en.html
* @version  GIT: 1.0.0 alpha
* @link     www.lesli.tech
*/


/**
* General information details
* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
* @author Luis Gdonis <emc2@ldonis.com>
*/
Config::set($app, [ 
    'description' => 'Slides for talks and workshops', 
    'name' => 'ldonis', 
    'version' => '1.0', 
    'env' => 'dev'
]);


/**
* Router definition
* ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~ ~·~
* @author Luis Gdonis <emc2@ldonis.com>
*/

$this->get('/', 'IndexController:get')->setName('index');
$this->get('/index[/]', 'LesliController:goHome')->setName('index');
$this->get('/mailchimp[/]', 'MailchimpController:get')->setName('mailchimp');
