var ldap = require('ldapjs');

var clientLdap;

// var clientLdap = ldap.createClient({
//     url: 'ldap://perim.local'
// });


// clientLdap.bind("ou=perim,dc=perim,dc=local", "", (error) => {
//     console.log(error)
// })

module.exports = clientLdap;