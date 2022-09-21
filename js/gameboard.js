class GameBoard {
    constructor(canvas) {
        var self = this
        self.canvas = canvas;
        self.bullets = []
        self.bullets2 = []
        self.obj1 = [
            self.tank = new Tank(Math.random() * 500, Math.random() * 500, 'red', nongsung_Duoi, self),
        ]
        self.obj2 = [
            self.tank2 = new Tank2(Math.random() * 500, Math.random() * 500, '#0066FF', nongSung_Len, self),
        ]
    }

    render() {
        var self = this
        let context = self.canvas.getContext('2d')
        context.clearRect(0, 0, self.canvas.width, self.canvas.height)

        self.obj1.forEach(function (obj) {
            obj.render_tank1()
        })
        self.obj2.forEach(function (obj) {
            obj.render_tank2()
        })
        self.bullets.forEach(function (bullet) {
            bullet.render_bullet1()
        })
        self.bullets2.forEach(function (bullet2) {
            bullet2.render_bullet2()
        })
        // Hiển thị điểm đỏ:
        ctx.fillStyle = "#FF6600";
        ctx.font = "20px Verdana";
        ctx.fillText("" + scoreR, canvas.width - 360, 340);
        ctx.fillStyle = "#FF6600";
        ctx.font = "15px Verdana";
        ctx.fillText("Score Red  = " + localStorage.countD, canvas.width - 130, 15);
        // Hiển thị điểm xanh:
        ctx.fillStyle = "#00CCFF";
        ctx.font = "20px Verdana";
        ctx.fillText("" + scoreB, canvas.width - 360, 340);
        ctx.fillStyle = "#00CCFF";
        ctx.font = "15px Verdana";
        ctx.fillText("Score Blue = " + localStorage.countX, canvas.width - 590, 15);

        ctx.fillStyle = "#DDDDDD";
        ctx.font = "50px Verdana";
        ctx.fillText("" + ketThuc1, canvas.width - 445, 300);
        ctx.fillStyle = "#DDDDDD";
        ctx.font = "50px Verdana";
        ctx.fillText("" + ketThuc2, canvas.width - 445, 300);
    }

    getWidth() {
        var self = this
        return self.canvas.width
    }

    getHeight() {
        var self = this
        return self.canvas.height
    }

    getCanvas() {
        var self = this
        return self.canvas
    }

    addBullet(bullet) {
        var self = this
        self.bullets.push(bullet)
    }

    getObj1() {
        var self = this
        return self.obj1
    }

    getObj2() {
        var self = this
        return self.obj2
    }

    removeBullet(bullet) {
        var self = this
        var index = -1
        for (var i = 0; i < self.bullets.length; i++) {
            if (self.bullets[i] === bullet) {
                index = i
                break
            }
        }
        if (index !== -1) {
            self.bullets.splice(index, 1);
        }
    }

    removeObj1(obj1) {
        var self = this
        var index = -1
        for (var i = 0; i < self.obj1.length; i++) {
            if (self.obj1[i] === obj1) {
                index = i
                break;
            }
        }
        if (index !== -1) {
            self.obj1.splice(index, 1)
        }
    }

    removeObj2(obj2) {
        var self = this
        var index = -1
        for (var i = 0; i < self.obj2.length; i++) {
            if (self.obj2[i] === obj2) {
                index = i
                break;
            }
        }
        if (index !== -1) {
            self.obj2.splice(index, 1)
            // self.bullets2.splice(index,1)
        }
    }

    action(code) {
        var self = this
        switch (code) {
            case 13:
                self.tank.fire()
                var amThanh = new Audio("./amThanh/Tiengsung.mp3");
                amThanh.play();
                break;
            case 32:
                self.tank2.fire2();
                var amThanh = new Audio("./amThanh/Tiengsung.mp3");
                amThanh.play();
                break;
            case 90:
                self.tank2.setDirection(nongSung_Trai);
                self.tank2.move2();
                break;
            case 67:
                self.tank2.setDirection(nongSung_Phai);
                self.tank2.move2();
                break;
            case 83:
                self.tank2.setDirection(nongSung_Len);
                self.tank2.move2();
                break;
            case 88:
                self.tank2.setDirection(nongsung_Duoi);
                self.tank2.move2();
                break
            case 37:
                self.tank.setDirection(nongSung_Trai);
                self.tank.move();
                break;
            case 39:
                self.tank.setDirection(nongSung_Phai);
                self.tank.move();
                break;
            case 38:
                self.tank.setDirection(nongSung_Len);
                self.tank.move();
                break;
            case 40:
                self.tank.setDirection(nongsung_Duoi);
                self.tank.move();
                break;
        }
    }

    getWidth2() {
        var self = this
        return self.canvas.width
    }

    getHeight2() {
        var self = this
        return self.canvas.height
    }

    addBullet2(bullet2) {
        var self = this
        self.bullets2.push(bullet2)
    }

    removeBullet2(bullet2) {
        var self = this
        var index = -1
        for (var i = 0; i < self.bullets2.length; i++) {
            if (self.bullets2[i] === bullet2) {
                index = i
                break
            }
        }
        if (index !== -1) {
            self.bullets2.splice(index, 1);
        }
    }


}