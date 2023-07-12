export type ElementGroupType = {
  name: string
  bgColor: string
  borderColor: string
  bgColorRGB: string
  borderColorRGB: string
}

export type ElementType = {
    period: number
    group: number
    name: string
    symbol: string
    atomicMass: string
    atomicNumber: number
    meltingPoint: number
    boilingPoint: number
    description: string
    block: string
    discoveryDate: number
    discoveredBy: string
    elementGroup: ElementGroupType
}

