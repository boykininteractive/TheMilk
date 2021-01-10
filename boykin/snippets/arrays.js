// ADD ITEM TO ARRAY

this.form_locations_list.push(
  Vue.util.extend(
    {},
    {
      value: this.form_locations[i].address,
      text: this.form_locations[i].address,
    }
  )
);

// REMOVE ITEM FROM ARRAY

this.user.user.data.company.locations.splice(location, 1);
