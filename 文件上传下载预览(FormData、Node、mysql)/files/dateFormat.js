module.exports = {
    getDateForMat:function(){
        let dt = new Date();
        let dMonth = dt.getMonth()+1;
        let dMinutes
        dt.getMinutes < 10 ? dMinutes = "0"+dt.getMinutes() : dMinutes = dt.getMinutes();
        let curDate = dt.getFullYear()+'/'+ dMonth+'/'+ dt.getDate() +' '+dt.getHours()+':'+dMinutes;
        return curDate
    }
}