# graphql-crash-course

All the course files for the GraphQL Crash Course on the Net Ninja YouTube channel &amp; on Net Ninja Pro.

# What is GraphQL

GraphQL is a query language for your API, and a server-side runtime for executing queries using a type system you define for your data.

## Drawbacks and limitations of REST

1. Over fetching - fetching more data than required, like when there a author linked with a course than needs to be fetched with another API call.
2. Under fetching - fetching less data than needed, like if I need only id and name from a resource, but the GET returns all the fields.

## How GraphQL solves both the issues

1. It only has one single endpoint, like below:

<ins>mygrahqlsite.com/graphql</ins>

and query like this:

Query {
courses {
id, title, thumbnail_ur1
}
}

2. It allows to fetch nested related data within a query:

Query {
course(id: "1") {
i du,
title, thumbnail_url,
author {
name, id,
courses {
id, title, thumbnail_url
}
}
}
}
