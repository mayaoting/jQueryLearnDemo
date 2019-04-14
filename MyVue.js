// 数据监听

function Observer(value){
    if(!value || (typeof value !== "object")){
        return;
    }
    // 获取data的所有属性
    Object.keys(value).forEach((key) =>{
        // console.log(key);
        // 拦截
        defineReactive(value,key,value[key]);
    })
}


// 拦截数据

function defineReactive(obj,key,val){
    Object.defineProperty(obj,key,{
        get:function(){
            return val;
        },
        set:function(newValue){
            if(newValue === val){
                return;
            }
            val = newValue;
            // console.log(val);
            callback(val);
        }
    });

}

function MyVue(options){
    this.data = options.data;
    console.log(this.data);
    Observer(this.data);
}