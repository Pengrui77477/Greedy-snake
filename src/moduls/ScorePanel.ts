//定义积分盘
class ScorePanel {
    score = 0;
    level = 1;
    //最大等级
    maxLevel:number;
    //升一级所需分数
    upScore:number;

    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    constructor(value:number = 10,upScore:number=10) {
        this.maxLevel = value;
        this.upScore = upScore;
        this.scoreEle = document.getElementById("score")!;
        this.levelEle = document.getElementById("level")!;
    }
    //设置加法的方法
    addScore() {
        this.scoreEle.innerHTML = ++this.score + '';
        if(this.score % this.upScore ==0 ){
            this.levelUp();
        }
    }

    //升级的方法
    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + '';
        }

    }
}

export default ScorePanel