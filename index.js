const { GraphQLServer } = require('graphql-yoga');

const postures = [
    {name: 'Standing Deep Breathing'},
    {name: 'Half Moon Pose'},
    {name: 'Awkward Pose'},
    {name: 'Eagle Pose'},
    {name: 'Standing Head to Knee'},
    {name: 'Standing Bow'},
    {name: 'Balancing Stick'},
    {name: 'Standing Separate Leg Stretching Pose'},
    {name: 'Triangle Pose'},
    {name: 'Standing Separate Head to Knee Pose'},
    {name: 'Tree Pose'},
    {name: 'Toe Stand'},
]

const typeDefs = `
    type Query {
        yogaPostures: [Posture]!
    }
    
    type Posture {
        name: String!
    }
`
const resolvers = {
    Query: {
        yogaPostures: () => postures
    }
}

const options = { port: 4000 }
const server = new GraphQLServer({ typeDefs, resolvers })
server.start(options, () => console.log('server is running on' + options.port))