ds.Company.query({  filter: 'staffCount > :1',  params: [500],  orderBy: 'name'})  .then(function (companyCollection) {    var firstCompany = companyCollection.entities[0];  });