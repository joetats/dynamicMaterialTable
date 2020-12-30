# Dynamic Vue Material Table

An extension for the Vue-Material Table component that only needs a specifically formatted object passed to it.

### Usage

I make a lot of dashboards for different types of data analysis, and a lot of this info gets put into a table format

The `vue-material` Table component is awesome for this, being able to model a list of objects and already comes with built in sorting and search. The only issue I had was in having different numbers of columns and displaying/formatting data in different ways.

The `TableCard.vue` component inside `dynamic-table/src/components` will take an JS object with specific properties passed in as a prop, and generate the required table.

The table will collect a header and subheader for the card, and then will model the table rows after the list of objects in ```data```. To select the columns, the ```fields``` property will contain a list of objects with the following properties:

- ```display``` - the string to display in the header
- ```field``` - the name of the property to show in that column
- ```type``` - what kind of value the property contains

Within the component you can add a method that will return different string formattings, in my case (stock market data) I have examples for ints, floats, percents, dollar, etc.

```
// Sample JSON object to feed into the TableCard component:

"data": {
  "header": "Test Data",
  "subheader": "Updated: 2020-12-29 @ 23:50 UTC",
  "data": [
    {
      "volume": 230434494,
      "avgVol": 244877,
      "increase": 940,
      "price": 1.98
    },
  ],
  "fields": [
    { "display": "Volume", "field": "volume", "type": "int" },
    { "display": "Average Volume", "field": "avgVol", "type": "int" },
    { "display": "Increase", "field": "increase", "type": "percent" },
    { "display": "Price", "field": "price", "type": "dollar" }
  ]
}
```
