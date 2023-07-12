import { GatsbyNode } from "gatsby"

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
        type ElementGroupJson {
            name: String!
            bgColor: String!
            borderColor: String!
            bgColorRGB: String!
            borderColorRGB: String!
        }
    `
    createTypes(typeDefs)
}

export const createResolvers: GatsbyNode["createResolvers"] = ({ createResolvers }) => {
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

                    const arBgColor = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(group.bgColor);
                    const bgColorRGB = arBgColor ? parseInt(arBgColor[1], 16)+','+parseInt(arBgColor[2], 16)+','+parseInt(arBgColor[3], 16) : null;

                    const arBorderColor = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(group.borderColor);
                    const borderColorRGB = arBorderColor ? parseInt(arBorderColor[1], 16)+','+parseInt(arBorderColor[2], 16)+','+parseInt(arBorderColor[3], 16) : null;
                    
                    return {
                        name: group.name,
                        bgColor: group.bgColor,
                        borderColor: group.borderColor,
                        bgColorRGB,
                        borderColorRGB
                    };
                },
            },
        },
        mongodbPeriodic_tableElementgroups: {
            bgColorRGB: {
                type: "String",
                resolve: async (source) => {
                    const arBgColor = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(source.bgColor);
                    const bgColorRGB = arBgColor ? parseInt(arBgColor[1], 16)+','+parseInt(arBgColor[2], 16)+','+parseInt(arBgColor[3], 16) : null;

                    return bgColorRGB;
                },
            },
            borderColorRGB: {
                type: "String",
                resolve: async (source) => {
                    const arBorderColor = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(source.borderColor);
                    const borderColorRGB = arBorderColor ? parseInt(arBorderColor[1], 16)+','+parseInt(arBorderColor[2], 16)+','+parseInt(arBorderColor[3], 16) : null;
                    
                    return borderColorRGB;
                },
            }
        },
    });
}