RegExp.prototype.myExec = function myExec(){
    var str = arguments[0]||'',
        result = [];
    var flag = this.exec(str);
    if(this.global){
        while(flag){   // flag!=null
            result.push(flag[0]);
            flag = this.exec(str);
        }
        return result;
    }else{
        result.push(flag[0])
        return result;
    }
};