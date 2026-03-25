export default class Product{
    private _id: number;
    private _description: string;
    private _value: number;

    constructor(id: number, description: string, value: number) {
        this._id = id;
        this._description = description;
        this._value = value;
    }

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Getter $value
     * @return {number}
     */
	public get value(): number {
		return this._value;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}

    /**
     * Setter $value
     * @param {number} value
     */
	public set value(value: number) {
		this._value = value;
	}
}