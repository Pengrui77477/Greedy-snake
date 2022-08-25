class Food {
    //定义一个属性表示食物对应的元素
    element: HTMLElement;
    constructor() {
        // ! 非空断言，不可能为空
        this.element = document.getElementById('food')!;

    }
    //定义获取食物X轴坐标
    get X() {
        return this.element.offsetLeft;
    }
    //获取食物的Y轴坐标
    get Y() {
        return this.element.offsetTop;
    }

    //生成食物的随机位置
    change() {
        //0~290之间
        //蛇移动一格就是10px，生成的随机位置必须是10的倍数
        //四舍五入取整
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
    }
}
export default Food