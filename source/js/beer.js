App.Beer = DS.Model.extend({
  name: DS.attr('string')
});

App.Beer.FIXTURES = [
 {
   id: 1,
   name: "Bier Bienne 1",
 },
 {
   id: 2,
   name: "Bier Bienne 2",
 },
 {
   id: 3,
   name: "Bier Bienne 3",
 }
];

