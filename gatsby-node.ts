exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
      type ElementGroupJson implements Node {
        name: String!
        bgColor: String!
        borderColor: String!
      }
    `
    createTypes(typeDefs)
}

exports.createResolvers = ({ createResolvers }) => {
    createResolvers({
        mongodbPeriodic_tableElements: {
            elementGroup: {
                type: 'ElementGroupJson',
                resolve: async (source, args, context, info) => {
                    const group = await context.nodeModel.findOne({ 
                        type: `mongodbPeriodic_tableElementgroups`,
                        query: {
                            filter: { mongodb_id: { eq: source.elementGroupId } }
                        } 
                    });

                    return group;
                },
            },
        },
    });
}