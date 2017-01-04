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


var userDBUtils = {
    
   /* retriveAdminData: function(){
        return {
            allParticipants: UTILS.getAllParticipants(),
            allDepartments: this.getAllDepartments(),
            allTeams: this.getAllTeams()
        };
      
    },
    
    //retrive all teams 
    getAllTeams: function(){
        var conn = $.db.getConnection();
        var sql = 'SELECT ID, NAME FROM ' + sqlTables.tblTeams;
        var pstmt = conn.prepareStatement(sql);
        var rs = pstmt.executeQuery();
        var teams = {};
        while (rs.next()) {
            teams.push({
                ID: rs.getInteger(1),
                Name: rs.getString(2)
            });
        }
        rs.close();
        pstmt.close();
        return teams;
    }*/
};