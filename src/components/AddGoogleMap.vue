<template>
  <div>
    <div>
      <h2>VueJs Pesquisar e adicionar marcador</h2>
      <label for="">
        <gmap-autocomplete @place_changed="iniciarMarca"></gmap-autocomplete>
        <button @click="addLocalizacaoMarca">Add</button>
      </label>
      <br />
    </div>
    <br>
    <gmap-map
        :zoom= "14"
        :center ="center"
        style="width:100%; height: 600px;">
      <gmap-marker 
        :key="index"
        v-for="(m, index) in localizacaoMarcas"
        :position = "m.position"
        @click="center=m.position">
      </gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
	name: "AddGoogleMap",
	data() {
		return {
			center: {
				lat: 39.7837304,
				lng: -100.4458825
			},
			localizacaoMarcas: [],
			locPlaces: [],
			existingPlace: null
		};
	},
	mounted() {
		this.localizarGeoLocal()
	},
	methods: {
		iniciarMarca(loc) {
			this.existingPlace = loc
		},
		addLocalizacaoMarca() {
			if (this.existingPlace) {
				const marca = {
					lat: this.existingPlace.geometry.location.lat(),
					lng: this.existingPlace.geometry.location.lng()
				};
				this.localizacaoMarcas.push({ position: marca })
				this.locPlaces.push(this.existingPlace)
				this.center = marca
				this.existingPlace = null
			}
		},
		localizarGeoLocal: function() {
			navigator.geolocation.getCurrentPosition(res => {
				this.center = {
					lat: res.coords.latitude,
					lng: res.coords.longitude
				}
			});
		}
	},
}
</script>

<style>

</style>