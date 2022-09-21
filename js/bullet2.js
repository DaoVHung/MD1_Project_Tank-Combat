function Bullet2(x2, y2, direction2, board) {
    var self = this;
    self.x2 = x2;
    self.y2 = y2;
    self.direction2 = direction2;
    self.board2 = board;
    self.speed = 5;
    self.render_bullet2 = function () {
        var context = self.board2.getCanvas().getContext('2d');
        context.beginPath();
        context.arc(self.getX2(), self.getY2(), Dan_Radius, 0, Math.PI * 2);
        context.fillStyle = '#33FF00'
        context.fill();
        context.closePath();
    };
    self.move2 = function () {
        switch (self.direction2) {
            case nongSung_Len:
                self.moveUp2();
                break;
            case nongsung_Duoi:
                self.moveDown2();
                break;
            case nongSung_Phai:
                self.moveRight2();
                break;
            case nongSung_Trai:
                self.moveLeft2();
                break;
        }
    };
    self.moveRight2 = function () {
        if (self.x2 <= self.board2.getWidth2() - self.speed - Dan_Radius) {
            self.x2 += self.speed;
            self.board2.render();
            setTimeout(self.moveRight2, 5);
            self.checkCollision1();
        } else {
            self.board2.removeBullet2(self);
            self.board2.render();
        }
    };
    self.moveLeft2 = function () {
        if (self.x2 >= self.speed) {
            self.x2 -= self.speed;
            self.board2.render();
            setTimeout(self.moveLeft2, 5);
            self.checkCollision1();
        } else {
            self.board2.removeBullet2(self);
            self.board2.render();
        }
    };
    self.moveDown2 = function () {
        if (self.y2 <= self.board2.getHeight2() - self.speed - Dan_Radius) {
            self.y2 += self.speed;
            self.board2.render();
            setTimeout(self.moveDown2, 5);
            self.checkCollision1();
        } else {
            self.board2.removeBullet2(self);
            self.board2.render();
        }
    };
    self.moveUp2 = function () {
        if (self.y2 >= self.speed) {
            self.y2 -= self.speed;
            self.board2.render();
            setTimeout(self.moveUp2, 5);
            self.checkCollision1();
        } else {
            self.board2.removeBullet2(self);
            self.board2.render();
        }
    };

    self.checkCollision1 = function () {

        var obj = null;
        self.board2.getObj1().forEach(function (tank1) {
            var distanceX = Math.abs((self.x2 + Dan_Radius / 2) - (tank1.getX() + TANK_Rong / 2));
            var distanceY = Math.abs((self.y2 + Dan_Radius / 2) - (tank1.getY() + TANK_Dai / 2));
            if (distanceX <= (Dan_Radius + TANK_Dai) / 2 && distanceY <= (Dan_Radius + TANK_Dai) / 2) {
                obj = tank1;
                self.board2.removeBullet2(self);
                self.board2.render();
            }
        });
        if (obj !== null) {
            self.board2.removeObj1(obj);
            self.board2.render();
            tinhDiemXanh()

            var Aww2 = new Audio('./amThanh/Aww2.mp3')
            Aww2.play()
            var god = new Audio('./amThanh/god.mp3')
            god.play()
            // var flute = new Audio('./amThanh/flute.mp3')
            // flute.play()
            scoreB = "BLUE WIN"
            ketThuc1 = "Game Over"
            self.board2.render();
        }
    };
    self.getX2 = function () {
        return self.x2;
    };
    self.getY2 = function () {
        return self.y2;
    };
    self.getSpeed = function () {
        return self.speed;
    };
    self.getDirection = function () {
        return self.direction2;
    }
}
