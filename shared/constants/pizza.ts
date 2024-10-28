export const mapSize = {
	20: 'Маленька',
	30: 'Середня',
	40: 'Велика',	
} as const

export const mapPizzaType = {
	1: 'Традиційна',
	2: 'Тонка',
} as const

export const pizzaSizes = Object.entries(mapSize).map(([value, name]) => ({
	name,
	value	
}))

export const pizzaTypes = Object.entries(mapPizzaType).map(([value, name]) => ({
	name,
	value	
}))

export type PizzaSize = keyof typeof mapSize
export type PizzaType = keyof typeof mapPizzaType