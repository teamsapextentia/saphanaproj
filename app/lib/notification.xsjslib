/**
 * userDBUtils
 * Responsilbe for db operation for user
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


var notificationUtils = {
    
    //generic php function to send GCM push notification
    sendPushNotification: function (user_Array, message,device_type){
       //return "Test Notification method";
        var dest = $.net.http.readDestination(CONSTANTS.destinationPackageName,"gcm");
        var client = new $.net.http.Client();
        //var request = $.net.http.Request($.net.http.GET, CONSTANTS.GOOGLE_API_PATH);
        var request = new $.net.http.Request($.net.http.POST,'');
       // var req = new $.web.WebRequest($.net.http.GET, "?origins=Frankfurt&destinations=Cologne&mode=driving&language=en-US&sensor=false"); 
        var headers = {
            authorization: 'key=' + CONSTANTS.GOOGLE_GCM_API_KEY,
            contentType: 'application/json'
        };
        
        request.headers.set('Content-Type', headers.contentType);
        request.headers.set('Authorization', headers.authorization);
       
        var fields = {
            registration_ids: arrDonorDeviceToken,            
            data: message
        };
        //set body
        request.setBody(JSON.stringify(fields));  
        //send request
        client.request(request, dest);
        //response
        var responseResult = client.getResponse().body.asString();  
        //return responseResult;
        responseResult = JSON.parse(responseResult);
         
        //Start Code for to check if deviceToken is not valid or not registered then that user should remove from DB
        if (responseResult){
            var arrUnregisteredDeviceToken = [];
            
            // $decodeResult->results[$i]->error == "InvalidRegistration";
            for (var idx = 0, l =  responseResult.results.length; idx < l; idx++ ){ 
                if (responseResult.results[idx].error === 'NotRegistered' ||  responseResult.results[idx].error === 'InvalidRegistration' || responseResult.results[idx].error === 'MissingRegistration'){
                    //return "in if";
                    arrUnregisteredDeviceToken[idx] = userData[idx]; //"'"+ arrDonorDeviceToken[idx]+"'";
                }else{
                    donorRegistered_Array[idx] = userData[idx];
                }                 
            }
           
            if (arrUnregisteredDeviceToken.length !== 0){
                var temp = [];
                for(var i= 0;i < arrUnregisteredDeviceToken.length;i++){
                    temp.push(arrUnregisteredDeviceToken[i].userId);
                }
                var removeIdsString = temp.join();
                var resultStr = this.deleteUsers(removeIdsString);
                
            }
        }      
        //return arrUnregisteredDeviceToken;
        //var body = //responseResult.body ? responseResult.body.asString() : "";
        
        client.close(); // Added to avoid maxbound error in xsjob
        
        return donorRegistered_Array;
    },
};