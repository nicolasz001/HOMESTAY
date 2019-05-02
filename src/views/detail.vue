<template>
  <div>
     
      <v-app>
        <v-flex xs12 md12>
        <v-parallax
          app
          dark
          src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/47437203_948578151995409_1615773761976401920_o.jpg?_nc_cat=106&_nc_ht=scontent.fbkk12-1.fna&oh=6c10d8c3f7582655c065dc21de06c60d&oe=5D327F95"
          height="900"
          jumbotron
        >
        
         
<div> 
          <h1 class="mrl-500 mrt-60 "  >ข้อมูลทั้งหมด</h1>
           <datapicker/>
           


      
       
      <v-text-field  
        v-model="search"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        append-icon="search"
        label="Search"
        single-line
        hide-details class="wd500   mrl-1200"
      ></v-text-field>  
  
    
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search" class="   wd1200 mrl-500 mrb-35"
    >
    
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.calories }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td>
      </template>
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          
        </v-alert>
      </template>
    </v-data-table>
     </div>
        </v-parallax>
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
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0
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
 
