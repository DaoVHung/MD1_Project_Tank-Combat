class Tank {
    x
    y
    color
    direction
    board

    constructor(x, y, color, direction, board) {
        var self = this
        self.x = x;
        self.y = y;
        self.color = color;
        self.direction = direction;
        self.board = board;
        self.speed = 30
    }

    setDirection(direction) {
        var self = this
        self.direction = direction
    }

    render_tank1() {
        var self = this
        var context = self.board.getCanvas().getContext('2d')
        context.fillStyle = self.color
        context.fillRect(self.x, self.y, TANK_Rong, TANK_Dai);
        self.renderBarrel(context)
    }

    renderBarrel(context) {
        var self = this
        context.fillStyle = this.color;
        switch (self.direction) {
            case nongsung_Duoi:
                context.fillRect(self.x + TANK_Rong / 2 - Co_Nong / 2, self.y + TANK_Dai, Co_Nong, Co_Nong);
                break;
            case nongSung_Len:
                context.fillRect(self.x + TANK_Rong / 2 - Co_Nong / 2, self.y - Co_Nong, Co_Nong, Co_Nong);
                break;
            case nongSung_Trai:
                context.fillRect(self.x - Co_Nong, self.y + TANK_Dai / 2 - Co_Nong / 2, Co_Nong, Co_Nong);
                break;
            case nongSung_Phai:
                context.fillRect(self.x + TANK_Rong, self.y + TANK_Dai / 2 - Co_Nong / 2, Co_Nong, Co_Nong);
                break;
        }
    }

    move() {
        var self = this
        switch (self.direction) {
            case nongSung_Len:
                self.moveUp();
                break;
            case nongsung_Duoi:
                self.moveDown();
                break;
            case nongSung_Phai:
                self.moveRight();
                break;
            case nongSung_Trai:
                self.moveLeft();
                break;
        }
        self.board.render();
    }

    moveRight() {
        var self = this
        if (self.x <= self.board.getWidth() - self.speed - TANK_Rong - Co_Nong)
            self.x += self.speed;
    }

    moveLeft() {
        var self = this
        if (this.x >= this.speed + Co_Nong) {
            this.x -= this.speed;
        }
    }

    moveDown() {
        var self = this
        if (self.y <= self.board.getHeight() - self.speed - TANK_Dai - Co_Nong) {
            self.y += self.speed
        }
    }

    moveUp() {
        var self = this
        if (self.y >= self.speed + Co_Nong) {
            self.y -= self.speed;
        }
    }

    fire() {
        var self = this
        var bullet = new Bullet(self.x + TANK_Rong / 2, self.y + TANK_Dai / 2, self.direction, self.board);
        self.board.addBullet(bullet);
        bullet.move();
        self.board.render();
    }

    getX() {
        var self = this
        return self.x;
    }

    getY() {
        var self = this
        return self.y;
    }
}


