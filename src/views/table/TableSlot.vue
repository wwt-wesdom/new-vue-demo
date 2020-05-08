<template>
  <div>
    table-slot
    <slot-table :columns="columns" :data="data">
      <template slot-scope="{row, column, index}" slot="name">
        <input type="text" v-model="editName" v-if="editIndex === index" />
        <span v-else>{{ row.name }}</span>
        {{column.slot}}
      </template>

      <template slot-scope="{row, column, index}" slot="age">
        <input type="text" v-model="editAge" v-if="editIndex === index" />
        <span v-else>{{ row.age }}</span>
        {{column.slot}}
      </template>

      <template slot-scope="{row, column, index}" slot="birthday">
        <input type="text" v-model="editBirthday" v-if="editIndex === index" />
        <span v-else>{{ row.birthday }}</span>
        {{column.slot}}
      </template>

      <template slot-scope="{row, column, index}" slot="address">
        <input type="text" v-model="editAddress" v-if="editIndex === index" />
        <span v-else>{{ row.address }}</span>
        {{column.slot}}
      </template>

      <template slot-scope="{row, column, index}" slot="action">
        <div v-if="editIndex === index">
          <button @click="save(row, index)">保存</button>
          <button>取消</button>
        </div>
        <div v-else>
          <button @click="edit(row,index)">编辑</button>
        </div>
        {{column.slot}}
      </template>
    </slot-table>
  </div>
</template>
<script>
  export default {
    name: 'TableRender',
    data () {
      const that = this;
      return {
        columns: [
          {
            title: '姓名',
            key: 'name',
            slot: 'name'
          },
          {
            title: '年龄',
            key: 'age',
            slot: 'age'
          },
          {
            title: '出生日期',
            key: 'birthday',
            slot: 'birthday'
          },
          {
            title: '地址',
            key: 'address',
            slot: 'address'
          },
          {
            title: '操作',
            slot: 'action'
          }
        ],
        data: [
          {
            name: '王小明',
            age: 18,
            birthday: '919526400000',
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            birthday: '696096000000',
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            birthday: '563472000000',
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            birthday: '687024000000',
            address: '深圳市南山区深南大道'
          }
        ],
        editName: '',
        editAge: '',
        editBirthday: '',
        editAddress: '',
        editIndex: -1,
      }
    },
    methods: {
      edit(row, index) {
        this.editName = row.name;
        this.editAge = row.age;
        this.editBirthday = row.birthday;
        this.editAddress = row.address;
        this.editIndex = index
      },
      save(row, index) {
        this.data[index].name = this.editName;
        this.data[index].age = this.editAge;
        this.data[index].birthday = this.editBirthday;
        this.data[index].address = this.editAddress;
        this.editIndex = -1
      }
    }
  }
</script>

