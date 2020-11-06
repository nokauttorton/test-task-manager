<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="tasks-filter">
      <div class="search-block">
        <input class="search-input" placeholder="SEARCH" v-model="searchValue"/>
        <button class="clear-input" @click="searchValue = ''"><img class="clear-symbol" src="@/assets/close white.png"></button>
      </div>
      <div class="search-block">
        <input id="sort" class="search-checkbox" type="checkbox" v-model="sort"/>
        <label for="sort" class="checkbox-title">SORT</label>
      </div>
    </div>
    <div v-if="filteredTasks && filteredTasks.length" class="tasks-block">
      <div v-for="task in filteredTasks" :key="task.id" class="task-body" :class="{ 'important-task' : task.importance }">
        <div class="task-info">
          <span class="task-id">{{ task.id }}</span>
          <span class="task-title">{{ task.title }}</span>
        </div>
        <div class="task-status">
          <div class="status-color">
            <div class="pulp" :class="{ 'color-ready': task.completed }"></div>
          </div>
          <div class="task-importance">
            <div class="importance-button" @click="changeTaskImportance(task)">{{ task.importance ? 'IMPORTANT' : 'REGULAR' }}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="empty-text">По параметрам не найдено задач</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    tasks: Array
  },
  data () {
    return {
      searchValue: '',
      sort: false
    }
  },
  computed: {
    filteredTasks () {
      let tasksList = this.tasks
      const value = this.searchValue
      if (value && value.length) {
        tasksList = this.search(tasksList, value)
      }
      if (this.sort) {
        const completeTasks = tasksList.filter(task => task.completed)
        const uncompleteTasks = tasksList.filter(task => !task.completed)
        if (completeTasks.length) {
          tasksList = completeTasks.concat(uncompleteTasks)
        } else {
          tasksList = []
        }
      }
      return tasksList
    }
  },
  methods: {
    changeTaskImportance (task) {
      return task.importance = !task.importance
    },
    search (tasksList, value) {
      return tasksList.reduce(function(sum, current) {
        if (value && current.title.includes(value)) {
          return sum.concat(current)
        }
        return sum
      }, [])
    }
  }
}
</script>
<style lang="scss" scoped>
  $gray: #BAB6B6;
  $grayBackground: #E2E2E2;
  $lightGrayBackground: #ECECEC;
  $buttonColor: #C4C4C4;
  $purpleBackground: #D8DAFA;
  $yellow: #DCAF3A;
  $green: #117557;
  $white: #ffffff;
  $checked: '../assets/check-mark.png';

  .tasks-filter {
    display: flex;
    height: 60px;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  .search-input {
    margin-right: 60px;
    padding-left: 30px;
    width: 400px;
    font-size: 30px;
    line-height: 60px;
    color: $gray;
    cursor: text;
    border-radius: 10px;
    border: 3px solid $gray;

    &::placeholder {
      font-size: 30px;
      line-height: 60px;
      color: $gray;
    }

    &:focus {
      outline: none;
    }
  }

  .clear-input {
    padding: 5px;
    width: 60px;
    height: 60px;
    border: 0;
    border-radius: 10px;
    background-color: $buttonColor;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  .clear-symbol {
    width: 100%;
  }

  .search-block {
    display: flex;
    align-items: center;
  }

  .search-checkbox {
    margin: 0 8px 0 0;
    width: 60px;
    height: 60px;
    border-radius: 10px;
    border: 3px solid $gray;
    appearance: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &:checked {
      opacity: 0.5;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url($checked);
    }
  }

  .checkbox-title {
    font-size: 36px;
    color: $gray;
    cursor: pointer;
  }

  .task-body {
    display: flex;
    margin-bottom: 20px;
    padding: 20px 60px;
    border-radius: 10px;
    background-color: $lightGrayBackground;
  }

  .important-task {
    background-color: $purpleBackground;
  }

  .task-info {
    display: flex;
    width: 50%;
    align-items: center;
  }

  .task-status {
    display: flex;
    width: 50%;
    align-items: center;
  }

  .task-id {
    width: 20%;
    font-size: 36px;
  }

  .task-title {
    width: 70%;
    font-size: 30px;
  }

  .status-color {
    width: 49%;
  }

  .pulp {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background-color: $yellow;
  }

  .color-ready {
    background-color: $green;
  }

  .task-importance {
    width: 50%;
  }

  .importance-button {
    width: 218px;
    height: 36px;
    font-size: 18px;
    line-height: 36px;
    text-align: center;
    color: $white;
    cursor: pointer;
    border-radius: 5px;
    background-color: $buttonColor;
  }

  .empty-text {
    font-size: 36px;
    color: $gray;
  }

  @media screen and (max-width: 1023px) { /* таблеты */
    .search-input {
      margin-right: 35px;
      width: 270px;
      border: 2px solid $gray;
    }

    .search-checkbox {
      border: 2px solid $gray;
    }

    .task-body {
      height: 120px;
      flex-direction: column;
      justify-content: space-between;

      &:nth-child(n+10) {
        .task-info .task-id {
          margin-right: 65px;
          margin-left: 0;
        }
      }
    }

    .task-info,
    .task-status,
    .task-title {
      width: 100%;
    }

    .task-id {
      width: auto;
      margin-left: 8px;
      margin-right: 70px;
    }

    .status-color {
      width: auto;
      margin-right: 60px;
    }
  }

  @media screen and (max-width: 767px) { /* смартфоны */
    .tasks-filter {
      height: auto;
      flex-direction: column;
    }

    .search-block:first-child {
      margin-bottom: 25px;
    }

    .search-input {
      margin-right: 25px;
      width: 250px;
      height: 36px;
      border-radius: 5px;

      &::placeholder {
        font-size: 24px;
        line-height: 40px;
      }
    }

    .clear-input {
      width: 40px;
      height: 40px;
      border-radius: 5px;
    }

    .search-checkbox {
      width: 40px;
      height: 40px;
      border-radius: 5px;
    }

    .checkbox-title {
      font-size: 24px;
    }

    .task-body {
      padding: 30px;
      height: auto;
      min-height: 200px;
      justify-content: space-around;
    }

    .task-info {
      margin-bottom: 40px;
      align-items: start;
    }

    .task-id {
      margin-right: 10%;
    }

    .empty-text {
      font-size: 24px;
    }
  }

  @media screen and (max-width: 400px) { /* маленькие смартфоны */
    .search-input {
      width: 180px;
    }

    .task-title {
      word-break: break-word;
    }

    .importance-button {
      width: 110px;
    }
  }
</style>