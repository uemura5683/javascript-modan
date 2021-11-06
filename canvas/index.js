        let line = new Array();

        //初期値/////////////
        line[0] = {x1:0,y1:0,  x2:0,  y2:200, color:"white",width:1 };
        line[1] = {x1:10,y1:0, x2:100,y2:400, color:"lime",width:1 };
        line[2] = {x1:20,y1:0, x2:150,y2:400, color:"skyblue",width:1 };
        line[3] = {x1:30,y1:0, x2:200,y2:400, color:"yellow",width:1 };

        let bgColor = "lightblue";  //曼荼羅内背景色
        let borderRadius = "50%";   //角丸
        let divide = 30;            //分割
        let duration = 0.1;         //周期(秒)
        ////////////////////

        const canvas = document.getElementById("canvas");
        const c = canvas.getContext("2d");
        canvas.style.backgroundColor = bgColor;
        canvas.style.borderRadius = borderRadius;

        c.translate(canvas.width / 2, canvas.height / 2);
        const repeat = setInterval(loop, duration*1000);
        let i = 1;

        function loop() {
            for (let i = 0; i < line.length; i++) {
                c.save();
                c.translate(0, -canvas.height / 1);
                c.beginPath();
                c.moveTo(line[i].x1, line[i].y1);
                c.lineTo(line[i].x1, line[i].y2);
                c.strokeStyle = line[i].color;
                c.lineWidth = line[i].width;
                c.stroke();
                c.restore();
            }
            c.rotate(2 * Math.PI / divide);
            i++;
            if (divide < i) { clearInterval(repeat); }
        }