<template>
  <div class="location-details-container">
    <div class="title"><p>Urban Odyssey!</p></div>
    <div class="input">
      <h2>{{ selectedPlaceName }}</h2>
      <input type="text" v-model="firstName" placeholder="Enter Your First Name" class="ddtinp">
      <input type="text" v-model="lastName" placeholder="Enter Your Last Name" class="ddtinp">
      <label for="cost">Cost</label><br>
      <input type="number" v-model="cost" class="ddtinp">
      <label for="depDate">Departure Date</label><br>
      <input type="date" v-model="depDate" class="ddtinp">
      <label for="returnDate">Return Date</label><br>
      <input type="date" v-model="returnDate" class="ddtinp">
    </div>
    <div class="details">
      <div v-for="ptype in detailsData">
        <div v-if="ptype === 'hotels'">
        <h2>Hotel Details</h2>
        <ul>
          <li v-for="place in favPlaces" :key="place.location_id">
            {{ place.name }} - {{ place.address }}
          </li>
          <!-- Display other hotel-specific details -->
        </ul>
      </div>
      <div v-else-if="ptype === 'restaurants'">
        <h2>Restaurant Details</h2>
        <ul>
          <li v-for="place in favPlaces" :key="place.location_id">
            {{ place.name }} - {{ place.address }}
          </li>
          <!-- Display other restaurant-specific details -->
        </ul>
      </div>
    </div>
      
      
      
    </div>
    
    <!-- Display other details as needed -->
    <button @click="closeModal">Close</button>
  </div>
</template>

<script>
export default {
  props: ['detailsToDisplay', 'selectedPlaceName', 'detailsData', 'favPlaces'],
  data() {
    return {
      firstName: '',
      lastName: '',
      cost: 0,
      date: '',
      backDate: '',
    };
  },
  methods: {
    closeModal() {
      this.$emit('close-modal'); // Emitting the event
    },
  },
};
</script>

<style>
.location-details-container {
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 80vh;
  max-width: 700px; /* Adjust the max-width to make it wider */
  margin: 0 auto;
}

.title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
}

h2 {
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
}

input {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.input {
  padding: 20px;
}

.details {
  padding: 20px;
}

label {
  font-size: 14px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 8px;
}

button {
  background-color: #ff5a5f;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #e74c52;
}
</style>