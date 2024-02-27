type ServiceType = {
  name: string
  title: string
  subtitle: string
  text: string
  url: string
  list: string[]
}

type Services = {
  RELOCATION: ServiceType
  IMMIGRATION: ServiceType
  TAX_ADVICE: ServiceType
  CONSULTING: ServiceType
  LANGUAGE_TRAINING: ServiceType
  [key: string]: ServiceType // Add this index signature
}

const services: Services = {
  RELOCATION: {
    name: "RELOCATION",
    title: "Relocation service",
    subtitle: "Relocation service description  is available",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eum cum id, rem culpa repellendus eius dicta sapiente natus beatae sed quibusdam explicabo quia consectetur dolores nisi nulla? Dolor, beatae!",
    url: "https://images.pexels.com/photos/19648032/pexels-photo-19648032/free-photo-of-snowed-peak-seen-from-autumnal-valley.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    list: ["item1", "item2", "item3", "item4"],
  },
  IMMIGRATION: {
    name: "IMMIGRATION",
    title: "IMMIGRATION service",
    subtitle: "IMMIGRATION service description  is available",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eum cum id, rem culpa repellendus eius dicta sapiente natus beatae sed quibusdam explicabo quia consectetur dolores nisi nulla? Dolor, beatae!",
    url: "https://images.pexels.com/photos/19429185/pexels-photo-19429185/free-photo-of-studio-shot-of-two-ripe-lemons.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    list: ["item16", "item2", "item3", "item4"],
  },
  TAX_ADVICE: {
    name: "TAX ADVICE",
    title: "TAX ADVICE service",
    subtitle: "TAX ADVICE service description  is available",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eum cum id, rem culpa repellendus eius dicta sapiente natus beatae sed quibusdam explicabo quia consectetur dolores nisi nulla? Dolor, beatae!",
    url: "https://images.pexels.com/photos/13308447/pexels-photo-13308447.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    list: ["item1", "item2", "item3", "item4"],
  },
  CONSULTING: {
    name: "CONSULTING",
    title: "CONSULTING service",
    subtitle: "CONSULTING service description  is available",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eum cum id, rem culpa repellendus eius dicta sapiente natus beatae sed quibusdam explicabo quia consectetur dolores nisi nulla? Dolor, beatae!",
    url: "https://images.pexels.com/photos/4612459/pexels-photo-4612459.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    list: ["item1", "item2", "item3", "item4"],
  },
  LANGUAGE_TRAINING: {
    name: "LANGUAGE TRAINING",
    title: "LANGUAGE TRAINING service",
    subtitle: "LANGUAGE TRAINING service description  is available",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eum cum id, rem culpa repellendus eius dicta sapiente natus beatae sed quibusdam explicabo quia consectetur dolores nisi nulla? Dolor, beatae!",
    url: "https://images.pexels.com/photos/8354525/pexels-photo-8354525.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    list: ["item1", "item2", "item3", "item4"],
  },
}
export default services
