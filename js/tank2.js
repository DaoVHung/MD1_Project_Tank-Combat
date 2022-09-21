class Tank2 {
    x2
    y2
    color
    direction
    board

    constructor(x2, y2, color, direction, board) {
        var self = this
        self.x2 = x2;
        self.y2 = y2;
        self.color = color;
        self.direction = direction;
        self.board = board;
        self.speed = 30
    }

    setDirection(direction) {
        var self = this
        self.direction = direction
    }

    render_tank2() {
        var self = this
        var context = self.board.getCanvas().getContext('2d')
        context.fillStyle = self.color
        context.fillRect(self.x2, self.y2, TANK_Rong, TANK_Dai);
        self.renderBarrel2(context)
    }

    renderBarrel2(context) {
        var self = this
        context.fillStyle = self.color;
        switch (self.direction) {
            case nongsung_Duoi:
                context.fillRect(self.x2 + TANK_Rong / 2 - Co_Nong / 2, self.y2 + TANK_Dai, Co_Nong, Co_Nong);
                break;
            case nongSung_Len:
                context.fillRect(self.x2 + TANK_Rong / 2 - Co_Nong / 2, self.y2 - Co_Nong, Co_Nong, Co_Nong);
                break;
            case nongSung_Trai:
                context.fillRect(self.x2 - Co_Nong, self.y2 + TANK_Dai / 2 - Co_Nong / 2, Co_Nong, Co_Nong);
                break;
            case nongSung_Phai:
                context.fillRect(self.x2 + TANK_Rong, self.y2 + TANK_Dai / 2 - Co_Nong / 2, Co_Nong, Co_Nong);
                break;
        }
    }

    move2() {
        var self = this
        switch (self.direction) {
            case nongSung_Len:
                self.moveUp2();
                self.board.render();
                break;
            case nongsung_Duoi:
                self.moveDown2();
                self.board.render();
                break;
            case  nongSung_Phai:
                self.moveRight2();
                self.board.render();
                break;
            case nongSung_Trai:
                self.moveLeft2();
                self.board.render();
                break;
        }
        self.board.render();
    }

    moveRight2() {
        var self = this
        if (self.x2 <= self.board.getWidth2() - self.speed - TANK_Rong - Co_Nong)
            self.x2 += self.speed;
        self.board.render();
    }

    moveLeft2() {
        var self = this
        if (self.x2 >= self.speed + Co_Nong) {
            self.x2 -= self.speed;
            self.board.render();
        }
    }

    moveDown2() {
        var self = this
        if (self.y2 <= self.board.getHeight2() - self.speed - TANK_Dai - Co_Nong) {
            self.y2 += self.speed
            self.board.render();
        }
    }

    moveUp2() {
        var self = this
        if (self.y2 >= self.speed + Co_Nong) {
            self.y2 -= self.speed;
            self.board.render();
        }
    }

    fire2() {
        var self = this
        var bullet = new Bullet2(self.x2 + TANK_Rong / 2, self.y2 + TANK_Dai / 2, self.direction, self.board);
        self.board.addBullet2(bullet);
        bullet.move2();
        self.board.render();
    }

    getX2() {
        var self = this
        return self.x2;
    }

    getY2() {
        var self = this
        return self.y2;
    }
}