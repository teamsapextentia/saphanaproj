/**
 * main controller
 * Responsible for Handling all front end requests
 * Author: Extentia Information Technology
 * Date: 08/01/2017
 * 
 * */

var CONSTANTS = $.import('tellme_dev.app.utility','constants').CONSTANTS;
var DBHELPER = $.import(CONSTANTS.dbutilsPackageName,'helperDbUtils').helperDBUtils;
var userDbUtils = $.import(CONSTANTS.dbutilsPackageName,'userDbUtils').userDbUtils;
var inventryDbUtils = $.import(CONSTANTS.dbutilsPackageName,'inventryDbUtils').inventryDbUtils;
var issueDbUtils = $.import(CONSTANTS.dbutilsPackageName,'issueDbUtils').issueDbUtils;
var notificationUtils = $.import(CONSTANTS.libPackageName,'notification').notificationUtils;




var client = new $.net.http.Client();

/**
* Responsible for fetching updated data from vendor's DB and updates into STEPS DB w.r.t. scheduler job configured (xsjob)
* 
* @method testFunction
* @params input {Object} device name and emp id
* @return count {Integer} Number of record updated
*/
function testFunction(input){
	
}