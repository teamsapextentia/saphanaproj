/**
 * main controller
 * Responsible for Handling all front end requests
 * Author: Extentia Information Technology
 * Date: 08/05/2016
 * 
 * */

var CONSTANTS = $.import('tellme_dev.app.utility','constants').CONSTANTS;
var helper = $.import('tellme_dev.app.utility','helper').helper;
var userDbUtils = $.import(CONSTANTS.dbutilsPackageName,'userDbUtils').userDbUtilsObj;
var inventryDbUtils = $.import(CONSTANTS.dbutilsPackageName,'inventryDbUtils').inventryDbUtils;
/*var issueDbUtils = $.import(CONSTANTS.dbutilsPackageName,'issueDbUtils').issueDbUtils;
var notificationUtils = $.import(CONSTANTS.libPackageName,'notification').notificationUtils;*/
var sqlTables = CONSTANTS.SQL_TABLES();
if ($.response) {
    try{
        if($.request.body){
            var body = $.request.body.asString();
            var reqObj = JSON.parse(body);
            var action = reqObj.action;
            var data;
            
            switch(action){
                /*Test Actions*/
                case 'generateAssetToken':
                            data = helper.generateAssetToken(10);
                            break;    
                case 'getLastInsertedId': 
                            data = userDbUtils.getLastInsertedId(sqlTables.tblUser,"phone",'1234567890');
                            break;
                case CONSTANTS.REQUEST_METHODS.GET_EXPERT_TYPES:
                            data = userDbUtils.getExpertTypes();
                            break;
                case CONSTANTS.REQUEST_METHODS.GET_TABLE_LIST: 
                            data = userDbUtils.getTableList();
                            break;
                case CONSTANTS.REQUEST_METHODS.GET_CONSTANTS: 
                            data = userDbUtils.getConstants();
                            break;            
                case CONSTANTS.REQUEST_METHODS.LOGIN_USER: 
                            data = userDbUtils.doLoginAndRetriveUser(reqObj);
                            break;
                case CONSTANTS.REQUEST_METHODS.REGISTER_USER: 
                            data = userDbUtils.registerUser(reqObj);
                            break;
                case CONSTANTS.REQUEST_METHODS.UPDATE_USER: 
                            data = userDbUtils.updateUser(reqObj);
                            break;          
                            
        }
            $.response.setBody(JSON.stringify(data));
            $.response.contentType = "application/json";
        
            
        }else{
           
            $.response.setBody(JSON.stringify(data));
            $.response.contentType = "application/json";
        }
        
    }catch(exception){
        $.response.contentType = "text/plain";
        $.trace.debug(exception.message);
        //$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
        $.response.setBody(exception.message);
    }
}