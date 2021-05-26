<template>
  <div class="position-relative inline-block">
    <input class="display-none" id="upload-img" type="file" name="image" accept="image/*" @change='handleInputChange'>
    <label for="upload-img" class="upload-img">
      <img v-if="imageSrc" class="img" :src="imageSrc" alt="">
      <span v-else>上传图片</span>
    </label>
  </div>
</template>

<script>
  export default {
    name: "uploadImg",
    data() {
      return {
        imageSrc: '',
        imgFile: {}
      }
    },
    methods: {
      handleInputChange(e) {
        const imgFile = this.imgFile;
        const file = e.target.files[0];
        const imgCompassMaxSize = 200 * 1024; // 超过 200k 就压缩
        if (!file) return;
        imgFile.type = file.type || "image/jpeg";
        imgFile.size = file.size;
        imgFile.name = file.name;
        imgFile.lastModifiedDate = file.lastModifiedDate;
        console.log(imgFile.size);
        const reader = new FileReader();
        reader.readAsDataURL(file); // 将file转base64
        reader.onload =  (e) => {
          const result = e.target.result;
          if(result.length < imgCompassMaxSize) {
            this.compress(result, false );    // 图片不压缩
          } else {
            this.compress(result);            // 图片压缩
          }
        };
      },

      /**
       * 压缩图片
       */
      compress(dataURL, shouldCompress = true) {
        console.log(dataURL.length);
        const image = new Image();
        image.src = dataURL;
        image.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = image.width / 2;
          canvas.height = image.height / 2;
          ctx.drawImage(image,0, 0, canvas.width, canvas.height);
          let compressedDataUrl;
          console.log(shouldCompress);
          if(shouldCompress){
            compressedDataUrl = canvas.toDataURL(this.imgFile.type, 0.1);
          } else {
            compressedDataUrl = canvas.toDataURL(this.imgFile.type, 1);
          }
          console.log(compressedDataUrl.length);
          this.imageSrc = compressedDataUrl;
        }
      }
    }
  }
</script>

<style scoped lang="scss">
.upload-img {
  box-sizing: border-box;
  display: inline-block;
  width: 200px;
  height: 200px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  text-align: center;
  line-height: 200px;
}
.img {
  position: absolute;
  left: 0;
  top: 0;
  width: 200px;
  height: 200px;
  border-radius: 10px;
}
</style>
