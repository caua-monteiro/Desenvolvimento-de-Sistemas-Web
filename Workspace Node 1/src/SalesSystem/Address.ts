export default class Address{
    private _street: string;
    private _number: number;
    private _city: string;
    private _state: string;
    
    constructor(street: string, number: number, city: string, state: string) {
        this._street = street;
        this._number = number;
        this._city = city;
        this._state = state;
    }

    /**
     * Getter street
     * @return {string}
     */
	public get street(): string {
		return this._street;
	}

    /**
     * Getter number
     * @return {number}
     */
	public get number(): number {
		return this._number;
	}

    /**
     * Getter city
     * @return {string}
     */
	public get city(): string {
		return this._city;
	}

    /**
     * Getter state
     * @return {string}
     */
	public get state(): string {
		return this._state;
	}

    /**
     * Setter street
     * @param {string} value
     */
	public set street(value: string) {
		this._street = value;
	}

    /**
     * Setter number
     * @param {number} value
     */
	public set number(value: number) {
		this._number = value;
	}

    /**
     * Setter city
     * @param {string} value
     */
	public set city(value: string) {
		this._city = value;
	}

    /**
     * Setter state
     * @param {string} value
     */
	public set state(value: string) {
		this._state = value;
	}

}