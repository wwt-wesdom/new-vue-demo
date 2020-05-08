<template>
  <div>
    table-render
    <my-table :columns="columns" :data="data"></my-table>
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
            render(h, {row, column, index}) {
              if (that.editIndex === index) {
                return h('input', {
                  domProps: {
                    value: row.name,
                    autofocus: true,
                  },
                  on: {
                    input(e) {
                      that.editName = e.target.value;
                    }
                  }
                })
              } else {
                return h('span', row.name)
              }
            }
          },
          {
            title: '年龄',
            key: 'age',
            render(h, {row, column, index}) {
              if (that.editIndex === index) {
                return h('input', {
                  domProps: {
                    value: row.age
                  },
                  on: {
                    input(e) {
                      that.editAge = e.target.value;
                    }
                  }
                })
              } else {
                return h('span', row.age)
              }
            }
          },
          {
            title: '出生日期',
            key: 'birthday',
            render(h, {row, column, index}) {
              let dataValue = '';
              if (row.birthday.includes('-')) {
                dataValue = row.birthday
              } else {
                const date = new Date(parseInt(row.birthday));
                const year = date.getFullYear();
                const month = date.getMonth() + 1;
                const day = date.getDate();
                dataValue = `${year}-${month}-${day}`;
              }
              if (that.editIndex === index) {
                return h('input', {
                  domProps: {
                    value: dataValue
                  },
                  on: {
                    input(e) {
                      that.editBirthday = e.target.value;
                    }
                  }
                })
              } else {
                return h('span', dataValue);
              }
            }
          },
          {
            title: '地址',
            key: 'address',
            render(h, {row, column, index}) {
              if (that.editIndex === index) {
                return h('input', {
                  domProps: {
                    value: row.address
                  },
                  on: {
                    input(e) {
                      that.editAddress = e.target.value;
                    }
                  }
                })
              } else {
                return h('span', row.address)
              }
            }
          },
          {
            title: '操作',
            render(h, {row, column, index}) {
              if (that.editIndex === index) {
                return [
                  h('button', {
                    on: {
                      click() {
                        that.data[index].name = that.editName;
                        that.data[index].age = that.editAge;
                        that.data[index].birthday = that.editBirthday;
                        that.data[index].address = that.editAddress;
                        that.editIndex = -1;
                      }
                    }
                  }, '保存'),
                  h('button', {
                    // class: ['ml-20'],
                    on: {
                      click() {
                        that.editIndex = -1;
                      }
                    }
                  },'取消')
                ]
              } else {
                return h('button', {
                  on: {
                    click() {
                      that.editName = row.name;
                      that.editAge = row.age;
                      that.editAddress = row.address;
                      that.editBirthday = row.birthday;
                      that.editIndex = index;
                    }
                  }
                }, '编辑')
              }
            }
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
    }
  }
</script>

