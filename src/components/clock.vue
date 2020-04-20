<template>
  <div>
    <canvas class="clock mt-20" ref="clock" width="200" height="200"></canvas>
  </div>
</template>

<script>
  export default {
    name: "clock",
    data() {
      return {}
    },
    mounted() {
      this.drawClock();
    },
    methods: {
      drawClock() {
        let dom = this.$refs.clock;
        let ctx = dom.getContext('2d');
        let width = ctx.canvas.width;
        let height = ctx.canvas.height;
        let r = width/2;
        let hourNums = [3,4,5,6,7,8,9,10,11,12,1,2];
        function drawBackground() {
          ctx.save();
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.font = '18px Arial';
          ctx.translate(r, r);
          ctx.beginPath();
          ctx.fillStyle = '#f9284f';
          ctx.lineWidth = 10;
          ctx.arc(0, 0, r - 5, 0, 2*Math.PI);
          ctx.stroke();
          hourNums.forEach((item, index) => {
            let red = 2*Math.PI/12 * index;
            let x = Math.cos(red) * (r - 30);
            let y = Math.sin(red) * (r - 30);
            ctx.fillText(item.toString(), x, y)
          });
          for (let i = 0; i < 60; i++) {
            ctx.beginPath();
            let red = 2*Math.PI/60 * i;
            let x = Math.cos(red) * (r - 18);
            let y = Math.sin(red) * (r - 18);
            if (i % 5 === 0) {
              ctx.fillStyle = '#000'
            } else {
              ctx.fillStyle = '#ccc'
            }
            ctx.arc(x, y, 2, 0, 2*Math.PI);
            ctx.fill();
          }
        }
        function drawHour(hour, minute) {
          ctx.save();
          ctx.beginPath();
          ctx.lineCap = "round";
          ctx.lineWidth = 6;
          ctx.strokeStyle = '#333';
          let rad = 2*Math.PI/12*hour;
          let mRad =  2*Math.PI/12/60*minute;
          ctx.rotate(rad + mRad);
          ctx.moveTo(0, 10);
          ctx.lineTo(0, - r/2);
          ctx.stroke();
          ctx.restore();
        }
        function drawMinute(minute) {
          ctx.save();
          ctx.beginPath();
          ctx.lineCap = "round";
          ctx.lineWidth = 3;
          ctx.strokeStyle = 'red';
          let rad = 2*Math.PI/60*minute;
          ctx.rotate(rad);
          ctx.moveTo(0, 10);
          ctx.lineTo(0, - r/2 -10);
          ctx.stroke();
          ctx.restore();
        }
        function drawSecond(second) {
          ctx.save();
          ctx.beginPath();
          ctx.lineCap = "round";
          ctx.fillStyle = 'green';
          let rad = 2*Math.PI/60*second;
          ctx.rotate(rad);
          ctx.moveTo(-2, 20);
          ctx.lineTo(2, 20);
          ctx.lineTo(1, -r + 11);
          ctx.lineTo(-1, -r + 11);
          ctx.fill();
          ctx.restore();
        }
        function draw() {
          ctx.clearRect(0, 0, width, height);
          let date = new Date();
          let hour = date.getHours();
          let minute = date.getMinutes();
          let second = date.getSeconds();
          drawBackground();
          drawHour(hour, minute);
          drawMinute(minute);
          drawSecond(second);
          ctx.restore();

        }
        draw();
        setInterval(draw, 1000);
      }
    }
  }
</script>

<style scoped>
  .clock {
    border: 1px solid #999;
  }
</style>