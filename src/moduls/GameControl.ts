import ScorePanel from "./ScorePanel";
import Snake from "./Snake";
import Food from "./Food";
//游戏控制器，操作其他所有的类
class GameControl {
    //属性
    snake: Snake;
    scorePanel: ScorePanel;
    food: Food;

    //创建一个属性用来存储蛇的移动方向
    direction: string = "";
    //是否存活
    isLive: boolean = true;
    //可以响应的键盘
    keyArr: Array<string> = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"];

    constructor() {
        this.snake = new Snake();
        this.scorePanel = new ScorePanel(10,1);
        this.food = new Food();
    }

    //方法
    //游戏开始
    gameInit() {
        //绑定键盘按键事件
        document.addEventListener('keydown', this.keyDownHandle.bind(this));
        this.run();
    }
    //处理键盘按下响应函数
    keyDownHandle(e: KeyboardEvent) {
        if (this.keyArr.includes(e.key)) {
            this.direction = e.key;
        }
    }
    //判断蛇是否吃到食物
    checkEat(X:number,Y:number){
        if(X == this.food.X && Y == this.food.Y){
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody()
        };
    }
    //移动
    run() {
        let timer;
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch (this.direction) {
            case "ArrowUp":
                Y -= 10;
                break;
            case "ArrowDown":
                Y += 10;
                break;
            case "ArrowLeft":
                X -= 10;
                break;
            case "ArrowRight":
                X += 10;
                break;
        }

        //吃食
        this.checkEat(this.snake.X,this.snake.Y)

        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e) {
            
            alert(e);
            this.isLive = false;
        }

        clearTimeout(timer);
        timer = this.isLive && setTimeout(this.run.bind(this), 200 - (this.scorePanel.level - 1) * 20);

    }

    
}

export default GameControl