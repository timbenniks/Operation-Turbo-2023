import { makeExecutableSchema } from "@graphql-tools/schema";
import { graphql, GraphQLError } from "graphql";

const typeDefs = `
  type Query {
    articles: [Article]
  }

  type Article {
    url: String!
    title: String!
    description: String!
    date: String!
    collection_id: String!
    image: String!
    comments_count: String!
    tags: String!
    user: User
  }

  type User {
    name: String!
    username: String!
    twitter_username: String!
    github_username: String!
    user_id: String!
    website_url: String!
    profile_image: String!
  }
`;

export default async (req, res) => {
  const { method, body, query: qs } = req;

  if (method !== "GET" && method !== "POST") {
    return res
      .status(405)
      .setHeader("Allow", "GET,POST")
      .send("Method not allowed");
  }

  if (!qs.query && method === "GET")
    return res.status(400).json({
      statusCode: 400,
      error: "Bad Request",
      message: "GET query missing",
    });

  const { query, variables, operationName } = method === "GET" ? qs : body;

  if (!variables.username) {
    res.status(400).json({
      statusCode: 400,
      error: "Bad Request",
      message: "Username missing from variables",
    });
  }

  const data = await fetch(`https://dev.to/api/articles?username=${variables.username}`)
  const result = await data.json()

  const articles = result.map((article) => {
    return {
      url: article.url,
      title: article.title,
      description: article.description,
      date: article.published_timestamp,
      collection_id: article.collection_id,
      image: article.cover_image.split("w_1000/")[1],
      comments_count: article.comments_count,
      tags: article.tags,
      user: article.user
    }
  })

  const resolvers = {
    Query: {
      articles: () => articles
    }
  };

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  try {
    const result = await graphql(
      schema,
      query,
      null,
      null,
      variables,
      operationName
    );

    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(new GraphQLError(err.message));
  }
};