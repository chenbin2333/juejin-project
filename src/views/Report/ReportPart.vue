<template>
<div class="background">
  <Header></Header>
  <div class="container">
    <h1>举报</h1>
    <div class="current-row"></div>
<!--    举报问题部分-->
    <form action="" >
      <div class="byte-form-item__content">
        <div class="byte-form-item__content">
          <h2>举报问题</h2>

          <el-radio v-model="radio" label="1">备选项</el-radio>
          <el-radio v-model="radio" label="2">备选项</el-radio>
        </div>
      </div>
    </form>
<!--  证明材料部分  -->
    <h2>证明材料</h2>
    <el-upload
        action="#"
        list-type="picture-card"
        :auto-upload="false">
      <i slot="default" class="el-icon-plus"></i>
      <div slot="file" slot-scope="{file}">
        <img
            class="el-upload-list__item-thumbnail"
            :src="file.url" alt=""
        >
        <span class="el-upload-list__item-actions">
        <span
            class="el-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
        <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
      </div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>


<!--    举报描述部分-->
    <h2>举报描述</h2>
    <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="textarea">
    </el-input>
    <el-row>
      <el-button type="primary">主要按钮</el-button>
    </el-row>
  </div>
</div>
</template>

<script>
import Header from "../../components/Header";

export default {
  name: "ReportPart",

  data(){
    return {
      textarea: '您可以在此处填写举报说明，最多不超过200个字',
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      radio: '1'
    }
  },
  methods: {
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    }
  },
  components: {
    Header
  },
}
</script>

<style scoped lang="less">
.background{
  background-color: #f4f5f5;
}
.container{
  width: 700px;
  margin: 40px auto 0 auto;
  padding: 30px 50px;
  background: #fff;
  border-radius: 3px;
  box-sizing: border-box;
  h1{
    font-weight: 600;
    font-size: 26px;
    line-height: 18px;
    color: #333;
    margin: 0.67em 0;
  }
  .current-row{
    height: 2px;
    width: 100%;
    background-color: #eaeaea;
    margin: 38px 0 29px;
  }
  form{
    display: block;
    margin-top: 0;
    .byte-form-item__content{
      zoom: 1;
      position: relative;
      font-size: 14px;
      line-height: 32px;
        h2{
          font-weight: 600;
          font-size: 17px;
          line-height: 24px;
          margin-bottom: 20px;
        }
      }
    }
  }

</style>
