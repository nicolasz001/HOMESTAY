<template>
  <div>
     
      <v-app>
        <v-flex xs md6 app>
        
        
         
<div> 
          
           <datapicker/>
           
     
       
      <v-text-field  
        v-model="search"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        append-icon="search"
        label="Search"
        single-line
        hide-details class="wd500   mrl-900"
         
      ></v-text-field>  
  
    
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search" class="   wd1200 mrl-300 mrb-35"
      md6 xs2
    >
    
      <template  v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td class="">{{ props.item.calories }}</td>
        <td class="">{{ props.item.fat }}</td>
        <td class="">{{ props.item.carbs }}</td>
        <td class="">{{ props.item.protein }}</td>
        <td class="">{{ props.item.iron }}</td>
         <td class="justify-center layout px-0">
         
          <v-icon large color="orange darken-2"  @click="editItem(login)" >present_to_all</v-icon>
            <a v-on:click="Home">sdfdsf</a>
        </td>
      </template>
      <template v-slot:no-results>

       
        <v-alert :value="true" color="error" icon="warning">
          
        </v-alert>
      </template>
    </v-data-table>
     </div>
     
         </v-flex>
      </v-app>
    
  </div>
</template>
 

<script>
import datapicker from "@/components/Web/Home/datepicker";


export default {
  components: {
    datapicker
  },
  data: () => ({
    search: "",
    dialog: false,
    headers: [
      {
        text: "Room No.",
        align: "left",
        sortable: false,
        value: "name"
      },
      { text: "ชื่อ", value: "calories" },
      { text: "นามสกุล", value: "fat" },
      { text: "เบอร์ติดต่อ", value: "carbs" },
      { text: "จำนวนผู้พัก", value: "protein" },
      { text: "ระยะเวลาพัก", value: "name" }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: "",
      fat: "",
      carbs: "",
      protein: ""
    },
    defaultItem: {
      name: "",
      calories: "",
      fat: "",
      carbs: "",
      protein: ""
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Customer Data " : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          name: "0001 ",
          calories: "นาย",
          fat: ""
        },
        {
          name: "0002",
          calories: "นาง",
          fat: ""
        },
        {
          name: "0003",
          calories: "",
          fat: ""
        },
        {
          name: "0006",
          calories: "",
          fat: ""
        },
        {
          name: "",
          calories: "",
          fat: ""
        },
        {
          name: "",
          calories: "",
          fat: ""
        },
        {
          name: "",
          calories: "",
          fat: ""
        },
        {
          name: "",
          calories: "",
          fat: ""
        },
        {
          name: "",
          calories: "",
          fat: ""
        },
        {
          name: "",
          calories: "",
          fat: ""
        }
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>
 
