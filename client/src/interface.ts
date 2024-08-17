
export interface IProduct{
	id: number,
	id_category: number,
	id_brand: number,
	name: string,
	price: number,
	price_sale?: number,
	quantity: number,
	description: string,
	number_of_purchases: number,
	image: string,
	created_at: string,
	updated_at: string,
	category_name: string,
	brand_name: string
}
export interface ICategory{
	id: number,
	name: string,
	description: string,
	ordinal_number: number,
}