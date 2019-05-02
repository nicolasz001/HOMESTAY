<template>
  <div>
    <v-flex xs12 md12>
      
             
          <v-dialog v-model="dialog" max-width="600px">
            <template v-slot:no-results>
              <v-alert
                :value="true"
                color="error"
                icon="warning"
              >Your search for "{{ search }}" found no results.</v-alert>
            </template>

            <template v-slot:activator="{ on }">
              
              <v-btn color="primary" dark  v-on="on">เพิ่มข้อมูล </v-btn>
            </template>
            
            <v-card>
              <v-card-title>
                
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              

              <v-card-text>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex xs12 sm6 md12  >
                      <v-text-field ml200 input type="number" v-model="editedItem.name" label="Room No."></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                      <v-text-field v-model="editedItem.calories" label="Name"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                      <v-text-field v-model="editedItem.fat" label="Lastname"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                      <v-text-field input type="number" v-model="editedItem.carbs" label="Tel"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                      <v-text-field v-model="editedItem.protein" label="Guest"></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
                
              </v-card-actions>
            </v-card>
          </v-dialog>
        
 
      
       
    </v-flex>
  </div>
</template>
 

<script>
 

export default {
  components: {
    
  },
  data: () => ({
   
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
 
