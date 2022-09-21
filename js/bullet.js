function Bullet(x, y, direction, board) {
    var self = this;
    self.x = x;
    self.y = y;
    self.direction = direction;
    self.board = board;
    self.speed = 5;
    self.render_bullet1 = function () {
        var context = self.board.getCanvas().getContext('2d');
        context.beginPath();
        context.arc(self.getX(), self.getY(), Dan_Radius, 0, Math.PI * 2);
        context.fillStyle = "#FFFF33"
        context.fill();
        context.closePath();
    };
    self.move = function () {
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
    };
    self.moveRight = function () {
        if (self.x <= self.board.getWidth() - self.speed - Dan_Radius) {
            self.x += self.speed;
            self.board.render();
            setTimeout(self.moveRight, 5);
            self.checkCollision2()
        } else {
            self.board.removeBullet(self);
            self.board.render();
        }
    };
    self.moveLeft = function () {
        if (self.x >= self.speed) {
            self.x -= self.speed;
            self.board.render();
            setTimeout(self.moveLeft, 5);
            self.checkCollision2();
        } else {
            self.board.removeBullet(self);
            self.board.render();
        }
    };
    self.moveDown = function () {
        if (self.y <= self.board.getHeight() - self.speed - Dan_Radius) {
            self.y += self.speed;
            self.board.render();
            setTimeout(self.moveDown, 5);
            self.checkCollision2();
        } else {
            self.board.removeBullet(self);
            self.board.render();
        }
    };
    self.moveUp = function () {
        if (self.y >= self.speed) {
            self.y -= self.speed;
            self.board.render();
            setTimeout(self.moveUp, 5);
            self.checkCollision2();
        } else {
            self.board.removeBullet(self);
            self.board.render();
        }
    };
    self.checkCollision2 = function () {
        var obj2 = null;
        self.board.getObj2().forEach(function (tank2) {
            var distanceX = Math.abs((self.x + Dan_Radius / 2) - (tank2.getX2() + TANK_Rong / 2));
            var distanceY = Math.abs((self.y + Dan_Radius / 2) - (tank2.getY2() + TANK_Dai / 2));
            if (distanceX <= (Dan_Radius + TANK_Rong) / 2 && distanceY <= (Dan_Radius + TANK_Dai) / 2) {
                obj2 = tank2;
                self.board.removeBullet(self);
                self.board.render();
            }
        });
        if (obj2 !== null) {
            self.board.removeObj2(obj2);
            self.board.render();
            tinhDiemDo()
            var aww = new Audio('./amThanh/Aww.mp3')
            aww.play()
            // var flute = new Audio('./amThanh/flute.mp3')
            // flute.play()
            scoreR = 'RED WIN'
            ketThuc2 = 'Game Over'
            self.board.render();

        }
    };
    self.getX = function () {
        return self.x;
    };
    self.getY = function () {
        return self.y;
    };
    self.getSpeed = function () {
        return self.speed;
    };
    self.getDirection = function () {
        return self.direction;
    }
}

