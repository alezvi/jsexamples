/**
 * @author Alejandro Villafane <info@alezvi.com.ar>
 */

var Calc = {
    history : [],
    result : 0,

    add : function (v) {
        this.result += v;
        return this;
    },
    
    sub : function (v) {
        this.result -= v;
        return this;
    },

    mul : function (v) {
        this.result *= v;
        return this;
    },

    div : function (v) {
        if (v == 0) {
            throw Error('Division by zero!');
        }
        
        this.result /= v;
        return this;
    },

    result : function () {
        return this.history[this.history.length-1];
    },

    reset : function () {
        this.results = [];
        return this;
    },
    
    undo : function () {
		this.history[this.history.length-1] = null;
        return this;
    }
}
