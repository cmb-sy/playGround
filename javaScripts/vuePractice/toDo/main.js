// https://jp.vuejs.org/v2/examples/todomvc.html
var STORAGE_KEY = "todos-vuejs-demo";
var todoStorage = {
  fetch: function () {
    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    todos.forEach(function (todo, index) {
      todo.id = index;
    });
    todoStorage.uid = todos.length;
    return todos;
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },
};

// Vueのインスタンスを作成：Vue.jsの機能を使用してアプリケーションのデータとUIを管理
const app = new Vue({
  el: "#app", // #はprivateフィールド
  data: {
    todos: [], //空の配列
  },
  method: {
    //   todo処理の追加
    doAdd: function (event, value) {
      // refで名前を付けておいた要素を参照
      var comment = this.$refs.comment;
      // 入力がなければ何もしないでreturn
      if (!comment.value.length) {
        return;
      }
      // { 新しいID, コメント, 作業状態 }
      // というオブジェクトを現在の todos リストへ push
      // 作業状態「state」はデフォルト「作業中=0」で作成
      this.todos.push({
        id: todoStorage.uid++,
        comment: comment.value,
        state: 0,
      });
      //   フォーム要素を空にする。
      comment.value = "";
    },
  },
});