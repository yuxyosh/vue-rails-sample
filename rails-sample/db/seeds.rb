# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Organization.create!([
  { name: 'Books Aoyama', location: 'Tokyo' },
  { name: 'Packpub', location: 'New York' },
  { name: 'London Times', location: 'London' }
])

Organization.first.users.create!( name: 'Ken', email: 'ken@example.com', age: 24 )
Organization.first.users.create!( name: 'Hana', email: 'hana@example.com', age: 18 )
Organization.second.users.create!( name: 'Joe', email: 'joe@example.com', age: 36 )
