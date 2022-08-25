class Snake {
    //获取蛇头
    head: HTMLElement;
    //蛇的身体，包括蛇头，是一个集合
    bodies: HTMLCollection;
    //蛇容器
    element: HTMLElement
    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector("#snake > div") as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');
    }

    get X() {
        return this.head.offsetLeft;
    }
    get Y() {
        return this.head.offsetTop;
    }
    set X(value: number) {
        if (this.X == value) return;
        if (value < 0 || value > 290) {
            throw new Error("蛇撞墙了");
        }
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft == value) {
            //蛇在向左走，尝试向右调头
            if (value > this.X) {
                value = this.X - 10;
            } else {
                value = this.X +10;
            }

        }
        this.moveBody();
        this.head.style.left = value + 'px';
        this.checkHeadBody()
    }
    set Y(value: number) {
        if (this.Y == value) return;
        if (value < 0 || value > 290) {
            throw new Error("蛇撞墙了");
        }
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop == value) {
            if (value > this.Y) {
                value = this.Y - 10;
            } else {
                value = this.Y +10;
            }

        }
        this.moveBody()
        this.head.style.top = value + 'px';
        this.checkHeadBody()
    }

    //给蛇增加长度，添加身体
    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>");
    }
    //蛇身体移动
    moveBody() {
        //后一位的身体设置到前一位的位置，从后往前改
        for (let i = this.bodies.length - 1; i > 0; i--) {
            //获取前一位身体的位置
            let forwordX = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let forwordY = (this.bodies[i - 1] as HTMLElement).offsetTop;

            (this.bodies[i] as HTMLElement).style.left = forwordX + 'px';
            (this.bodies[i] as HTMLElement).style.top = forwordY + 'px';
        }
    }
    //不能撞自己身体
    checkHeadBody(){
        for(let i = 1;i<this.bodies.length;i++){
            let body = this.bodies[i] as HTMLElement;
            if(this.X == body.offsetLeft && this.Y == body.offsetTop){
                //游戏结束
                 throw new Error("game over!");
                 
            }
        }
    }
}

export default Snake