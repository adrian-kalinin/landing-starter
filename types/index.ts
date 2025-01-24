export interface Link {
  label: string
  to: string
}

export interface Feature {
  title: string
  description: string
  image: string
}

export interface PlanStyle {
  button: string
  icon: string
  accent?: string
}

export interface PricingPlan {
  name: string
  price: number
  description: string
  features: string[]
  style: PlanStyle
}
