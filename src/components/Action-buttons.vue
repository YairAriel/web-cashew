<template>
   <div class="action-buttons">
      <div class="box is-action is-add-income">
        <span class="icon">
          <i class="fa fa-plus fa-inverse"></i>
        </span>
      </div>
      <div class="box is-action is-add-expense">
        <span class="icon">
          <i class="fa fa-minus fa-inverse"></i>
        </span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'action-buttons'
}
</script>

<style scoped>
.action-buttons{
    position: relative;
    display: inline-flex;
    transform: translateY(-12rem);
    z-index: 100;
    margin-right: calc(100% - 10rem);
    margin-left: calc(100% - 10rem);
  }
  .is-action{
    position: relative;
    display: inline-block;
    padding: 0.5rem !important;
    border-radius: 100%;
    margin: 0.25rem;
  }
  .is-add-income{
    background-color:rgba(35, 210, 96, 100);
  }
  .is-add-expense{
    background-color: rgba(255, 56, 96, 100);
  }
  .is-action:hover{
    cursor: pointer;
  }
</style>
