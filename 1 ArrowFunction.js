var data={
    name:'ES2015',
    handleMessage:function (message, handle) {
        handle(message);
    },
    receive: function () {
        this.handleMessage("Hello ",
            message => console.log(message + this.name))
    }
}
// 순수자바스크립트 function message(a){}
// (a)= message => {}

data.receive();