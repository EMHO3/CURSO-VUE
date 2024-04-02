<template>
 <section>
    <h3><span>Mis paneles </span> -> {{name}}</h3>
    <input
    type="text" placeholder="Añade una lista" v-model="listname"
    @keyup.enter="add()"/>
    <div class="container">
      <column
      v-for="(list, index) in boardList"
      :key="index"
      :listId="list.id"
      :name="list.name">
      </column>
    </div>
 </section>
</template>

<script>
import Column from '../Column'

export default {name: 'board-view', components: {Column}, props: {name: String, id: String}, data () { return {listname: '', boardList: [{id: '1', name: 'todo'}, { id: '2', name: 'doing' }]} }, methods: {add () { this.boardList.push({ name: this.listname }) }}}
</script>

<style scoped>
 section{
    text-align: left;
 }
 h3{
    color:#37474f;
    text-align:left;
    margin:1.5rem;
 }
 input {
        background-color: #607d8b;
        border: 0;
        border-radius: 3px;
        box-shadow: 0 0 0 0.5px rgba(49,49,93,.03),
        0 2px 5px 0 rgba(49,49,93,.1),
        0 1px 2px 0 rgba(0,0,0,.08);
        color: #607d8b;
        font-size: 1.2rem;
        margin: 0 1rem;
        outline: 0;
        padding: 1rem;
        transition: all 600ms ease;
 }
 input:active,
 input:focus{
    background-color:#fafafa;
 }

 span{
    color:#546e7a;
 }
</style>
