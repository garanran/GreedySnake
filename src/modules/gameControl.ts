import Snake from "./snake";
import Food from "./food";
import ScorePanel from "./scorePanel";

export default class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    //按键方向（🐍移动的方向）
    direction: string = '';
    isLive: boolean = true;

    constructor() {
        this.snake = new Snake();
        this.scorePanel = new ScorePanel(10, 10);
        this.food = new Food();
        this.init();
    }

    init() {
        // 绑定键盘事件
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        this.run();
    }

    keydownHandler(event: KeyboardEvent) {
        this.direction = event.key;
    }

    run() {
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch(this.direction) {
            case 'ArrowUp':
            case 'UP':
                Y -= 10;
                break;
            case 'ArrowDown':
            case 'Down':
                Y += 10;
                break;
            case 'ArrowLeft':
            case 'Left':
                X -= 10;
                break;
            case 'ArrowRight':
            case 'Right':
                X +=10;
                break;
        }
        this.checkEat(X, Y)
     
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch(e) {
            alert(e + ' Game Over!');
            this.isLive = false;
        }
        
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
    }

    checkEat(X:number, Y:number): void {
        if(X === this.food.X && Y === this.food.Y) {
            this.scorePanel.addScore();
            this.food.change();
            this.snake.addBody();
        }
    }
}