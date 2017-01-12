/**
 * helper
 * Responsilbe for db operation for inventry and inventry managment
 * Author: Extentia Information Technology
 * Date: 11/01/2017
 * 
 * */

var CONSTANTS = $.import('tellme_dev.app.utility','constants').CONSTANTS;
//var DBHELPER = $.import(CONSTANTS.dbutilsPackageName,'helperDbUtils').helperDbUtils;
//var userDbUtils = $.import(CONSTANTS.dbutilsPackageName,'userDbUtils').userDbUtils;
/*var inventryDbUtils = $.import(CONSTANTS.dbutilsPackageName,'inventryDbUtils').inventryDbUtils;
var issueDbUtils = $.import(CONSTANTS.dbutilsPackageName,'issueDbUtils').issueDbUtils;
var notificationUtils = $.import(CONSTANTS.libPackageName,'notification').notificationUtils;*/

//var sqlTables = CONSTANTS.SQL_TABLES();


var helper = {
    
     /**
     *This function is used to webservice response status code metadata and data. This is something like wrapper.
     * @param {Object} reqObj
     * @return {Object} response
    */
    setResponse: function(statusCode, message, dataObj){
        var response = {
            meta: {
                status: statusCode,
                message: message
            },
            data: dataObj
        };
        
        return response;
    },
    
    
    /**
     *This function is used to generate asset token
     * @param {Object} reqObj
     * @return {Object} response
    */
    generateAssetToken: function(limit){
        if(limit < 6 ){
            return "token must be greater than 6";
        }
        var token = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for( var i = 0; i < limit; i++ ){
            token  += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return token;
    }
};