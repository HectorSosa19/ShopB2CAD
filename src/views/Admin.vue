<script>
    import NavBar from '@/components/NavBar.vue';
    import Footer from '../components/Footer.vue';
    import axios from 'axios';
    const Api_Product='https://localhost:7182/api/Product/';
    const Api_Order='https://localhost:7182/api/Order';
    const Api_Categories='https://localhost:7182/api/Category';
    const Api_ShoppingList='https://localhost:7182/api/ShoppingList';
    const Api_Product_Category='https://localhost:7182/api/ProductCategory';
export default{
    data(){
        return{
            Categories:[],
            Products:[],
            Order:[],
            ShoppingList:[],
            Product_Category:[],
        }
    },
    components:{
            NavBar,Footer
        }
        ,mounted(){
            axios.get(Api_Categories).then((response)=>(this.Categories = response.data));
            axios.get(Api_Product).then((response)=>(this.Products = response.data));
            axios.get(Api_Order).then((response)=>(this.Order = response.data));
            axios.get(Api_ShoppingList).then((response)=>(this.ShoppingList = response.data));
            axios.get(Api_Product_Category).then((response)=>(this.Product_Category = response.data));
        }
}
</script>

<template>
    <div>
        <NavBar/>
        <br/>
        <h3 id="nameproduct">Product Table 😁</h3>
        <div id="TableProduct">
        <table class="table table-striped-columns">
  <thead class="columnsPro">
    <tr>
      <th scope="col">Product ID</th>
      <th scope="col">Name</th>
      <th scope="col">Category</th>
      <th scope="col">Price</th>
      <th scope="col">Date Of Expiry</th>
      <th scope="col">Description</th>
      <th scope="col">Stock</th>
    </tr>
  </thead>
  <tbody v-for="(product,i) in Products" :key="i">
   <th>{{product.id}}</th>
      <th>{{product.name}}</th>
      <th>{{product.category}}</th>
      <th>{{product.price}}</th>
      <th>{{product.dateOfExpiry}}</th>
      <th>{{product.description}}</th>
      <th>{{product.stock}}</th>
      <tr>
    </tr>
  </tbody>
</table>
</div>
<br/>
<h3 id="nameCategories">Categories Table 😁</h3>
        <div id="TableCategories">
        <table class="table table-striped-columns">
  <thead class="columnsPro">
    <tr>
      <th scope="col">Category ID</th>
      <th scope="col">Category</th>
    </tr>
  </thead>
  <tbody v-for="(category,i) in Categories" :key="i">
   <th>{{category.id}}</th>
      <th>{{category.name}}</th>
      <tr>
    </tr>
  </tbody>
</table>
</div>
        <Footer/>
    </div>
</template>

<style>
#nameproduct{
    font-size: 30px;
    margin-left:600px
}
#nameCategories{
    margin-left:603px;
    font-size: 30px;
}
#TableProduct{
    margin:0px;
    padding:0px;
    margin-left:200px;

}
#TableCategories{
    margin:0px;
    padding:0px;
    margin-left:590px;

}

</style>