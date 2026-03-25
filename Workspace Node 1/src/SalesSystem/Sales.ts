import Product from "./Product";
import Client from "./Client";

export default class Sales {
    private _id: number;
    private _date: string;
    private _client: Client;
    private _products: Product[];

    constructor(id: number, date: string, client: Client, products: Product[]) {
        this._id = id;
        this._date = date;
        this._client = client;
        this._products = products;
    }
    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter date
     * @return {string}
     */
	public get date(): string {
		return this._date;
	}

    /**
     * Getter client
     * @return {Client}
     */
	public get client(): Client {
		return this._client;
	}

    /**
     * Getter products
     * @return {Product[]}
     */
	public get products(): Product[] {
		return this._products;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter date
     * @param {string} value
     */
	public set date(value: string) {
		this._date = value;
	}

    /**
     * Setter client
     * @param {Client} value
     */
	public set client(value: Client) {
		this._client = value;
	}

    /**
     * Setter products
     * @param {Product[]} value
     */
	public set products(value: Product[]) {
		this._products = value;
	}
    
    public calculateTotal(): number {
        return this._products.reduce((total, product) => total + product.value, 0);
    }
}