/**
 * constants
 * contains all global constant values
 * Author: Extentia Information Technology
 * Date: 04/01/2017
 * 
 * */

var CONSTANTS = {
    packageName:"tellme_dev",
    utilityPackgeName: "tellme_dev.app.utility",
    dbutilsPackageName: "tellme_dev.app.dbutils",
    libPackageName: "tellme_dev.app.lib",
    controllerPackageName:"tellme_dev.app.controller",
    schemaName:"TELLME_DEV",
    dbNamespace:"TELLME_DEV.app.model::tellme_devModel",
    
    USER_TYPE:{
        SUPER_ADMIN: 'Super Admin',
        SUPERVISOR: 'Supervisor',
        EXPERT: 'Expert',
        REPORTER: 'Reporter'
    },
    
    SQL_TABLE: function(){
        return {
            //tblParticipants : '"' + this.schemaName + '"."' + this.dbNamespace +'.PARTICIPANTS"'
        };
    },
    
    
    REQUEST_METHODS:{
        /* User Actions*/
        GET_USER_PROFILE:'getUserProfile', 
        REGISTER_USER:'registerUser', 
        LOGIN_USER :'logInUser', 
        DELETE_USER:'deleteUser', 
        
        /* Inventry Actions */
        ADD_INVENTRY: 'addInventry', // Add inventry item by category wise, subcategory etc
        UPDATE_INVENTRY: 'updateInventry', // update, continue item, discontinue item etc
        DELETE_INVENTRY: 'deleteInventry', // soft delete 
        INVENTRY_LISTING: 'getInventryList', //by category OR all
        INVENTRY_REPORT: 'getInventryReport', // by deleted, continue, discontinued etc
        
        /* Complaint Actions*/
        REGISTER_COMPLAINT:'registerComplaint',
        COMPLAINT_LISTING: 'getComplaintsList',
        
        /* Notification Actions*/
        SEND_NOTIFICATION: 'sendNotification',
        ADD_NOTIFICATION_TRANSACTION_DETAILS: 'addNotificationTransactionDetails',//for internal use
        GET_NOTIFICATION_HISTORY: 'getNotificationHistory',//for internal use
        
        /* Announcement Actions */
        ADD_ANNOUNCEMENT_TRANSACTION: 'addAnnouncementTransaction',
        GET_ANNOUNCEMENT_TRANSACTION_DETAILS: 'getAnnouncementTransactionDetails',
        PUBLISH_ANNOUNCEMENT: 'publishAnnouncement'
        
    },
   
    REPORT_STATUS_FLAG:{
        OPEN : 'Open',
        INPROGRESS: 'In Progress',
        RESOLVED: 'Resolved',
        CLOSED: 'Closed'
    },
    
    ISSUE_SEVERITY:{
        LOW: 'Low',
        MEDIUM: 'Medium',
        HIGH: 'High'
    }
    
    
};