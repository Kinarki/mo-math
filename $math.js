/**
 * Created by Andrew N on 2/13/2016.
 */
(function(global){

    var moMath = function(data){
        return new moMath.init(data);
    };

    moMath.prototype = {
        incrementAll: function(increment){
            if(increment){
                this.data.map(function(val){
                    return val + increment;
                });
            }
            else{
                console.log('Error: please check params');
            }
            console.log(this);
            return this;
        }
    };

    moMath.init = function(...args){
        var self = this;
        self.raw_data = arguments;
        self.data = [];
        console.log('self.raw_data is: ', self.raw_data);
        for(var i=0; i<self.raw_data.length; i++){
            var item = self.raw_data[i];
            console.log('item in loop is: ', typeof(item));
            if(typeof(item) === 'number') {
                console.log('here as number');
                self.data.push(item);
            }
            else if(Array.isArray(item)) {
                console.log('here');
                //add array to data
                for(var index in item) {
                    self.data.push(item[index]);
                }
            }
            else if(typeof(item) === 'object'){
                //add each object value to array
                for(var key in item){
                    self.data.push(item[key]);
                }
            }
        }

        return this;
    };

    moMath.init.prototype = moMath.prototype;

    global.moMath = global.$math = moMath;

}(window));