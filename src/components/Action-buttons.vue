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
    padding: 5rem;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    transform: translate(-5%, -18rem);
    z-index: -1;
  }
  .is-action{
    position: relative;
    display: inline-block;
    padding: 0.5rem !important;
    border-radius: 100%;
    margin: 0.25rem;
    z-index: 999 !important;
  }
  .is-add-income{
    background-color:rgb(35, 210, 96);
  }
  .is-add-expense{
    background-color: rgb(255, 56, 96);
  }
  .is-action:hover{
    cursor: pointer;
  }
</style>
