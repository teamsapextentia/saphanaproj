/**
 * complaintsDBUtils
 * Responsilbe for db operation for complaints
 * Author: Extentia Information Technology
 * Date: 04/01/2017
 * 
 * */

var CONSTANTS = $.import('tellme_dev.app.utility','constants').CONSTANTS;
var DBHELPER = $.import(CONSTANTS.dbutilsPackageName,'helperDbUtils').helperDBUtils;
var userDbUtils = $.import(CONSTANTS.dbutilsPackageName,'userDbUtils').userDbUtils;
var inventryDbUtils = $.import(CONSTANTS.dbutilsPackageName,'inventryDbUtils').inventryDbUtils;
var issueDbUtils = $.import(CONSTANTS.dbutilsPackageName,'issueDbUtils').issueDbUtils;
var notificationUtils = $.import(CONSTANTS.libPackageName,'notification').notificationUtils;

var sqlTables = CONSTANTS.SQL_TABLE();


var issueDBUtils = {};