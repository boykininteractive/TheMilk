for (let i = 0; i < this.form_locations.length; i++) {
  console.log(i);
  this.form_locations_list.push(
    Vue.util.extend(
      {},
      {
        value: this.form_locations[i].address,
        text: this.form_locations[i].address,
      }
    )
  );
  console.log(this.form_locations[i].name);
}
